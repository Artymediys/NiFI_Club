pragma ton-solidity >=0.47.0;
pragma AbiHeader time;
pragma AbiHeader pubkey;
pragma AbiHeader expire;

import "../../../libraries/SwiftAddress.sol";
import "IForeverToken.sol";
import "../../stamp/1/IStampToken.sol";
import "../../stamp/1/StampToken.sol";
import "StampContractInfoLib.sol";

struct StampInfo {
    address stamp;
    address owner;
    address seal;
    uint8 place;
}

contract ForeverToken is IForeverToken {

    event TK_CO_nifi_for1_1(uint64 id, address newOwner);
    event TK_MG_nifi_for1_1(uint64 id, address newManager, uint32 expirationTime);
    event FOR_SC_nifi_for1_1(uint64 id,address token1Address, address token2Address, address token3Address, address token4Address, address sealAddress);
    event FOR_EX_nifi_for1_1(uint64 id);

    /*************
     * VARIABLES *
     *************/
    address static _root;
    uint64 static _id;

    address _owner;
    address _manager;
    uint32  _managerUnlockTime;

    address _creator;
    uint32  _creatorPercent;
    uint256 _hash;

    StampInfo[] _stamps;

    uint128 _delForeverCost;

    modifier onlyRoot() {
        require(msg.sender == _root, 101, "Method for the root only");
        _;
    }

    modifier onlyManager {
        require(msg.sender == _manager, 102, "Method for the manager only");
        _;
    }

    modifier onlyLockedManager{
        require(msg.sender == _manager && now < _managerUnlockTime, 103, "Method for locked manager only");
        _;
    }

    modifier onlyUnlockedOwnerOrLockedManager {
        require((msg.sender == _owner && now >= _managerUnlockTime) ||
                (msg.sender == _manager && now < _managerUnlockTime),
                104,
                "Method for the owner or manager only"
        );
        _;
    }

    modifier unlockTimeIsValid(uint32 unlockTime) {
        require(now < unlockTime, 105, "Invalid lock time");
        _;
    }

    modifier addressIsNotNull(address addr) {
        require(addr.value != 0, 106, "Address can't be null");
        _;
    }

    modifier validCreatorPercent(uint32 creatorPercent) {
        require(creatorPercent< 2401, 107, "Unvalid creator fees");
        _;
    }

    modifier onlyOwner{
        require((msg.sender == _owner && now >= _managerUnlockTime) , 108, "Method for owner only");
        _;
    }


    modifier accept {
        tvm.accept();
        _;
    }

    constructor(
        address owner,
        address manager,
        uint32  managerUnlockTime,
        address creator,
        uint32  creatorPercent,
        uint256 hash,
        uint128 delForeverCost
    )
        public
        onlyRoot
        validCreatorPercent(creatorPercent)
        addressIsNotNull(creator)
        addressIsNotNull(owner)
        accept
    {
        _creator = creator;
        _creatorPercent = creatorPercent;
        _hash = hash;
        _owner = owner;
        _manager = manager;
        _managerUnlockTime = managerUnlockTime;
        _delForeverCost = delForeverCost;
    }

    function changeOwner(address owner)
        public
        onlyUnlockedOwnerOrLockedManager
        addressIsNotNull(owner)
        accept
    {
        _owner = owner;
        emit TK_CO_nifi_for1_1{dest: SwiftAddress.value()}(_id, _owner);
    }

    function receiveArtInfo() public view responsible returns(address creator, uint32  creatorPercent, uint256 hash) {
        return{value: 0, bounce: false, flag: 64} getArtInfo();
    }

    function getArtInfo() public view returns(address creator, uint32  creatorPercent, uint256 hash) {
        creator = _creator;
        creatorPercent = _creatorPercent;
        hash = _hash;
    }

    function getInfo() public view returns(address root, uint64 id) {
        root = _root;
        id = _id;
    }

    function receiveTradeInfo() public view responsible returns(
            address owner,
            address creator,
            uint32  creatorPercent,
            address manager,
            uint32  managerUnlockTime
        ) {
        return{value: 0, bounce: false, flag: 64} getTradeInfo();
    }

    function getTradeInfo() public view returns(address owner, address creator, uint32 creatorPercent, address manager, uint32 managerUnlockTime) {
        owner = _owner;
        creator = _creator;
        creatorPercent = _creatorPercent;
        manager = _manager;
        managerUnlockTime = _managerUnlockTime;
    }

    function getStamps() public view returns(StampInfo[] stamps) {
        stamps = _stamps;
    }

    function lockManager(address manager, uint32 unlockTime)
        public
        onlyUnlockedOwnerOrLockedManager
        addressIsNotNull(manager)
        unlockTimeIsValid(unlockTime)
        accept
    {
        _manager = manager;
        _managerUnlockTime = unlockTime;
        emit TK_MG_nifi_for1_1{dest: SwiftAddress.value()}(_id, _manager, _managerUnlockTime);
    }

    function unlock() public onlyLockedManager accept {
        _managerUnlockTime = 0;
    }


    function addStamp(uint64 id, address owner,address seal,uint8 place) public override {
        require(_owner == owner,107);
        TvmCell data = tvm.buildDataInit({
            contr: StampToken,
            varInit: {_root: StampContractInfo.STAMP_ROOT(), _id: id},
            pubkey: StampContractInfo.STAMP_ROOT_PUBKEY
        });
        uint dataHash = tvm.hash(data);
        uint16 dataDepth = data.depth();
        uint256 hash = tvm.stateInitHash(StampContractInfo.STAMP_CODEHASH, dataHash, StampContractInfo.STAMP_CODEDEPTH, dataDepth);
        require(msg.sender==address(hash),106);

        if (_stamps.length<4) {

            _stamps.push(StampInfo(msg.sender,owner,seal,place));

            if (_stamps.length==4) {
                uint8 pos = _stamps[0].place;
                bool bError = false;

                for (uint i=1; i<4; i++) {
                    pos = pos|_stamps[i].place;
                    if (_stamps[i].owner!=_stamps[0].owner || _stamps[i].seal!=_stamps[0].seal) {
                        bError = true;
                        break;
                    }
                }
                if (bError || pos!=15){
                    IStampToken(_stamps[0].stamp).delForever{value: _delForeverCost}();
                    IStampToken(_stamps[1].stamp).delForever{value: _delForeverCost}();
                    IStampToken(_stamps[2].stamp).delForever{value: _delForeverCost}();
                    IStampToken(_stamps[3].stamp).delForever{value: _delForeverCost}();
                    emit FOR_EX_nifi_for1_1{dest: SwiftAddress.value()}(_id);
                    selfdestruct(_owner);
                } else {
                    emit FOR_SC_nifi_for1_1{dest: SwiftAddress.value()}(_id,_stamps[0].stamp,_stamps[1].stamp,_stamps[2].stamp,_stamps[3].stamp,_stamps[0].seal);
                }
            }
        } else {
            IStampToken(msg.sender).delForever{value:0, flag:64}();
        }
    }

    function getParameters() public view returns(uint128 delForeverCost) {
        delForeverCost = _delForeverCost;
    }


}
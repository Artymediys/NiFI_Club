pragma ton-solidity >=0.47.0;
pragma AbiHeader time;
pragma AbiHeader pubkey;
pragma AbiHeader expire;

import "../../../libraries/SwiftAddress.sol";
import "IStampToken.sol";
import "../../forever/1/IForeverToken.sol";
import "../../seal/1/SealToken.sol";
import "SealContractInfoLib.sol";
import "../../../Constants.sol";

contract StampToken is IStampToken {

    event TK_CO_nifi_stamp1_1(uint64 id, address newOwner);
    event TK_MG_nifi_stamp1_1(uint64 id, address newManager, uint32 expirationTime);
    event TK_RQ_nifi_stamp1_1(uint64 id, address seal, uint8 sealPlaces, uint64 value);
    event TK_RX_nifi_stamp1_1(uint64 id);
    event TK_EN_nifi_stamp1_1(uint64 id, address seal, uint8 corner);
    event TK_FE_nifi_stamp1_1(uint64 id, address forever);
    event TK_FD_nifi_stamp1_1(uint64 id, address forever);

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

    uint8 _sealPlace;

    optional(address) _seal;
    uint128 _sealValue;
    uint8 _sealPosiblePlaces;

    optional(address) _forever;

    uint128 _minRequestEndorseFee;
    uint128 _minCancelEndorseFee;
    uint128 _minForAddFee;
    uint128 _forAddFixIncome;
    uint16 _endorseIncomePercent;

    modifier onlyRoot() {
        require(msg.sender == _root, 101, "Method for the root only");
        _;
    }

    modifier onlyManager {
        require(!_forever.hasValue() && msg.sender == _manager, 102, "Method for the manager only");
        _;
    }

    modifier onlyLockedManager{
        require(!_forever.hasValue() && msg.sender == _manager && now < _managerUnlockTime, 103, "Method for locked manager only");
        _;
    }

    modifier onlyUnlockedOwnerOrLockedManager {
        require(!_forever.hasValue()&&(msg.sender == _owner && now >= _managerUnlockTime) ||
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
        require(!_forever.hasValue() && (msg.sender == _owner && now >= _managerUnlockTime) , 108, "Method for owner only");
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
        uint128 minRequestEndorseFee,
        uint128 minCancelEndorseFee,
        uint128 minForAddFee,
        uint128 forAddFixIncome,
        uint16 endorseIncomePercent
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

        _minRequestEndorseFee = minRequestEndorseFee;
        _minCancelEndorseFee = minCancelEndorseFee;
        _minForAddFee = minForAddFee;
        _forAddFixIncome = forAddFixIncome;
        _endorseIncomePercent = endorseIncomePercent;
    }

    function changeOwner(address owner)
        public
        onlyUnlockedOwnerOrLockedManager
        addressIsNotNull(owner)
        accept
    {
        _owner = owner;
        emit TK_CO_nifi_stamp1_1{dest: SwiftAddress.value()}(_id, _owner);
    }

    function receiveArtInfo() public view responsible returns(address creator, uint32  creatorPercent, uint256 hash) {
        return{value: 0, bounce: false, flag: 64} getArtInfo();
    }

    function getArtInfo() public view returns(address creator, uint32  creatorPercent, uint256 hash) {
        creator = _creator;
        creatorPercent = _creatorPercent;
        hash = _hash;
    }

    function getSeal() public view returns (optional(address) seal, uint8 corner) {
        seal = _seal;
        corner = _sealPlace;
    }

    function getForever() public view returns (optional(address) forever) {
        forever = _forever;
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

    function lockManager(address manager, uint32 unlockTime)
        public
        onlyUnlockedOwnerOrLockedManager
        addressIsNotNull(manager)
        unlockTimeIsValid(unlockTime)
        accept
    {
        _manager = manager;
        _managerUnlockTime = unlockTime;
        emit TK_MG_nifi_stamp1_1{dest: SwiftAddress.value()}(_id, _manager, _managerUnlockTime);
    }

    function unlock() public onlyLockedManager accept {
        _managerUnlockTime = 0;
    }

    function requestEndorse(address seal, uint8 places, uint128 price) public onlyOwner {
        require(msg.value>=_minRequestEndorseFee + price, 109);
        require(_sealPlace == 0, 110);
        _seal.set(seal);
        _sealValue = price;
        _sealPosiblePlaces = places;
        emit TK_RQ_nifi_stamp1_1{dest: SwiftAddress.value()}(_id, _seal.get(), places, uint64(_sealValue));

        uint128 shouldBeSentToRoot = msg.value - price - Constants.AVG_GAS_COST;
        _root.transfer({value: shouldBeSentToRoot, flag: 0, bounce: true});
    }

    function cancelEndorse() public  onlyOwner {
        require(_sealPlace == 0, 110);
        require(_seal.hasValue(), 111);
        require(msg.value>=_minCancelEndorseFee,112);
        _seal.reset();
        _owner.transfer({value: _sealValue, flag: 1, bounce: true});
        emit TK_RX_nifi_stamp1_1{dest: SwiftAddress.value()}(_id);
        _root.transfer({value: 0, flag: 64, bounce: true});
    }

    function endorse(uint64 id, uint8 place, address sealOwner) public override {
        require(_seal.hasValue() && msg.sender==_seal.get(), 111);
        require((place&_sealPosiblePlaces)!=0,113);
        TvmCell data = tvm.buildDataInit({
            contr: SealToken,
            varInit: {_root: SealContractInfo.SEAL_ROOT(), _id: id},
            pubkey: SealContractInfo.SEAL_ROOT_PUBKEY
        });
        uint dataHash = tvm.hash(data);
        uint16 dataDepth = data.depth();
        uint256 hash = tvm.stateInitHash(SealContractInfo.SEAL_CODEHASH, dataHash, SealContractInfo.SEAL_CODEDEPTH, dataDepth);
        require(msg.sender==address(hash),106);
        tvm.accept();
        _sealPlace = place;
        emit TK_EN_nifi_stamp1_1{dest: SwiftAddress.value()}(_id,_seal.get(),_sealPlace);
        if (_endorseIncomePercent>0) {
            uint128 shouldBeSentToRoot = math.muldiv( _sealValue, _endorseIncomePercent, 10000);
            sealOwner.transfer({value: _sealValue-shouldBeSentToRoot, flag: 1, bounce: true});
            _root.transfer({value: 0, flag: 64, bounce: true});
        } else {
            sealOwner.transfer({value: _sealValue, flag: 1, bounce: true});
        }
    }

    function setForever(address forever) public onlyOwner {
        //todo check value & comissions
        require(msg.value>=_minForAddFee,112);
        require(!_forever.hasValue(),115);
        require(_seal.hasValue(),114);
        require(_sealPlace!=0,116);
        _forever.set(forever);
        _root.transfer({value: _forAddFixIncome, flag: 0, bounce: true});
        emit TK_FE_nifi_stamp1_1{dest: SwiftAddress.value()}(_id,forever);
        IForeverToken(forever).addStamp{value: 0, flag: 64}(_id,_owner,_seal.get(),_sealPlace);
    }

    function delForever() public override {
        require(_forever.hasValue() && (msg.sender == _forever.get()) , 118);
        _forever.reset();
        emit TK_FD_nifi_stamp1_1{dest: SwiftAddress.value()}(_id,msg.sender);
    }

    function getParameters() public returns(
        uint128 minRequestEndorseFee,
        uint128 minCancelEndorseFee,
        uint128 minForAddFee,
        uint128 forAddFixIncome
    ) {
        minRequestEndorseFee = _minRequestEndorseFee;
        minCancelEndorseFee = _minCancelEndorseFee;
        minForAddFee = _minForAddFee;
        forAddFixIncome = _forAddFixIncome;
    }

}
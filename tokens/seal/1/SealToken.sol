pragma ton-solidity >=0.47.0;
pragma AbiHeader time;
pragma AbiHeader pubkey;
pragma AbiHeader expire;

import "../../../libraries/SwiftAddress.sol";
import "../../stamp/1/IStampToken.sol";

contract SealToken {

    uint8 constant CORNER_SW = 1;
    uint8 constant CORNER_SE = 2;
    uint8 constant CORNER_NW = 4;
    uint8 constant CORNER_NE = 8;

    event TK_CO_nifi_seal_1(uint64 id, address newOwner);
    event TK_MG_nifi_seal_1(uint64 id, address newManager, uint32 expirationTime);

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

    uint128 _endorseStampCost;
    uint128 _endorseRootFixIncome;

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
        uint128 endorseStampCost,
        uint128 endorseRootFixIncome
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
        _endorseStampCost = endorseStampCost;
        _endorseRootFixIncome = endorseRootFixIncome;
    }

    function changeOwner(address owner)
        public
        onlyUnlockedOwnerOrLockedManager
        addressIsNotNull(owner)
        accept
    {
        _owner = owner;
        emit TK_CO_nifi_seal_1{dest: SwiftAddress.value()}(_id, _owner);
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

    function lockManager(address manager, uint32 unlockTime)
        public
        onlyUnlockedOwnerOrLockedManager
        addressIsNotNull(manager)
        unlockTimeIsValid(unlockTime)
        accept
    {
        _manager = manager;
        _managerUnlockTime = unlockTime;
        emit TK_MG_nifi_seal_1{dest: SwiftAddress.value()}(_id, _manager, _managerUnlockTime);
    }

    function unlock() public onlyLockedManager accept {
        _managerUnlockTime = 0;
    }

    function endorse(address stamp, uint8 place) public onlyOwner {
        uint128 minEndorseFee = _endorseRootFixIncome + _endorseStampCost;
        require(msg.value >= minEndorseFee, 111);

        require(place==CORNER_SW || place==CORNER_SE || place==CORNER_NW || place==CORNER_NE, 112 );

        IStampToken(stamp).endorse{value: _endorseStampCost, flag: 0, bounce: true}(_id,place,_owner);

       _root.transfer({value: _endorseRootFixIncome, flag: 0, bounce: true});
    }

    function getParameters() public view returns(uint128 endorseStampCost, uint128 endorseRootFixIncome) {
        endorseStampCost = _endorseStampCost;
        endorseRootFixIncome = _endorseRootFixIncome;
    }

}
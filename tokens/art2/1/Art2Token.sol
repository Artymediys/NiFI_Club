pragma ton-solidity >= 0.47.0;
pragma AbiHeader time;
pragma AbiHeader pubkey;
pragma AbiHeader expire;

import "../../../libraries/SwiftAddress.sol";

contract Art2Token {

    event TK_CO_nifi_art2_1(uint64 seriesId, uint64 id, address newOwner);
    event TK_MG_nifi_art2_1(uint64 seriesId, uint64 id, address newManager, uint32 expirationTime);

    /*************
     * VARIABLES *
     *************/
    address static _root;
    address static _series;
    uint64 static _seriesId;
    uint64 static _id;



    address _owner;
    address internal _manager;
    uint32  internal _managerUnlockTime;

    address   private _creator;
    uint32    private _creatorPercent;
    uint256   private _hash;



    modifier onlySeries() {
        require(msg.sender == _series, 101, "Method for the series only");
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


    modifier accept {
        tvm.accept();
        _;
    }



    /***************
     * CONSTRUCTOR *
     ***************/
    /**
     * owner ............... Address of token owner.
     * manager ............. Contract that governs this contract.
     * managerUnlockTime ... UNIX time. Time when the manager can be unlocked.
     * creator ............. Address of creator.
     * creatorPercent ......... Creator fee. e.g. 1 = 0.01%. 1 is minimum. 10_000 is maximum.
     * hash ................ Hash of data that associated with token.
     */
    constructor(
        address owner,
        address manager,
        uint32  managerUnlockTime,
        address creator,
        uint32  creatorPercent,
        uint256 hash
    )
        public
        onlySeries
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
    }

    function changeOwner(address owner)
        public
        onlyUnlockedOwnerOrLockedManager
        addressIsNotNull(owner)
        accept
    {
        _owner = owner;
        emit TK_CO_nifi_art2_1{dest: SwiftAddress.value()}(_seriesId, _id, _owner);
    }

    function receiveArtHash() public view responsible returns(uint256 hash) {
        return{value: 0, bounce: false, flag: 64} getArtHash();
    }

    function getArtHash() public view returns(uint256 hash) {
        hash = _hash;
    }

    function getInfo() public view returns(address root, address series, uint64 seriesId, uint64 id) {
        root = _root;
        series = _series;
        seriesId = _seriesId;
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

     /*******************************************************
     * EXTERNAL * ONLY OWNER IF UNLOCKED OR LOCKED MANAGER *
     *******************************************************/
    /**
     * Owner can set manager and lock. To prevent manager from replacing during trading, he is locked.
     * If manager is already locked, call revert().
     * manager ...... Contract that governs this contract.
     * unlockTime ... UNIX time. Time when manager can be unlocked.
     */
    function lockManager(address manager, uint32 unlockTime)
        public
        onlyUnlockedOwnerOrLockedManager
        addressIsNotNull(manager)
        unlockTimeIsValid(unlockTime)
        accept
    {
        _manager = manager;
        _managerUnlockTime = unlockTime;
        emit TK_MG_nifi_art2_1{dest: SwiftAddress.value()}(_seriesId, _id, _manager, _managerUnlockTime);
    }

    /**********************************
     * EXTERNAL * ONLY LOCKED MANAGER *
     **********************************/
    /**
     * Manager can unlock himself.
     * If manager is already unlocked, call revert().
     */
    function unlock() public onlyLockedManager accept {
        _managerUnlockTime = 0;
    }

}
pragma ton-solidity >=0.47.0;
pragma AbiHeader time;
pragma AbiHeader pubkey;
pragma AbiHeader expire;

import "../../libraries/NotificationAddress.sol";
import "CollectionToken.sol";

contract Collection {

    uint128 constant GAS = 0.1 ton;
    uint128 constant TOKEN_MINT_GAS = 0.2 ton;
    uint128 constant CREATOR_MINT_MIN = 0.5 ton;

    address static _root;
    uint64 static _id;
    address _creator;
    address _manager;//sdk msig
    string _name;
    string _symbol;
    TvmCell _tokenCode;
    uint32 _totalSupply;
    uint32 _ready2Mint;
    uint64 _limit;
    uint32 _creatorPercent;
    uint128 _minMintFee;

    string[] _level1;
    string[] _level2;
    string[] _level3;
    string[] _level4;
    string[] _level5;

    string _hash;
    uint32 _startTime;

    event TK_MT_nifi_col1_1(uint64 collectionId, uint32 index, uint8 id1, uint8 id2, uint8 id3, uint8 id4, uint8 id5);
    event SRC_PY_nifi_col1_1(uint64 collectionId, uint32 futureId, uint128 value, address owner);

    modifier onlyRoot() {
        require(msg.sender == _root, 101, "Method for the root only");
        _;
    }

    modifier onlyManager() {
        require(msg.sender == _manager, 102, "Method for the manager only");
        _;
    }

    /***************
     * CONSTRUCTOR *
     ***************/
    constructor(
        address creator,
        address manager,
        string  name,
        string  symbol,
        uint64 limit,
        TvmCell tokenCode,
        uint32 creatorPercent,
        uint128 minMintFee,
        string[] level1,
        string[] level2,
        string[] level3,
        string[] level4,
        string[] level5,
        string hash,
        uint32 startTime
    )
        public onlyRoot
    {
        _creator = creator;
        _manager = manager;
        _name = name;
        _symbol = symbol;
        _tokenCode = tokenCode;
        _limit = limit;
        _creatorPercent = creatorPercent;
        _minMintFee = minMintFee;
        _level1 = level1;
        _level2 = level2;
        _level3 = level3;
        _level4 = level4;
        _level5 = level5;
        _hash = hash;
        _startTime = startTime;
    }

    function mint(
        uint32 mintId,
        address owner,
        uint8 id1,
        uint8 id2,
        uint8 id3,
        uint8 id4,
        uint8 id5
    )
        public
    {
        require(now > _startTime, 112);
        require(_totalSupply<_limit,103);
        require(msg.sender == _manager,102);
        require(msg.value >= CREATOR_MINT_MIN);
        require(_totalSupply+1==mintId,106);
        _totalSupply++;
        new CollectionToken{
            code: _tokenCode,
            value: TOKEN_MINT_GAS,
            pubkey: tvm.pubkey(),
            varInit: {
                _root: _root,
                _collection: address(this),
                _collectionId: _id,
                _id1: id1,
                _id2: id2,
                _id3: id3,
                _id4: id4,
                _id5: id5
            }
        }(owner,_creator,_creatorPercent, mintId);
        if (owner == _creator) {
            if (msg.value-GAS-TOKEN_MINT_GAS>0.01 ton) {
                _root.transfer({value: msg.value-GAS-TOKEN_MINT_GAS, bounce: true, flag: 0});
            }
        } else {
            uint128 half = (msg.value-GAS-TOKEN_MINT_GAS)/2;
            if (half>0.01 ton) {
                _creator.transfer({value: half, bounce: true, flag: 0});
                _root.transfer({value: half, bounce: true, flag: 0});
            }
        }
        emit TK_MT_nifi_col1_1{dest: NotificationAddress.value()}(_id,_totalSupply,id1,id2,id3,id4,id5);

    }


    function mintToken() public {
        require(now > _startTime, 112);
        require((msg.value >= _minMintFee) || ((msg.sender == _creator)&&(msg.value >= CREATOR_MINT_MIN)),105);
        _manager.transfer(msg.value, false);
        _ready2Mint++;
        emit SRC_PY_nifi_col1_1{dest: NotificationAddress.value()}(_id, _ready2Mint, msg.value, msg.sender);
    }

    /***********
     * GETTERS *
     ***********/
    function getTokenAddress(uint8 id1, uint8 id2, uint8 id3, uint8 id4, uint8 id5) public view returns(address addr) {
        TvmCell stateInit = tvm.buildStateInit({
            code: _tokenCode,
            contr: CollectionToken,
            pubkey: tvm.pubkey(),
            varInit: {
                _root: _root,
                _collection: address(this),
                _collectionId: _id,
                _id1: id1,
                _id2: id2,
                _id3: id3,
                _id4: id4,
                _id5: id5
        }});
        return address(tvm.hash(stateInit));
    }

    function getManager() public view returns(address){
        return _manager;
    }

    function changeManager(address newManager) public {
        require(msg.sender == _manager,102);
        tvm.accept();
        _manager = newManager;
    }

    function getInfo() public view functionID(0xa) returns(uint64 id, string  name, string  symbol, uint64 totalSupply, uint64 limit, address creator, uint32 creatorPercent, string hash, uint128 minMintFee , uint32 startTime){
        id = _id;
        name = _name;
        symbol = _symbol;
        totalSupply = _totalSupply;
        limit = _limit;
        creator = _creator;
        creatorPercent = _creatorPercent;
        hash = _hash;
        minMintFee = _minMintFee;
        startTime = _startTime;
    }

    function getLevels() public view returns(string[] level1,string[] level2,string[] level3,string[] level4,string[] level5) {
        level1 = _level1;
        level2 = _level2;
        level3 = _level3;
        level4 = _level4;
        level5 = _level5;
    }

    function withdraw(address addr, uint128 value, bool bounce) public view {
        require(msg.sender == _creator,101);
        tvm.accept();
        addr.transfer(value, bounce);
    }
}

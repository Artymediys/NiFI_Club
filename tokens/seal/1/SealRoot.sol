pragma ton-solidity >=0.47.0;
pragma AbiHeader time;
pragma AbiHeader pubkey;
pragma AbiHeader expire;

import "../../../libraries/SwiftAddress.sol";
import "SealToken.sol";

contract SealRoot  {

    address _manager;
    uint128 _creationTopup;
    uint128 _minCreationFee;
    string _name;
    string _symbol;
    TvmCell _tokenCode;
    uint64 _totalSupply;
    uint128 _endorseStampCost;
    uint128 _endorseRootFixIncome;

    event TK_CT_nifi_seal_1(uint64 id);

    modifier validCreatorPercent(uint32 creatorPercent) {
        require(creatorPercent< 2401, 277);
        _;
    }

    /***************
     * CONSTRUCTOR *
     ***************/
    constructor(
        address manager,
        uint128 minCreationFee,
        uint128 creationTopup,
        string  name,
        string  symbol,
        TvmCell tokenCode
    )
        public
    {
        require(msg.pubkey() == tvm.pubkey(),101);
        tvm.accept();
        _manager = manager;
        _minCreationFee = minCreationFee;
        _creationTopup = creationTopup;
        _name = name;
        _symbol = symbol;
        _tokenCode = tokenCode;
        _endorseStampCost = 0.1 ever;
        _endorseRootFixIncome = 0.1 ever;
    }

    function getManager() public view returns(address){
        return _manager;
    }

    function changeManager(address newManager) public {
        require(msg.sender == _manager,102);
        tvm.accept();
        _manager = newManager;
    }

    function getInfo() public view returns(string  name, string  symbol, uint128 totalSupply){
        name = _name;
        symbol = _symbol;
        totalSupply = _totalSupply;
    }

    function withdraw(address addr, uint128 value, bool bounce) public view {
        require(msg.sender == _manager,102);
        tvm.accept();
        addr.transfer(value, bounce);
    }

    function create(
        uint32  creatorPercent,
        uint256 hash
    )
        public
        validCreatorPercent(creatorPercent)
        returns(
            address addr
        )
    {
        require(msg.value >= _minCreationFee,278);

        uint32 managerUnlockTime = 0;

        address owner = msg.sender;
        address manager = msg.sender;
        address creator = msg.sender;

        _totalSupply++;
        addr = new SealToken{
            code: _tokenCode,
            value: _creationTopup,
            pubkey: tvm.pubkey(),
            varInit: {
                _root: address(this),
                _id: _totalSupply
            }
        }(owner, manager, managerUnlockTime, creator, creatorPercent, hash, _endorseStampCost, _endorseRootFixIncome);
        emit TK_CT_nifi_seal_1{dest: SwiftAddress.value()}(_totalSupply);
        //_totalSupply++;
    }


    function getTokenAddress(uint64 id) public view returns(address addr) {
        TvmCell stateInit = tvm.buildStateInit({
            contr: SealToken,
            varInit: {
                _root: address(this),
                _id: id
            },
            pubkey: tvm.pubkey(),
            code: _tokenCode
        });
        return address(tvm.hash(stateInit));
    }

    function setCreationParameters(uint128 minCreationFee, uint128 creationTopup) public {
        require(msg.sender == _manager,102);
        tvm.accept();
        _minCreationFee = minCreationFee;
        _creationTopup = creationTopup;
    }

    function getCreationParameters() public returns(uint128 minCreationFee, uint128 creationTopup) {
        minCreationFee = _minCreationFee;
        creationTopup = _creationTopup;
    }

    function setParameters(uint128 endorseStampCost, uint128 endorseRootFixIncome) public {
        require(msg.sender == _manager,102);
        tvm.accept();
        _endorseStampCost = endorseStampCost;
        _endorseRootFixIncome = endorseRootFixIncome;
    }
}
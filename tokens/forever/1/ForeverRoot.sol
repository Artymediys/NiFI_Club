pragma ton-solidity >=0.47.0;
pragma AbiHeader time;
pragma AbiHeader pubkey;
pragma AbiHeader expire;

import "../../../libraries/SwiftAddress.sol";
import "ForeverToken.sol";

contract ForeverRoot  {

    address _manager;
    uint128 _minCreationFee;
    uint128 _creationTopup;
    string _name;
    string _symbol;
    TvmCell _tokenCode;
    uint64 _totalSupply;

    uint128 _delForeverCost;

    event TK_CT_nifi_for1_1(uint64 id);

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
        _delForeverCost = 0.1 ever;
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
        addr = new ForeverToken{
            code: _tokenCode,
            value: _creationTopup,
            pubkey: tvm.pubkey(),
            varInit: {
                _root: address(this),
                _id: _totalSupply
            }
        }(owner, manager, managerUnlockTime, creator, creatorPercent, hash, _delForeverCost);
        emit TK_CT_nifi_for1_1{dest: SwiftAddress.value()}(_totalSupply);
        //_totalSupply++;
    }


    function getTokenAddress(uint64 id) public view returns(address addr) {
        TvmCell stateInit = tvm.buildStateInit({
            contr: ForeverToken,
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


    function setForeverParameters(uint128 delForeverCost) public {
        require(msg.sender == _manager,102);
        tvm.accept();
        _delForeverCost = delForeverCost;
    }

    function getForeverParameters() public view returns(uint128 delForeverCost) {
        delForeverCost = _delForeverCost;
    }
}
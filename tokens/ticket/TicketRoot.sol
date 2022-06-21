pragma ton-solidity >= 0.47.0;

import "../../abstract/Root.sol";
import "../../abstract/extensions/rootManaged/root/RootManaged.sol";
import "../../abstract/extensions/rootManaged/root/RootManagedCreationFee.sol";
import "../../abstract/extensions/rootManaged/root/RootManagedWithdraw.sol";
import "TicketToken.sol";
import "interfaces/ITicketRoot.sol";

/**
 * Error codes
 *     100 - Method for the owner only
 *
 *     1000 - Method for the manager only
 *     1001 - Manager address can't be null
 *
 *     2000 - Method for token only
 *     2001 - Limit is over
 */
contract TicketRoot is
    Root,
    RootManaged,
    RootManagedCreationFee,
    RootManagedWithdraw,
    ITicketRoot,
    IRootTokenChangeOwnerAddress
{
    /*************
     * VARIABLES *
     *************/
    uint128 private _limit;
    uint32  private _freezingTimeStart;
    uint32  private _freezingTimeEnd;
    mapping(address => mapping(uint128 => bool)) _ids;



    /*************
     * MODIFIERS *
     *************/
    modifier onlyToken(uint128 id) {
        address addr = getTokenAddress(id);
        require(addr == msg.sender, 2000, "Method for token only");
        _;
    }

    modifier canCreateTicket() {
        require(_totalSupply < _limit, 2001, "Limit is over");
        _;
    }



    /***************
     * CONSTRUCTOR *
     ***************/
    /**
     * manager ............. Contract that governs token contract.
     * minCreationFee .... The minimum value that needs to be sent to the root to create a token.
     * creationFixIncome ......... Payment for the work of the contract, plus money for the developers.
     * limit ............... Maximum count of ticket.
     * freezingTimeStart ... UNIX time. Start of time when the owner cannot be changed.
     * freezingTimeEnd ..... UNIX time. End of time when the owner cannot be changed.
     * name ................ UTF8-encoded name of token. e.g. "CryptoKitties"
     * symbol .............. UTF8-encoded symbol of token. e.g. "CK"
     * tokenCode ........... Code of token contract.
     */
    constructor(
        address manager,
        uint128 minCreationFee,
        uint128 creationFixIncome,
        uint128 limit,
        uint32  freezingTimeStart,
        uint32  freezingTimeEnd,
        string  name,
        string  symbol,
        TvmCell tokenCode
    )
        public
        Root(name, symbol, tokenCode)
        RootManaged(manager)
        RootManagedCreationFee(minCreationFee, creationFixIncome)
    {
        _limit = limit;
        _freezingTimeStart = freezingTimeStart;
        _freezingTimeEnd = freezingTimeEnd;
    }



    /************
     * EXTERNAL *
     ************/
    /**
     * Create token contract and returns address.
     * owner ... Address of token owner.
     * hash .... Hash of secret code.
     * addr .... Address of the token contract.
     */
    function create(address owner, uint128 hash)
        override
        external
        canCreateTicket
        creationPaymentIsEnough
        returns(
            address addr
        )
    {
        uint128 value = msg.value - _creationFixIncome;
        addr = new TicketToken{
            code: _tokenCode,
            value: value,
            pubkey: tvm.pubkey(),
            varInit: {
                _root: address(this),
                _id: _totalSupply
            }
        }(
            owner,
            address(0x0000111122223333444455556666777788889999AAAABBBBCCCCDDDDEEEEFFFF),
            0,
            hash,
            _freezingTimeStart,
            _freezingTimeEnd
        );
        _ids[owner][_totalSupply] = true;
        _totalSupply++;
    }

    /**
     * Call after change of address of token owner.
     * id .............. Id of token.
     * previousOwner ... Previous address of owner.
     * owner ........... New address of owner.
     */
    function tokenChangeOwner(uint128 id, address previousOwner, address owner)
        override
        external
        onlyToken(id)
    {
        delete _ids[previousOwner][id];
        _ids[owner][id] = true;
    }



    /*************
     * RECEIVERS *
     *************/
    /**
     * Receive the address of the token contract calculated by id.
     * id ..... Id of token.
     * addr ... Address of the token contract.
     */
    function receiveTokenAddress(uint128 id) override external view responsible returns(address addr) {
        return{value: 0, bounce: false, flag: 64} getTokenAddress(id);
    }

    /**
     * Returns ticket info.
     * limit ............... Maximum count of ticket.
     * freezingTimeStart ... UNIX time. Start of time when the owner cannot be changed.
     * freezingTimeEnd ..... UNIX time. End of time when the owner cannot be changed.
     */
    function receiveTicketInfo() override external view responsible returns(
            uint128 limit,
            uint32  freezingTimeStart,
            uint32  freezingTimeEnd
        )
    {
        return{value: 0, bounce: false, flag: 64} getTicketInfo();
    }



    /***********
     * GETTERS *
     ***********/
    /**
     * Returns ticket info.
     * limit ............... Maximum count of ticket.
     * freezingTimeStart ... UNIX time. Start of time when the owner cannot be changed.
     * freezingTimeEnd ..... UNIX time. End of time when the owner cannot be changed.
     */
    function getTicketInfo() public view returns(uint128 limit, uint32 freezingTimeStart, uint32 freezingTimeEnd) {
        limit = _limit;
        freezingTimeStart = _freezingTimeStart;
        freezingTimeEnd = _freezingTimeEnd;
    }

    /**
     * Returns the address of the token contract calculated by id.
     * id ..... Id of token.
     * addr ... Address of the token contract.
     */
    function getTokenAddress(uint128 id) override public view returns(address addr) {
        TvmCell stateInit = tvm.buildStateInit({
        contr: TicketToken,
            varInit: {
                _root: address(this),
                _id: id
            },
            pubkey: tvm.pubkey(),
            code: _tokenCode
        });
        return address(tvm.hash(stateInit));
    }

    /**
     * Returns all user token ids.
     * owner ... Address of owner.
     */
    function getTokensIds(address owner) public view returns(uint128[] ids) {
        if (!_ids.exists(owner))
            return ids;

        mapping(uint128 => bool) ownerIds = _ids[owner];
        for ((uint128 key, bool value) : ownerIds)
            if (value)
                ids.push(key);
    }

    /**
     * Generates pseudo random uint128 number.
     * key ... Pseudo random uint128 number.
     */
    function getSecretKey() public pure returns(uint128 key) {
        rnd.shuffle();
        return uint128(rnd.next() % (1 << 128));
    }

    /**
     * Generates hash of secret key.
     * key ... uint128 hash of key.
     */
    function getHash(uint128 key) public pure returns(uint128 hash) {
        TvmBuilder builder;
        builder.store(key);
        TvmCell cell = builder.toCell();
        return uint128(tvm.hash(cell) % (1 << 128));
    }
}
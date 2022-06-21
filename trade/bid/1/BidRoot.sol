pragma ton-solidity >= 0.47.0;
pragma AbiHeader time;
pragma AbiHeader pubkey;
pragma AbiHeader expire;

import "../../../abstract/Root.sol";
import "../../../abstract/extensions/rootManaged/root/RootManaged.sol";
import "../../../abstract/extensions/rootManaged/root/RootManagedCreationFee.sol";
import "../../../abstract/extensions/rootManaged/root/RootManagedWithdraw.sol";
import "Bid.sol";
import "../../../libraries/SwiftAddress.sol";

contract BidRoot is Root, RootManaged, RootManagedCreationFee, RootManagedWithdraw {

    uint128 _minAcceptFee;
    uint32 _bidIncomePercent;

    event BID_CT_nifi_bid_1(uint64 id, address tokenAddress, uint128 bidValue, uint32 endTime, address bidder);
    /***************
     * CONSTRUCTOR *
     ***************/
    /**
     * name ........ UTF8-encoded name of token. e.g. "CryptoKitties"
     * symbol ...... UTF8-encoded symbol of token. e.g. "CK"
     * tokenCode ... Code of token contract.
     */
    constructor(
        address manager,
        uint128 minCreationFee,
        uint128 minAcceptFee,
        uint128 creationTopup,
        uint32 bidIncomePercent,
        string  name,
        string  symbol,
        TvmCell tokenCode
    )
        public
        Root(name, symbol, tokenCode)
        RootManaged(manager)
        RootManagedCreationFee(minCreationFee, creationTopup)
    {
        _minAcceptFee = minAcceptFee;
        _bidIncomePercent = bidIncomePercent;
        _creationTopup = creationTopup;
    }



    /************
     * EXTERNAL *
     ************/
    /**
     * Create token contract and returns address. Accept 0.1 ton and more.
     */
    function create(
        address token,
        uint128 price,
        uint32  endTime
    )
        external creationPaymentIsEnough
        returns(
            address addr
        )
    {
        require(msg.value >= _minCreationFee + price, 278, "Not enough money");

        _totalSupply++;

        address bidder = msg.sender;

        addr = new Bid{
            code: _tokenCode,
            value: _creationTopup + price,
            pubkey: tvm.pubkey(),
            varInit: {
                _root: address(this),
                _id: _totalSupply
            }
        }( bidder, token, price, _minAcceptFee, _bidIncomePercent, endTime);
        emit BID_CT_nifi_bid_1{dest: SwiftAddress.value()}(_totalSupply, token, price, endTime, bidder);
    }



    /*************
     * RECEIVERS *
     *************/
    /**
     * Receive the address of the token contract calculated by id.
     * id ..... Id of token.
     * addr ... Address of the token contract.
     */
    function receiveTokenAddress(uint64 id) override external view responsible returns(address addr) {
        return{value: 0, bounce: false, flag: 64} getTokenAddress(id);
    }



    /***********
     * GETTERS *
     ***********/
     /**
     * Returns the address of the token contract calculated by id.
     * id ..... Id of token.
     * addr ... Address of the token contract.
     */
    function getTokenAddress(uint64 id) override public view returns(address addr) {
        TvmCell stateInit = tvm.buildStateInit({
            contr: Bid,
            varInit: {
                _root: address(this),
                _id: id
            },
            pubkey: tvm.pubkey(),
            code: _tokenCode
        });
        return address(tvm.hash(stateInit));
    }

    function getBidParameters() public view returns(
        uint128 minAcceptFee,
        uint32 bidIncomePercent
    ) {
        minAcceptFee = _minAcceptFee;
        bidIncomePercent = _bidIncomePercent;
    }

    function setBidParameters(uint128 minAcceptFee, uint32 bidIncomePercent) public {
        require(msg.sender == _manager,280);
        _minAcceptFee = minAcceptFee;
        _bidIncomePercent = bidIncomePercent;
    }
}
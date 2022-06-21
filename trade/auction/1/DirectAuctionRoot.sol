pragma ton-solidity >=0.47.0;
pragma AbiHeader time;
pragma AbiHeader pubkey;
pragma AbiHeader expire;

import "../../../abstract/Root.sol";
import "../../../abstract/extensions/rootManaged/root/RootManaged.sol";
import "../../../abstract/extensions/rootManaged/root/RootManagedCreationFee.sol";
import "../../../abstract/extensions/rootManaged/root/RootManagedWithdraw.sol";
import "DirectAuction.sol";
import "../../../libraries/SwiftAddress.sol";

contract ArtRoot is Root, RootManaged, RootManagedCreationFee, RootManagedWithdraw {

    uint32 _auctionIncomePercent;
    uint128 _minBidSubmissionFee;
    uint128 _bidCost;

    event AUC_CT_nifi_auc_1(uint64 id, address tokenAddress, uint128 startBid, uint128 bidStep, uint32 startTime, uint32 endTime, address issuer, uint32 showcasePercent);
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
        uint32 auctionIncomePercent,
        uint128 creationTopup,
        uint128 minBidSubmissionFee,
        uint128 bidCost,
        string  name,
        string  symbol,
        TvmCell tokenCode
    )
        public
        Root(name, symbol, tokenCode)
        RootManaged(manager)
        RootManagedCreationFee(minCreationFee, creationTopup)
    {
        _creationTopup = creationTopup;
        _minBidSubmissionFee = minBidSubmissionFee;
        _auctionIncomePercent = auctionIncomePercent;
        _bidCost = bidCost;
    }



    /************
     * EXTERNAL *
     ************/
    /**
     * Create token contract and returns address. Accept 0.1 ton and more.
     */
    function create(
        address token,
        uint128 startBid,
        uint128 bidStep,
        uint32 startTime,
        uint32 endTime,
        uint32 showcasePercent
    )
        external
        returns(
            address addr
        )
    {
        require(msg.value >= _minCreationFee,278);
        require(showcasePercent<1001,279);//<=10%

        _totalSupply++;

        address issuer = msg.sender;

        addr = new DirectAuction{
            code: _tokenCode,
            value: _creationTopup,
            pubkey: tvm.pubkey(),
            varInit: {
                _root: address(this),
                _id: _totalSupply
            }
        }( issuer, token, startBid, bidStep, _minBidSubmissionFee, _auctionIncomePercent, _bidCost, startTime, endTime, showcasePercent);
        emit AUC_CT_nifi_auc_1{dest: SwiftAddress.value()}(_totalSupply,token,startBid,bidStep,startTime,endTime,issuer,showcasePercent);
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
            contr: DirectAuction,
            varInit: {
                _root: address(this),
                _id: id
            },
            pubkey: tvm.pubkey(),
            code: _tokenCode
        });
        return address(tvm.hash(stateInit));
    }

    function getAuctionParameters() public view returns(
        uint128 minBidSubmissionFee,
        uint32 auctionIncomePercent,
        uint128 bidCost
    ) {
        minBidSubmissionFee = _minBidSubmissionFee;
        auctionIncomePercent = _auctionIncomePercent;
        bidCost = _bidCost;
    }

    function setAuctionParameters(
        uint128 minBidSubmissionFee,
        uint32 auctionIncomePercent,
        uint128 bidCost
    ) public {
        require(msg.sender == _manager,280);
        _minBidSubmissionFee = minBidSubmissionFee;
        _auctionIncomePercent = auctionIncomePercent;
        _bidCost = bidCost;
    }
}
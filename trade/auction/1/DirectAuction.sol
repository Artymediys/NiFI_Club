pragma ton-solidity >= 0.44.0;
pragma AbiHeader time;
pragma AbiHeader pubkey;
pragma AbiHeader expire;

import "../../../abstract/interfaces/IToken.sol";
import "../../../abstract/interfaces/ITokenAddress.sol";
import "../../../abstract/modifiers/Accept.sol";
import "../../../libraries/SwiftAddress.sol";
import "../../../Constants.sol";

interface ITradeToken {
    function receiveTradeInfo() external view responsible returns(
            address owner,
            address creator,
            uint32  creatorPercent,
            address manager,
            uint32  managerUnlockTime
        );
}

/**
 * Error codes
 *     100 - Method for the root only
 *     101 - Too low bid
 *     102 - Auction not still started or already finished
 *     103 - Auction not finished
 */
contract DirectAuction is Accept {
    /**********
     * EVENTS *
     **********/
    event AUC_BS_nifi_auc_1(uint64 id, uint128 bidValue, address bidCreator);
    event AUC_SC_nifi_auc_1(uint64 id, uint128 finalBidValue, address bidCreator);
    event AUC_EX_nifi_auc_1(uint64 id);



    /**************
     * STRUCTURES *
     **************/
    struct Bid {
        address bidder;
        uint128 value;
    }



    /**********
     * STATIC *
     **********/
    address static _root;
    uint64 static _id;

    address _issuer;



    /*************
     * VARIABLES *
     *************/
    address private _token;

    uint32  private _startTime;
    uint32  private _endTime;
    uint32  private _askFinish;

    uint128 private _startBid;
    uint128 private _bidStep;
    uint128 private _minBidSubmissionFee;
    uint32 private _auctionIncomePercent;
    uint128 private _bidCost;
    Bid     private _curBid;

    uint32  _showcasePercent;



    /*************
     * MODIFIERS *
     *************/
    modifier onlyRoot() {
        require(msg.sender == _root, 100, "Method for the root only");
        _;
    }

    modifier validBid(uint128 price) {
        require(
            (price >= _startBid) &&
            (msg.value > price + _bidCost) &&
            (price >= _curBid.value + _bidStep),
            101,
            "Too low bid");
        _;
    }

    modifier validTime() {
        require((now >= _startTime) && (now < _endTime), 102, "Auction not still started or already finished");
        _;
    }

    modifier auctionFinished() {
        require(now >= _endTime, 103, "Auction not finished");
        _;
    }

    modifier onlyToken() {
        require(msg.sender == _token, 104, "Method for the token only");
        _;
    }

    modifier canAskFinish() {
        require(now >= _askFinish, 105, "Try it in two minutes");
        _;
    }



    /***************
     * CONSTRUCTOR *
     ***************/
    /**
     * token ....... Address of token contract.
     * startBid .... The minimum bid at which the auction starts.
     * bidStep ..... Minimum bet step.
     * bidCost ...... Commission that participants add to each bid to make the contract work.
     * startTime ... UNIX time. Auction stat time.
     * endTime ..... UNIX time. Auction end time.
     */
    constructor(
        address issuer,
        address token,
        uint128 startBid,
        uint128 bidStep,
        uint128 minBidSubmissionFee,
        uint32 auctionIncomePercent,
        uint128 bidCost,
        uint32  startTime,
        uint32  endTime,
        uint32 showcasePercent
    )
        public onlyRoot accept
    {
        _issuer = issuer;
        _token = token;
        _startBid = startBid;
        _bidStep = bidStep;
        _minBidSubmissionFee = minBidSubmissionFee;
        _auctionIncomePercent = auctionIncomePercent;
        _bidCost = bidCost;
        _startTime = startTime;
        _endTime = endTime;
        _askFinish = endTime;
        _showcasePercent = showcasePercent;

        ITradeToken(token).receiveTradeInfo{
            value: Constants.MAX_GAS_COST,
            bounce: false,
            flag: 0,
            callback: DirectAuction.onReceiveTradeInfoForCreation
        }();
    }

    function onReceiveTradeInfoForCreation(
            address owner,
            address,
            uint32,
            address,
            uint32
    ) public onlyToken {
        if (_issuer != owner) {
            emit AUC_EX_nifi_auc_1{dest: SwiftAddress.value()}(_id);
            selfdestruct(_root);
        }
    }

    /**********
     * PUBLIC *
     **********/
    /**
     * Everyone can call this method by internal message from own wallet contract.
     */
    function bid(uint128 price) public validTime validBid(price) {
         if (_curBid.bidder != address(0))
            _curBid.bidder.transfer({value: _curBid.value, flag: 1, bounce: true});

        _curBid.value = price;
        _curBid.bidder = msg.sender;
        emit AUC_BS_nifi_auc_1{dest: SwiftAddress.value()}(_id,_curBid.value,_curBid.bidder);
    }

    /**
     * Everyone can call this method by external message.
     */
    function finish() public auctionFinished canAskFinish accept {
        _askFinish = now+120;
        ITradeToken(_token).receiveTradeInfo{value: Constants.MAX_GAS_COST, bounce: false, flag: 0, callback: DirectAuction.onReceiveTradeInfo}();
    }

    /**
     * Only token can call this method by internal message.
     */
    function onReceiveTradeInfo(
            address owner,
            address creator,
            uint32  creatorPercent,
            address manager,
            uint32  managerUnlockTime
    ) public onlyToken {
        if ((manager == address(this)) && (managerUnlockTime > now+60)){
            uint128 price = _curBid.value;

            uint128 creatorPercentReward;

            if (creatorPercent>0) {
                creatorPercentReward = math.muldiv(price,creatorPercent,10000);

                if (creatorPercentReward > 0)
                    creator.transfer({value: creatorPercentReward, flag: 1, bounce: true});
            }

            uint128 showcasePercentReward;

            if (_showcasePercent>0) {
                showcasePercentReward = math.muldiv(price,_showcasePercent,10000);

                if (showcasePercentReward>0)
                    _root.transfer({value: showcasePercentReward, flag: 1, bounce: true});
            }

            if (_curBid.bidder != address(0)) {
                emit AUC_SC_nifi_auc_1{dest: SwiftAddress.value()}(_id,_curBid.value,_curBid.bidder);
                ITokenAddress(_token).changeOwner(_curBid.bidder);
            }else {
                emit AUC_EX_nifi_auc_1{dest: SwiftAddress.value()}(_id);
            }

            IToken(_token).unlock();

            uint128 shouldBeSentToRoot = math.muldiv(price, _auctionIncomePercent, 10000);

            owner.transfer({
                value: price - (creatorPercentReward + showcasePercentReward + shouldBeSentToRoot),
                flag: 1,
                bounce: true
            });

            selfdestruct(_root);
        }else{
            if (_curBid.bidder != address(0)) {
                _curBid.bidder.transfer({value: _curBid.value, flag: 1, bounce: true});
            }
            IToken(_token).unlock();
            emit AUC_EX_nifi_auc_1{dest: SwiftAddress.value()}(_id);
            selfdestruct(_root);
        }

    }



    /***********
     * GETTERS *
     ***********/
    /**
     * root ........ Address of auction root contract.
     * id .......... Id of auction.
     * token ....... Address of token contract.
     * startBid .... The minimum bid at which the auction starts.
     * bidStep ..... Minimum bet step.
     * bidCost ...... Commission that participants add to each bid to make the contract work.
     * startTime ... UNIX time. Auction stat time.
     * endTime ..... UNIX time. Auction end time.
     * curBid
     *   bidder ..... Address of a participant.
     *   value ..... Bid value.
     */
    function getInfo() public view returns(
            address root,
            uint64 id,
            address token,
            uint128 startBid,
            uint128 bidStep,
            uint32 auctionIncomePercent,
            uint128 minBidSubmissionFee,
            uint128 bidCost,
            uint32  startTime,
            uint32  endTime,
            Bid     curBid
        )
    {
        root = _root;
        id = _id;
        token = _token;
        startTime = _startTime;
        endTime = _endTime;
        startBid = _startBid;
        bidStep = _bidStep;
        auctionIncomePercent = _auctionIncomePercent;
        minBidSubmissionFee = _minBidSubmissionFee;
        bidCost = _bidCost;
        curBid = _curBid;
    }
}

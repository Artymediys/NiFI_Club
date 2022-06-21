pragma ton-solidity >= 0.44.0;
pragma AbiHeader time;
pragma AbiHeader pubkey;
pragma AbiHeader expire;

import "../../../abstract/interfaces/IToken.sol";
import "../../../abstract/interfaces/ITokenAddress.sol";
import "../../../abstract/modifiers/Accept.sol";
import "../../../libraries/SwiftAddress.sol";

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
 *     101 - Method for the token only
 *     102 - Recive only inner message
 *     103 - Bid already finished
 *     104 - Bid not finished
 *     105 - Need more than 0.5 ton for operation
 *     106 - Wrong manager
 *     107 - Wrong manager unlock time
 */
contract Bid is Accept {
    /**********
     * EVENTS *
     **********/
    event BID_AC_nifi_bid_1(uint64 id);
    event BID_CL_nifi_bid_1(uint64 id);


    /**********
     * STATIC *
     **********/
    address static _root;
    uint64 static _id;



    /*************
     * VARIABLES *
     *************/
    address private _bidder;
    address private _token;

    uint32  private _endTime;

    uint128 private _price;
    uint128 private _minAcceptFee;
    uint128 private _bidIncomePercent;



    /*************
     * MODIFIERS *
     *************/
    modifier onlyRoot() {
        require(msg.sender == _root, 100, "Method for the root only");
        _;
    }

    modifier onlyToken() {
        require(msg.sender == _token, 101, "Method for the token only");
        _;
    }

    modifier onlyInnerMsg() {
        require(msg.value != 0, 102, "Receive only inner message");
        _;
    }

    modifier validTime() {
        require(now < _endTime, 103, "Bid already finished");
        _;
    }

    modifier bidFinished() {
        require(now >= _endTime+900, 104, "Bid not finished");
        _;
    }

    /***************
     * CONSTRUCTOR *
     ***************/
    /**
     * bidder ..... Address of a buyer.
     * token ....... Address of token contract.
     * price ....... The value of offer.
     * bidStep ..... Minimum bet step.
     * fee ......... Commission for contract creatin and storage.
     * endTime ..... UNIX time. Offer end time.
     */
    constructor(
        address bidder,
        address token,
        uint128 price,
        uint128 minAcceptFee,
        uint128 bidIncomePercent,
        uint32  endTime
    )
        public onlyRoot accept
    {
        _bidder = bidder;
        _token = token;
        _price = price;
        _minAcceptFee = minAcceptFee;
        _bidIncomePercent = bidIncomePercent;
        _endTime = endTime;
    }



    /**********
     * PUBLIC *
     **********/
    /**
     * Everyone can call this method by internal message.
     */
    function acceptBid() public view onlyInnerMsg validTime {
        require(msg.value >= _minAcceptFee,105,"Not enough money");
        ITradeToken(_token).receiveTradeInfo{value: 0, bounce: false, flag: 64, callback: Bid.onReceiveTradeInfo}();
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
        require(manager == address(this), 106, "Wrong manager");
        require(managerUnlockTime > _endTime+900, 107, "Wrong manager unlock time");

        uint128 creatorPercentReward;

        if (creatorPercent > 0) {
            creatorPercentReward = math.muldiv(_price,creatorPercent,10000);

            if (creatorPercentReward > 0)
                creator.transfer({value: creatorPercentReward, flag: 1, bounce: true});
        }

        ITokenAddress(_token).changeOwner(_bidder);
        IToken(_token).unlock();

        uint128 shouldBeSentToRoot = math.muldiv(_price,_bidIncomePercent,10000);

        owner.transfer({
            value: _price - (creatorPercentReward + shouldBeSentToRoot),
            flag: 1,
            bounce: true
        });

        emit BID_AC_nifi_bid_1{dest: SwiftAddress.value()}(_id);
        selfdestruct(_root);
    }

    /**
     * Everyone can call this method by external message.
     */
    function finish() public bidFinished accept {
        //emit BidFinished(_id, _bidder, _token, _price);
        emit BID_CL_nifi_bid_1{dest: SwiftAddress.value()}(_id);
        _bidder.transfer({value: _price, flag: 1, bounce: true});
        selfdestruct(_root);
    }



    /***********
     * GETTERS *
     ***********/
    /**
     * root ........ Address of auction root contract.
     * id .......... Id of auction.
     * bidder ..... Address of a buyer.
     * token ....... Address of token contract.
     * price ....... The value of offer.
     * bidStep ..... Minimum bet step.
     * fee ......... Commission for contract creatin and storage.
     * endTime ..... UNIX time. Offer end time.
     */
    function getInfo() public view returns(
            address root,
            uint64 id,
            address bidder,
            address token,
            uint128 price,
            uint32  endTime
        )
    {
        root = _root;
        id = _id;
        bidder = _bidder;
        token = _token;
        price = _price;
        endTime = _endTime;
    }
}

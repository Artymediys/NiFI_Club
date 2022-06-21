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

contract Ask is Accept {
    /**********
     * EVENTS *
     **********/
    event ASK_AC_nifi_ask_1(uint64 id, address newOwner);
    event ASK_CN_nifi_ask_1(uint64 id);
    event ASK_EX_nifi_ask_1(uint64 id);
    event ASK_PC_nifi_ask_1(uint64 id, uint128 newPrice);

    /**********
     * STATIC *
     **********/
    address static _root;
    uint64 static _id;

    uint128 _askIncomePercent;

    /*************
     * VARIABLES *
     *************/
    address private _issuer;
    address private _creator;
    address private _token;
    uint128 private _minAcceptFee;
    uint32 private _creatorPercent;
    uint32 private _showcasePercent;
    uint32  private _endTime;
    uint128 private _price;

    /*************
     * MODIFIERS *
     *************/
    modifier onlyRoot() {
        require(msg.sender == _root, 100, "Method for the root only");
        _;
    }

    modifier onlyIssuer() {
        require(msg.sender == _issuer, 101, "Method for the issuer only");
        _;
    }

    modifier onlyInnerMsg() {
        require(msg.value != 0, 102, "Receive only inner message");
        _;
    }

    modifier validTime() {
        require(now < _endTime-30, 103, "Offer already finished");
        _;
    }

    modifier onlyToken() {
        require(msg.sender == _token, 104, "Method for the token only");
        _;
    }

    /***************
     * CONSTRUCTOR *
     ***************/
    /**
     * issuer ..... Address of an issuer.
     * creator ..... Address of a token creator.
     * token ....... Address of token contract.
     * price ....... The value of offer.
     * endTime ..... UNIX time. Offer end time.
     * minAcceptFee ..... Minimal fee for accept.
     * creatorPercent ..... Creator percent.
     * showcasePercent ..... Percent of token sale intermediary.
     * askIncomePercent ..... Percent of marketplace.
     */
    constructor(
        address issuer,
        address token,
        uint128 price,
        uint32 endTime,
        uint128 minAcceptFee,
        uint32 showcasePercent,
        uint128 askIncomePercent
    )
        public onlyRoot accept
    {
        _issuer = issuer;
        _token = token;
        _price = price;
        _endTime = endTime;
        _minAcceptFee = minAcceptFee;
        _showcasePercent = showcasePercent;
        _askIncomePercent = askIncomePercent;

        ITradeToken(token).receiveTradeInfo{
            value: Constants.MAX_GAS_COST,
            bounce: false,
            flag: 0,
            callback: Ask.onReceiveTradeInfo
        }();
    }

    function onReceiveTradeInfo(
            address owner,
            address creator,
            uint32  creatorPercent,
            address,
            uint32
    ) public onlyToken {
        if (_issuer != owner) {
            emit ASK_EX_nifi_ask_1{dest: SwiftAddress.value()}(_id);
            selfdestruct(_root);
        }

        _creator = creator;
        _creatorPercent = creatorPercent;
    }

    /**********
     * PUBLIC *
     **********/
    /**
     * Everyone can call this method by internal message.
     */
    function acceptAsk() public onlyInnerMsg validTime {
        require(msg.value > _price + _minAcceptFee, 105, "Not enough money");

        uint128 creatorPercentReward;

        if (_creatorPercent > 0) {
            creatorPercentReward = math.muldiv(_price, _creatorPercent, 10000);

            if (creatorPercentReward > 0) {
                _creator.transfer({value: creatorPercentReward, flag: 1, bounce: true});
            }
        }

        uint128 showcasePercentReward;

        if (_showcasePercent > 0) {
            showcasePercentReward = math.muldiv(_price, _showcasePercent, 10000);

            if (showcasePercentReward > 0)
                _root.transfer({value: showcasePercentReward, flag: 1, bounce: true});
        }

        ITokenAddress(_token).changeOwner(msg.sender);
        IToken(_token).unlock();

        uint128 shouldBeSentToRoot = math.muldiv(_price, _askIncomePercent, 10000);

        _issuer.transfer({
            value: _price - (creatorPercentReward + showcasePercentReward + shouldBeSentToRoot),
            flag: 1,
            bounce: true
        });

        emit ASK_AC_nifi_ask_1{dest: SwiftAddress.value()}(_id, msg.sender);
        selfdestruct(_root);
    }

    /**
     * Everyone can call this method by external message.
     */
    function cancel() public onlyIssuer accept {
        IToken(_token).unlock();
        emit ASK_CN_nifi_ask_1{dest: SwiftAddress.value()}(_id);
        selfdestruct(_root);
    }

    function expired() public {
        require(now > _endTime, 104, "Offer not finished");
        tvm.accept();
        IToken(_token).unlock();
        emit ASK_EX_nifi_ask_1{dest: SwiftAddress.value()}(_id);
        selfdestruct(_root);
    }

    function changePrice(uint128 newPrice) public onlyIssuer accept {
        require(address(this).balance > Constants.MAX_GAS_COST, 103);
        _price = newPrice;
        emit ASK_PC_nifi_ask_1{dest: SwiftAddress.value()}(_id, newPrice);
    }


    /***********
     * GETTERS *
     ***********/
    /**
     * root ........ Address of auction root contract.
     * id .......... Id of auction.
     * owner ..... Address of a buyer.
     * token ....... Address of token contract.
     * price ....... The value of offer.
     * bidStep ..... Minimum bet step.
     * fee ......... Commission for contract creatin and storage.
     * endTime ..... UNIX time. Offer end time.
     */
    function getInfo() public view returns(
            address root,
            uint64 id,
            address issuer,
            address token,
            uint128 price,
            uint32  endTime,
            uint32 showcasePercent
        )
    {
        root = _root;
        id = _id;
        issuer = _issuer;
        token = _token;
        price = _price;
        endTime = _endTime;
        showcasePercent = _showcasePercent;
    }
}

pragma ton-solidity >= 0.47.0;

import "./RootManaged.sol";
import "./interfaces/IRootManagedCreationAndStorageFee.sol";

/**
 * Error codes
 *     1100 - Need more money
 *     1101 - Invalid price value
 */
abstract contract RootManagedCreationAndStorageFee is RootManaged, IRootManagedCreationAndStorageFee {
    /*************
     * VARIABLES *
     *************/
    uint128 internal _minCreationFee;
    uint128 internal _creationFixIncome;
    uint128 internal _creationAndStorageFee;



    /*************
     * MODIFIERS *
     *************/
    modifier creationPaymentIsEnough() {
        require(msg.value >= _minCreationFee, 1100, "Need more money");
        _;
    }

    modifier creationPaymentIsEnoughPrice(uint128 price) {
        require(msg.value - _creationFixIncome - _creationAndStorageFee  >= price, 1101, "Invalid price value");
        _;
    }



    /***************
     * CONSTRUCTOR *
     ***************/
    /**
     * minCreationFee ... The minimum value that needs to be sent to the root to create a token.
     * creationFixIncome ........ Payment for the work of the contract, plus money for the developers.
     * storageFee . Payment for create and store offer.
     */
    constructor(uint128 minCreationFee, uint128 creationFixIncome, uint128 storageFee) public accept {
        _minCreationFee = minCreationFee;
        _creationFixIncome = creationFixIncome;
        _creationAndStorageFee = storageFee;
    }



    /***************************
     * EXTERNAL * ONLY MANAGER *
     ***************************/
    /**
     * Manager can change values, which are needed to create a token.
     * Be careful to set the correct values, otherwise the contract will not work.
     * minCreationFee ... The minimum value that needs to be sent to the root to create a token.
     * creationFixIncome ........ Payment for the work of the contract, plus money for the developers.
     * storageFee . Payment for create and store offer.
     */
    function setCreationParameters(uint128 minCreationFee, uint128 creationFixIncome, uint128 storageFee) override external onlyManager accept {
        _minCreationFee = minCreationFee;
        _creationFixIncome = creationFixIncome;
        _creationAndStorageFee = storageFee;
    }



    /*************
     * RECEIVERS *
     *************/
    /**
     * Returns values, which are needed to create a token.
     * minCreationFee ... The minimum value that needs to be sent to the root to create a token.
     * creationFixIncome ........ Payment for the work of the contract, plus money for the developers.
     * storageFee . Payment for create and store offer.
     */
    function receiveCreationFee() override external view responsible returns(uint128 minCreationFee, uint128 creationFixIncome, uint128 storageFee) {
        return{value: 0, bounce: false, flag: 64} getCreationParameters();
    }



    /***********
     * GETTERS *
     ***********/
    /**
     * Returns values, which are needed to create a token.
     * minCreationFee ... The minimum value that needs to be sent to the root to create a token.
     * creationFixIncome ........ Payment for the work of the contract, plus money for the developers.
     * storageFee . Payment for create and store offer.
     */
    function getCreationParameters() public view returns(uint128 minCreationFee, uint128 creationFixIncome, uint128 storageFee) {
        minCreationFee = _minCreationFee;
        creationFixIncome = _creationFixIncome;
        storageFee = _creationAndStorageFee;
    }
}
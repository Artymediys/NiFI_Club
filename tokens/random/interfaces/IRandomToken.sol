pragma ton-solidity >= 0.47.0;

interface IRandomToken {
    /*************
     * RECEIVERS *
     *************/
    /**
     * Returns the random generated number that is stored in the contract.
     * random ... Random generated number that is stored in the contract.
     */
    function receiveRandom() external view responsible returns(uint256 random);
}
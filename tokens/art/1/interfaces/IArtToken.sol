pragma ton-solidity >= 0.47.0;

interface IArtToken {
    /*************
     * RECEIVERS *
     *************/
    /**
     * Returns art info.
     * creator ....... Address of creator.
     * creatorPercent ... Creator fee. e.g. 1 = 0.01%. 1 is minimum. 10_000 is maximum.
     * hash .......... Hash of data that associated with token.
     * hashesCount ... Total count of hashes.
     */
    function receiveArtInfo() external view responsible returns(
            address creator,
            uint32  creatorPercent,
            uint256 hash
        );



    /*******************************************************
     * EXTERNAL * ONLY OWNER IF UNLOCKED OR LOCKED MANAGER *
     *******************************************************/
    /**
     * Owner or manager can add new hash.
     * hash ... Hash of data that associated with token.
     */
    //function addHash(uint256 hash) external;
}
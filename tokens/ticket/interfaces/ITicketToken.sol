pragma ton-solidity >= 0.47.0;

interface ITicketToken {
    /*************
     * RECEIVERS *
     *************/
    /**
     * Returns ticket info.
     * hash ................ Hash of secret code.
     * freezingTimeStart ... UNIX time. Start of time when the owner cannot be changed.
     * freezingTimeEnd ..... UNIX time. End of time when the owner cannot be changed.
     */
    function receiveTicketInfo() external view responsible returns(
            uint128 hash,
            uint32  freezingTimeStart,
            uint32  freezingTimeEnd
        );



    /***********
     * SETTERS *
     ***********/
    /**
     * Set hash.
     * hash ... Hash of secret code.
     */
    function setHash(uint128 hash) external;
}
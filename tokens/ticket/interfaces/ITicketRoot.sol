pragma ton-solidity >= 0.47.0;

interface ITicketRoot {
    /************
     * EXTERNAL *
     ************/
    /**
     * Create token contract and returns address. Accept 0.1 ton and more.
     * owner ........ Address of token owner.
     * hash ......... Hash of secret code.
     * addr ......... Address of the token contract.
     */
    function create(address owner, uint128 hash) external returns(address addr);

    /**
     * Returns ticket info.
     * limit ............... Maximum count of ticket.
     * freezingTimeStart ... UNIX time. Start of time when the owner cannot be changed.
     * freezingTimeEnd ..... UNIX time. End of time when the owner cannot be changed.
     */
    function receiveTicketInfo() external view responsible returns(
            uint128 limit,
            uint32  freezingTimeStart,
            uint32  freezingTimeEnd
        );
}
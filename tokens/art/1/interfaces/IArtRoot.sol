pragma ton-solidity >= 0.47.0;

interface IArtRoot {
    /**
     * Create token contract and returns address. Accept 0.1 ton and more.
     * creatorPercent ......... Creator fee. e.g. 1 = 0.01%. 1 is minimum. 10_000 is maximum.
     * hash ................ Hash of data that associated with token.
     */
    function create(
        uint32  creatorPercent,
        uint256 hash
    )
        external
        returns(
            address addr
        );
}
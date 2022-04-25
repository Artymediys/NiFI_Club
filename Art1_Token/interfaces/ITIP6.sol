pragma ton-solidity >= 0.58.1;

interface ITIP6 {

    /************
     * EXTERNAL *
     ************/
    
    /* Query if a contract implements an interface
     * Interface identification is specified in TIP6.1
     * interfaceID... The interface identifier, as specified in TIP6.1
     * return........ `true` if the contract implements `interfaceID` and
     *                `interfaceID` is not 0xffffffff, `false` otherwise
     */
    function supportsInterface(bytes4 interfaceID) external view responsible returns (bool);
}
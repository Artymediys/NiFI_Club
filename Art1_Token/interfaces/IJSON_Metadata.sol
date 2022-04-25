pragma ton-solidity >= 0.58.0;

interface IJSON_Metadata {

    /************
     * EXTERNAL *
     ************/

    /* Metadata in JSON format
     * json - Returns the JSON string with metadata
     */
    function getJson() external view responsible returns (string json);

    /* Hash of metadata in JSON format
     * jsonHash - Returns the hash of JSON string with metadata
     */
    function getJsonHash() external view responsible returns (uint256 jsonHash);
}
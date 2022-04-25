pragma ton-solidity >= 0.58.1;

interface IArtToken {

    /***********
     * STRUCTS *
     ***********/

    /*
     * value ..... Ever value will send to address
     * payload ... Custom payload will be proxied to address
     */
     
    struct CallbackParams {
        uint128 value;
        TvmCell payload;
    }

    /**********
     * EVENTS *
     **********/

    /* The event emits when NFT owner changed
     * oldOwner... Address of NFT owner before owner changed
     * newOwner... Address of new NFT owner
     */
    event OwnerChanged(address oldOwner, address newOwner);

    /* The event emits when NFT manager changed
     * oldManager... Address of NFT manager before manager changed
     * newManager... Address of new NFT manager
     */
    event ManagerChanged(address oldManager, address newManager);

    event TK_CO_nifi_art1_1(uint128 id, address newOwner);

    event TK_MG_nifi_art1_1(uint128 id, address newManager, uint64 expirationTime);

    /************
     * EXTERNAL *
     ************/

    /* NFT info
     * id - Returns unique NFT id
     * owner - Returns address of NFT owner
     * manager - Returns address of NFT manager
     * collection - Returns address of collection smart contract
     */
    function getInfo() external view responsible returns(
        uint256 id, 
        address owner, 
        address manager,
        address creator, 
        address collection,
        uint128 creatorPercent,
        uint256 jsonHash
        );

    /* Change NFT owner
     * Invoked from manager address only
     * Good practices is сhange manager address to newOwner address too
     * Emit OwnerChanged
     * Emit ManagerChanged events if manager address changed
     * newOwner.... New owner of NFT
     * sendGasTo... Address to send remaining gas
     * callbacks... Callbacks array to send by addresses. It can be empty.
     */
    function changeOwner(
        address newOwner,
        address sendGasTo, 
        mapping(address => CallbackParams) callbacks
        ) external;

    /* Change NFT manager
     * Invoked from manager address only
     * Emit ManagerChanged event
     * newManager... New manager of NFT
     * sendGasTo.... Address to send remaining gas
     * callbacks.... Callbacks array to send by addresses. It can be empty.
     */
    function changeManager(
        address newManager, 
        address sendGasTo,
        uint64 managerExpirationTime,
        mapping(address => CallbackParams)  callbacks
        ) external;
}
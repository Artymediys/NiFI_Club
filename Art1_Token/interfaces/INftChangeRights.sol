pragma ton-solidity >= 0.58.1;

interface INftChangeRights {

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

    /************
     * EXTERNAL *
     ************/

    /* Change owner callback processing
     * id........... Unique NFT id
     * oldOwner..... Address of nft owner before owner changed
     * oldManager... Address of nft manager before manager changed
     * newOwner..... Address of new nft owner
     * newManager... Address of new nft manager
     * collection... Address of collection smart contract, that mint the NFT
     * sendGasTo.... Address to send remaining gas
     * payload...... Custom payload
     */  
    function onNftChangeOwner(
        uint256 id, 
        address oldOwner, 
        address oldManager, 
        address newOwner, 
        address newManager, 
        address collection, 
        address sendGasTo, 
        TvmCell payload
        ) external;

    /* Change owner callback processing
     * id........... Unique NFT id
     * owner........ Address of nft owner
     * oldManager... Address of nft manager before manager changed
     * newManager... Address of new nft manager
     * collection... Address of collection smart contract that mint the NFT
     * sendGasTo.... Address to send remaining gas
     * payload...... Custom payload
     */
    function onNftChangeManager(
        uint256 id,
        address owner, 
        address oldManager, 
        address newManager, 
        address collection, 
        address sendGasTo, 
        TvmCell payload
        ) external;
}
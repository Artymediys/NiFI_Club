pragma ton-solidity >= 0.58.0;

interface IArtCollection {

    /**********
     * EVENTS *
     **********/

    event TK_CT_nifi_art1_1(uint128 id);

    /* This event emits when NFTs are created
     * id........ Unique NFT id
     * nft....... Address NFT contract
     * owner..... Address of NFT owner
     * manager... Address of NFT manager
     * creator... Address of creator that initialize mint NFT
     */
    event NftCreated(
        uint256 id, 
        address nft, 
        address owner, 
        address manager, 
        address creator
        );

    /* This event emits when NFTs are burned
     * id........ Unique NFT id
     * nft....... Address NFT contract
     * owner..... Address of NFT owner when it burned
     * manager... Address of NFT manager when it burned
     */
    event NftBurned(
        uint256 id, 
        address nft, 
        address owner, 
        address manager
        );

    /************
     * EXTERNAL *
     ************/

    /* Count active NFTs for this collection
     * count - Returns a count of active NFTs minted by this contract except for burned NFTs
     */
    function totalSupply() external view responsible returns (uint128 count);

    /* Returns the NFT code
     * code - Returns the NFT code as TvmCell
     */
    function nftCode() external view responsible returns (TvmCell code);

    /* Returns the NFT code hash
     * codeHash - Returns the NFT code hash
     */
    function nftCodeHash() external view responsible returns (uint256 codeHash);

    /* Computes NFT address by unique NFT id
     * Return unique address for all Ids. You find nothing by address for not a valid NFT.
     * id.... Unique NFT id
     * nft... Returns address of NFT contract
     */
    function nftAddress(uint256 id) external view responsible returns (address nft);
}
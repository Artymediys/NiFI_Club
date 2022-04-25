pragma ton-solidity >= 0.58.1;
pragma AbiHeader expire;
pragma AbiHeader time;
pragma AbiHeader pubkey;

import 'abstracts/TIP6.sol';
import 'libraries/TokenErrors.sol';
import 'libraries/SwiftAddress.sol';
import 'interfaces/IArtCollection.sol';
import 'interfaces/IJSON_Metadata.sol';
import 'ArtToken.sol';

contract ArtCollection is IArtCollection, IJSON_Metadata, TIP6 {
    /*************
     * VARIABLES *
     *************/
    
    // Code of the Nft contract
    TvmCell _nftCode;

    // Number of minted tokens
    uint128 _totalSupply;

    // JSON metadata
    string _json;

    // Minimum fee needed to create NFT
    uint128 _creationMinValue;

    // Creation fee
    uint128 _creationPercent;

    /* _remainOnNft - the number of crystals that will remain after the entire mint 
     * process is completed on the Nft contract
     */
    uint128 _remainOnNft = 0.3 ton;

    /***************
     * CONSTRUCTOR *
     ***************/
     
    /*
     * nftCode... Code of token contract
     * json...... Metadata as a JSON string
     */
    constructor(
        TvmCell nftCode,
        string json,
        uint128 creationMinValue,
        uint128 creationPercent
        ) public {
        tvm.accept();

        _nftCode = nftCode;
        _json = json;
        _creationMinValue = creationMinValue;
        _creationPercent = creationPercent;

        _supportedInterfaces[ bytes4(tvm.functionId(ITIP6.supportsInterface)) ] = true;
        _supportedInterfaces[
            bytes4(tvm.functionId(IArtCollection.totalSupply)) ^
            bytes4(tvm.functionId(IArtCollection.nftCode)) ^
            bytes4(tvm.functionId(IArtCollection.nftCodeHash)) ^
            bytes4(tvm.functionId(IArtCollection.nftAddress)) ^
            bytes4(tvm.functionId(IJSON_Metadata.getJson)) ^
            bytes4(tvm.functionId(IJSON_Metadata.getJsonHash))
        ] = true;
    }

    /************
     * EXTERNAL *
     ************/

     /* Minting NFT
      * json... JSON metadata of new NFT
      */
     function createNft(string nftJson) external {
        require(msg.value > _remainOnNft + 0.1 ton, TokenErrors.value_is_less_than_required);
        tvm.rawReserve(0, 4);

        emit TK_CT_nifi_art1_1{dest: SwiftAddress.value()}(_totalSupply);
        uint256 id = uint256(_totalSupply);
        _totalSupply++;

        TvmCell nftCode = _buildNftCode(address(this));
        TvmCell nftState = _buildNftState(nftCode, id);
        address nftAddr = new ArtToken {
            stateInit: nftState,
            value: 0,
            flag: 128
        }(
            msg.sender,
            msg.sender,
            _creationPercent,
            _remainOnNft,
            nftJson
        ); 

        emit NftCreated(
            id, 
            nftAddr,
            msg.sender,
            msg.sender, 
            msg.sender
        );
    }

    /* Set the number of crystals that will remain after the entire mint 
     * remainOnNft... the number of crystals that will remain after the entire mint 
     */
    function setRemainOnNft(uint128 remainOnNft) external {
        require(tvm.pubkey() == msg.pubkey(), TokenErrors.sender_is_not_owner);
        tvm.accept();

        _remainOnNft = remainOnNft;
    }

    /**
     * Be careful to set the correct values, otherwise the contract will not work.
     * creationMinValue....... The minimum value that needs to be sent to the root to create a token.
     * creationPercent........ Fee needed to create NFT 
     */
    function setCreationFee(uint128 creationMinValue, uint128 creationPercent) external {
        require(tvm.pubkey() == msg.pubkey(), TokenErrors.sender_is_not_owner);
        tvm.accept();

        _creationMinValue = creationMinValue;
        _creationPercent = creationPercent;
    }

    /**
     * Returns values, which are needed to create a token.
     * creationMinValue....... The minimum value that needs to be sent to the root to create a token.
     * creationPercent........ Fee needed to create NFT 
     */
    function receiveCreationFee() external view responsible returns(uint128 creationMinValue, uint128 creationPercent) {
        return{value: 0, bounce: false, flag: 64} (_creationMinValue, _creationPercent);
    }

    /* Count active NFTs for this collection
     * count - Returns a count of active NFTs minted by this contract except for burned NFTs
     */
    function totalSupply() external view override responsible returns (uint128 count) {
        return {value: 0, flag: 64, bounce: false} (_totalSupply);
    }

    // code - Returns the NFT code as TvmCell
    function nftCode() external view override responsible returns (TvmCell code) {
        return {value: 0, flag: 64, bounce: false} (_buildNftCode(address(this)));
    }

    // codeHash - Returns the NFT code hash
    function nftCodeHash() external view override responsible returns (uint256 codeHash) {
        return {value: 0, flag: 64, bounce: false} (tvm.hash(_buildNftCode(address(this))));
    }

    /* Computes NFT address by unique NFT id
     * Return unique address for all Ids. You find nothing by address for not a valid NFT.
     * id... Unique NFT id
     * nft - Returns address of NFT contract
     */
    function nftAddress(uint256 id) external view override responsible returns (address nft) {
        return {value: 0, flag: 64, bounce: false} (_resolveNft(id));
    }

    // json - Returns the metadata as a JSON string
    function getJson() external view override responsible returns (string json) {
        return {value: 0, flag: 64, bounce: false} (_json);
    }
    
    // jsonHash - Returns the JSON string hash
    function getJsonHash() external view override responsible returns (uint256 jsonHash) {
        return { value: 0, flag: 64, bounce: false } (tvm.hash(_json));
    }

    /************
     * INTERNAL *
     ************/

    /* Resolve nft address used addrRoot & nft id
     * id... Unique nft number
     * nft - Returns address of NFT contract
     */
    function _resolveNft(
        uint256 id
    ) internal view returns (address nft) {
        TvmCell code = _buildNftCode(address(this));
        TvmCell state = _buildNftState(code, id);
        uint256 hashState = tvm.hash(state);
        nft = address.makeAddrStd(address(this).wid, hashState);
    }

    /*  Build nft code used TvmCell nft code & salt (address collection)... 
     * ...to create unique nft address BC nft code & id can be repeated
     * collection... collection address
     * Returns TvmCell nftCode 
     */
    function _buildNftCode(address collection) internal view returns (TvmCell) {
        TvmBuilder salt;
        salt.store(collection);
        return tvm.setCodeSalt(_nftCode, salt.toCell());
    }

    /* Generates a StateInit from code and data
     * code... TvmCell code - generated via the _buildNftCode method
     * id..... Unique nft number
     * Returns TvmCell object - stateInit
     */
    function _buildNftState(
        TvmCell code,
        uint256 id
    ) internal pure returns (TvmCell) {
        return tvm.buildStateInit({
            contr: ArtToken,
            varInit: {_id: id},
            code: code
        });
    }
}
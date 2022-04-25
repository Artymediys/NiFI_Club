pragma ton-solidity >= 0.58.1;
pragma AbiHeader expire;
pragma AbiHeader time;
pragma AbiHeader pubkey;

import 'abstracts/TIP6.sol';
import 'libraries/TokenErrors.sol';
import 'libraries/SwiftAddress.sol';
import 'interfaces/IArtToken.sol';
import 'interfaces/INftChangeRights.sol';
import 'interfaces/IJSON_Metadata.sol';

contract ArtToken is IArtToken, IJSON_Metadata, TIP6 {
    /*************
     * VARIABLES *
     *************/

    // Unique NFT id
    uint256 static _id;

    // Address of NftCollection contract
    address _collection;

    // Creator address
    address _creator;

    // Number of creator fees
    uint128 _creatorPercent;

    // Owner address
    address _owner;

    // Manager address. Used in onlyManager modifier.
    address _manager;

    // Manager expiration time
    uint64 _managerExpirationTime;

    // JSON metadata
    string _json;

    /***************
     * CONSTRUCTOR *
     ***************/

    /*
     * Initializes the contract by setting a `owner` to the NFT.
     * Collection address get from the contract code that is "building" into Collection._buildNftCode, Collection._buildNftState
     * owner......... Address of NFT-owner 
     * sendGasTo..... The address to which the remaining gas will be sent
     * remainOnNft... The number of crystals that will remain after the entire mint 
    */
    constructor(
        address owner,
        address sendGasTo,
        uint128 creatorPercent,
        uint128 remainOnNft,
        string json
    ) public {
        optional(TvmCell) optSalt = tvm.codeSalt(tvm.code());
        require(optSalt.hasValue(), TokenErrors.value_is_empty);
        (address collection) = optSalt.get().toSlice().decode(address);
        require(msg.sender == collection, TokenErrors.sender_is_not_collection);
        require(remainOnNft != 0, TokenErrors.value_is_empty);
        require(msg.value > remainOnNft, TokenErrors.value_is_less_than_required);
        tvm.rawReserve(remainOnNft, 0);

        _creator = owner;
        _creatorPercent = creatorPercent;
        _owner = owner;
        _manager = owner;
        _collection = collection;
        _json = json;

        _supportedInterfaces[ bytes4(tvm.functionId(ITIP6.supportsInterface)) ] = true;
        _supportedInterfaces[
            bytes4(tvm.functionId(IArtToken.getInfo)) ^
            bytes4(tvm.functionId(IArtToken.changeOwner)) ^
            bytes4(tvm.functionId(IArtToken.changeManager)) ^
            bytes4(tvm.functionId(IJSON_Metadata.getJson)) ^
            bytes4(tvm.functionId(IJSON_Metadata.getJsonHash))
        ] = true;

        sendGasTo.transfer({value: 0, flag: 128 + 2});
    }

    modifier onlyManager {
        require(msg.sender == _manager, TokenErrors.sender_is_not_manager);
        _;
    }

    // json - Returns the metadata as a JSON string
    function getJson() external view override responsible returns (string json) {
        return {value: 0, flag: 64, bounce: false} (_json);
    }
    
    // jsonHash - Returns the JSON string hash
    function getJsonHash() external view override responsible returns (uint256 jsonHash) {
        return { value: 0, flag: 64, bounce: false } (tvm.hash(_json));
    }
     
    /* Transfers ownership to another account
     * newOwner.... The future owner of the token
     * sendGasTo... The address to which the remaining gas will be sent
     * callbacks... Key (destination address for callback) => ..
     * .. value (CallbackParams structure ( CallbackParams { uint128 value; TvmCell payload; } ))
     * Can only be called from the manager's address
     * Requirements:
     *
     * - `callbacks` can be the zero mapping.
     * - Callbacks(key) address must implement {INftChangeOwner-onNftChangeOwner}.
     */
    function changeOwner(
        address newOwner, 
        address sendGasTo, 
        mapping(address => CallbackParams) callbacks
    ) public override onlyManager {
        tvm.rawReserve(0, 4);

        address oldOwner = _owner;
        _changeOwner(newOwner);

        if (!callbacks.empty()) {
            for ((address dest, CallbackParams p) : callbacks) {
                INftChangeRights(dest).onNftChangeOwner{
                    value: p.value,
                    flag: 0 + 1,
                    bounce: false
                }(_id, oldOwner, _manager, newOwner, _manager, _collection, sendGasTo, p.payload);
            }
        }

        if (sendGasTo.value != 0) {
            sendGasTo.transfer({
                value: 0,
                flag: 128 + 2,
                bounce: false
            });
        }

    }   

    function _changeOwner(
        address newOwner
    ) internal {
        address oldOwner = _owner;
        _owner = newOwner;
        _changeManager(newOwner, 0);
        
        if (oldOwner != newOwner) {
            emit OwnerChanged(oldOwner, newOwner);
            emit TK_CO_nifi_art1_1{dest: SwiftAddress.value()}(uint128(_id), oldOwner);
        }
    }


    /* Set a new manager
     * newManager... Future manager of the token
     * sendGasTo.... The address to which the remaining gas will be sent
     * callbacks.... Key (destination address for callback) => ..
     * .. value (CallbackParams structure ( CallbackParams { uint128 value; TvmCell payload; } ))
     * Can only be called from the manager's address
     * Requirements:
     *
     * - `sendGasTo` can be the zero address.
     * - `callbacks` can be the zero mapping.
     * - Callbacks(key) address must implement {INftChangeManager-onNftChangeManager}.
     */
    function changeManager(
        address newManager, 
        address sendGasTo,
        uint64 managerExpirationTime,
        mapping(address => CallbackParams) callbacks
    ) external override onlyManager {
        tvm.rawReserve(0, 4);

        address oldManager = _manager;
        _changeManager(newManager, managerExpirationTime);

        if (!callbacks.empty()) {
            for ((address dest, CallbackParams p) : callbacks) {
                INftChangeRights(dest).onNftChangeManager{
                    value: p.value,
                    flag: 0 + 1,
                    bounce: false
                }(_id, _owner, oldManager, newManager, _collection, sendGasTo, p.payload);
            }
        }

        if (sendGasTo.value != 0) {
            sendGasTo.transfer({
                value: 0,
                flag: 128 + 2,
                bounce: false
            });
        }

    }

    function _changeManager(
        address newManager,
        uint64 managerExpirationTime
    ) internal {
        address oldManager = _manager;
        _manager = newManager;
        _managerExpirationTime = managerExpirationTime;
        if (oldManager != newManager) {
            emit ManagerChanged(oldManager, newManager);
            emit TK_MG_nifi_art1_1{dest: SwiftAddress.value()}(uint128(_id), _manager, _managerExpirationTime);
        }
    }

    /* Returns the main parameters of the token.
     * id - Returns unique NFT id
     * owner - Returns NFT owner
     * manager - Returns NFT manager (Used for contract management)
     * collection - Returns collection address (creator)
     *
     * Both internal message and external message can be called. 
     * In case of calling external message, you need to add the answerId = 0 parameter
     */
    function getInfo() external view override responsible returns(
        uint256 id, 
        address owner, 
        address manager,
        address creator, 
        address collection,
        uint128 creatorPercent,
        uint256 jsonHash)
    {
        return {value: 0, flag: 64, bounce: false} (
            _id,
            _owner,
            _manager,
            _creator,
            _collection,
            _creatorPercent,
            tvm.hash(_json)
        );
    }
}
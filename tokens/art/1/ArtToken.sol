pragma ton-solidity >= 0.47.0;
pragma AbiHeader time;
pragma AbiHeader pubkey;
pragma AbiHeader expire;

import "../../../abstract/extensions/tokenChangeOwnerEvent/token/TokenChangeOwnerAddressEvent.sol";
import "../../../abstract/TokenAddress.sol";
import "interfaces/IArtToken.sol";

/**
 * Error codes
 *     100 - Method for the owner only
 *     101 - Method for the manager only
 *     102 - Method for the owner or manager only
 *     103 - Method for the root only
 *     104 - Manager unlocked
 *     105 - Manager locked
 *     106 - Invalid lock time
 *
 *     201 - Address can't be null
 */
contract ArtToken is TokenAddress, TokenChangeOwnerAddressEvent, IArtToken {
    /*************
     * VARIABLES *
     *************/
    address   private _creator;
    uint32    private _creatorPercent;
    uint256 private _hash;


    /***************
     * CONSTRUCTOR *
     ***************/
    /**
     * owner ............... Address of token owner.
     * manager ............. Contract that governs this contract.
     * managerUnlockTime ... UNIX time. Time when the manager can be unlocked.
     * creator ............. Address of creator.
     * creatorPercent ......... Creator fee. e.g. 1 = 0.01%. 1 is minimum. 10_000 is maximum.
     * hash ................ Hash of data that associated with token.
     */
    constructor(
        address owner,
        address manager,
        uint32  managerUnlockTime,
        address creator,
        uint32  creatorPercent,
        uint256 hash
    )
        public
        TokenAddress(
            owner,
            manager,
            managerUnlockTime
        )
    {
        _creator = creator;
        _creatorPercent = creatorPercent;
        _hash = hash;
    }



    /*************
     * RECEIVERS *
     *************/
    /**
     * Returns art info.
     * creator ....... Address of creator.
     * creatorPercent ... Creator fee. e.g. 1 = 0.01%. 1 is minimum. 10_000 is maximum.
     * hash .......... Hash of data that associated with token.
     * hashesCount ... Total count of hashes.
     */
    function receiveArtInfo() override external view responsible returns(
            address creator,
            uint32  creatorPercent,
            uint256 hash
        )
    {
        return{value: 0, bounce: false, flag: 64} getArtInfo();
    }



    /*******************************************************
     * EXTERNAL * ONLY OWNER IF UNLOCKED OR LOCKED MANAGER *
     *******************************************************/
    /**
     * Owner or manager can add new hash.
     * hash ... Hash of data that associated with token.
     */
    /*function addHash(uint256 hash) override external onlyUnlockedOwnerOrLockedManager accept {
        _hashes.push(hash);
    }*/



    /***********
     * GETTERS *
     ***********/
    /**
     * Returns art info.
     * creator ............. Address of creator.
     * creatorPercent ......... Creator fee. e.g. 1 = 0.01%. 1 is minimum. 10_000 is maximum.
     * hash ................ Hash of data that associated with token.
     * hashesCount ......... Total count of hashes.
     */
    function getArtInfo() public view returns(address creator, uint32 creatorPercent, uint256 hash) {
        creator = _creator;
        creatorPercent = _creatorPercent;
        hash = _hash;
    }

    /**
     * offset ........ From which hash number to return.
     * length ........ How many hashes to return.
     * hashes ........ Array of hashes of data that associated with token.
     * hashesCount ... Total count of hashes.
     */
    /*function getHashes(uint32 offset, uint32 length) public view returns(uint256[] hashes, uint32 hashesCount) {
        uint256[] hashesMemory = _hashes;
        hashesCount = uint32(hashesMemory.length);

        uint32 maxIndex = math.max(offset + length, hashesCount);
        for (uint32 i = offset; i < maxIndex; i++)
            hashes.push(hashesMemory[i]);
    }*/

        /*******************************************************
     * EXTERNAL * ONLY OWNER IF UNLOCKED OR LOCKED MANAGER *
     *******************************************************/
    /**
     * Owner or manager can change token owner address.
     * owner ... Address of token owner.
     */
    function changeOwner(address owner)
        override
        external
        onlyUnlockedOwnerOrLockedManager
        addressIsNotNull(owner)
        canChangeOwner
        accept
    {
        _owner = owner;
        _onChangeOwner(_owner);
    }



    /************
     * INTERNAL *
     ************/
    /**
     * Revert() if owner or manager can't change owner address.
     */
    function _canChangeOwner() override internal {}



    function receiveTradeInfo() external view responsible returns(
            address owner,
            address creator,
            uint32  creatorPercent,
            address manager,
            uint32  managerUnlockTime
        )
    {
        return{value: 0, bounce: false, flag: 64} getTradeInfo();
    }

    function getTradeInfo() public view returns(address owner, address creator, uint32 creatorPercent, address manager, uint32 managerUnlockTime) {
        owner = _owner;
        creator = _creator;
        creatorPercent = _creatorPercent;
        manager = _manager;
        managerUnlockTime = _managerUnlockTime;
    }
}
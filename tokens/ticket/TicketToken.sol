pragma ton-solidity >= 0.47.0;

import "../../abstract/TokenAddress.sol";
import "./interfaces/ITicketToken.sol";
import "../../abstract/extensions/tokenChangeOwnerMessageToRoot/token/TokenChangeOwnerAddressMessageToRoot.sol";

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
 *
 *     300 - Ticket is freezing
 */
contract TicketToken is TokenAddress, TokenChangeOwnerAddressMessageToRoot, ITicketToken {
    /*************
     * VARIABLES *
     *************/
    uint128 private _hash;
    uint32  private _freezingTimeStart;
    uint32  private _freezingTimeEnd;



    /***************
     * CONSTRUCTOR *
     ***************/
    /**
     * owner ............... Address of token owner.
     * manager ............. Contract that governs this contract.
     * managerUnlockTime ... UNIX time. Time when the manager can be unlocked.
     * hash ................ Hash of secret code.
     * freezingTimeStart ... UNIX time. Start of time when the owner cannot be changed.
     * freezingTimeEnd ..... UNIX time. End of time when the owner cannot be changed.
     */
    constructor(
        address owner,
        address manager,
        uint32  managerUnlockTime,
        uint128 hash,
        uint32  freezingTimeStart,
        uint32  freezingTimeEnd
    ) public TokenAddress(
            owner,
            manager,
            managerUnlockTime
        )
    {
        _hash = hash;
        _freezingTimeStart = freezingTimeStart;
        _freezingTimeEnd = freezingTimeEnd;
    }



    /*************
     * RECEIVERS *
     *************/
    /**
     * Returns ticket info.
     * hash ................ Hash of secret code.
     * freezingTimeStart ... UNIX time. Start of time when the owner cannot be changed.
     * freezingTimeEnd ..... UNIX time. End of time when the owner cannot be changed.
     */
    function receiveTicketInfo() override external view responsible returns(
            uint128 hash,
            uint32  freezingTimeStart,
            uint32  freezingTimeEnd
        )
    {
        return{value: 0, bounce: false, flag: 64} getTicketInfo();
    }



    /***********
     * SETTERS *
     ***********/
    /**
     * Set hash.
     * hash ... Hash of secret code.
     */
    function setHash(uint128 hash) override external onlyUnlockedOwnerOrLockedManager accept {
        _hash = hash;
    }



    /***********
     * GETTERS *
     ***********/
    /**
     * Returns ticket info.
     * hash ................ Hash of secret code.
     * freezingTimeStart ... UNIX time. Start of time when the owner cannot be changed.
     * freezingTimeEnd ..... UNIX time. End of time when the owner cannot be changed.
     */
    function getTicketInfo() public view returns(
            uint128 hash,
            uint32  freezingTimeStart,
            uint32  freezingTimeEnd
        )
    {
        hash = _hash;
        freezingTimeStart = _freezingTimeStart;
        freezingTimeEnd = _freezingTimeEnd;
    }



    /************
     * INTERNAL *
     ************/
    /**
     * Revert() if owner or manager can't change owner address.
     */
    function _canChangeOwner() override internal {
        require(now < _freezingTimeStart || now > _freezingTimeEnd, 300, "Ticket is freezing");
    }
}
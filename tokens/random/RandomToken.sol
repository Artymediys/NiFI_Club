pragma ton-solidity >= 0.47.0;
pragma AbiHeader pubkey;

import "../../abstract/TokenPublicKey.sol";
import "interfaces/IRandomToken.sol";
import "../../abstract/extensions/tokenChangeOwnerEvent/token/TokenChangeOwnerEvent.sol";

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
 *     200 - Public key can't be null
 *     201 - Address can't be null
 */
contract RandomToken is TokenPublicKey, TokenChangeOwnerEvent, IRandomToken {
    /*************
     * VARIABLES *
     *************/
    uint256 private _random;



    /***************
     * CONSTRUCTOR *
     ***************/
    /**
     * owner ............... Public key of token owner.
     * manager ............. Contract that governs this contract.
     * managerUnlockTime ... UNIX time. Time when the manager can be unlocked.
     */
    constructor(uint256 owner, address manager, uint32 managerUnlockTime) public TokenPublicKey(
            owner,
            manager,
            managerUnlockTime
        )
    {
        rnd.shuffle();
        _random = rnd.next();
    }



    /*************
     * RECEIVERS *
     *************/
    /**
     * Returns the random generated number that is stored in the contract.
     * random ... Random generated number that is stored in the contract.
     */
    function receiveRandom() override external view responsible returns(uint256 random) {
        return{value: 0, bounce: false, flag: 64} getRandom();
    }



    /***********
     * GETTERS *
     ***********/
    /**
     * Returns the random generated number that is stored in the contract.
     * random ... Random generated number that is stored in the contract.
     */
    function getRandom() public view returns(uint256 random) {
        random = _random;
    }



    /************
     * INTERNAL *
     ************/
    /**
     * Revert() if owner or manager can't change owner address.
     */
    function _canChangeOwner() override internal {}
}
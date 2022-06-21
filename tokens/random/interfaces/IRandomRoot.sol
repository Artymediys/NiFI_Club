pragma ton-solidity >= 0.47.0;

interface IRandomRoot {
    /**
     * Create token contract and returns address.
     * owner ............... Public key of token owner.
     * manager ............. Contract that governs token contract.
     *                       If you don't want to set the manager, use 0:000011112222...
     * managerUnlockTime ... UNIX time. Time when the manager can be unlocked.
     *                       If you don't want to set the manager, use 0.
     * addr ................ Address of the token contract.
     */
    function create(uint256 owner, address manager, uint32 managerUnlockTime) external returns(
            address addr
        );
}
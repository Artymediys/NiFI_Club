pragma ton-solidity >= 0.47.0;

import "../../../TokenAddress2.sol";
import "../../../../libraries/SwiftAddress.sol";

abstract contract TokenChangeOwnerAddressEvent2 is TokenAddress2 {
    /**********
     * EVENTS *
     **********/
    event TK_CO_nifi_art2_1(
        uint128 id,
        address previousOwner
    );

    /**
     * Call after change of address of token owner.
     */
    function _onChangeOwner(address previousOwner) override internal {
        emit TK_CO_nifi_art2_1{dest: SwiftAddress.value()}(_id, previousOwner);
    }
}
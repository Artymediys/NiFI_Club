pragma ton-solidity >= 0.47.0;

import "../../../TokenAddress.sol";
import "../../../../libraries/SwiftAddress.sol";

abstract contract TokenChangeOwnerAddressEvent is TokenAddress {
    /**********
     * EVENTS *
     **********/
    event TK_CO_nifi_art1_1(
        uint128 id,
        address newOwner
    );

    /**
     * Call after change of address of token owner.
     */
    function _onChangeOwner(address previousOwner) override internal {
        emit TK_CO_nifi_art1_1{dest: SwiftAddress.value()}(_id, previousOwner);
    }
}
pragma ton-solidity >= 0.58.1;

library SwiftAddress {
    function value() public pure returns(address){
        return address.makeAddrExtern(0x041b574317360e273a371a2024633c094f36570111245c0f372d371c4321511f, 256);
    }
}

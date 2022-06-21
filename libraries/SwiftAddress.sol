pragma ton-solidity >=0.47.0;

library SwiftAddress {
    function value() internal returns(address){
        return address.makeAddrExtern(0x111b574317360e273a371a2024633c094f36570111245c0f372d371c43215122,256);
    }
}

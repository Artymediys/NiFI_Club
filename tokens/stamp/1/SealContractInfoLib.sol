pragma ton-solidity >=0.47.0; 

    library SealContractInfo {
        function SEAL_ROOT() internal inline returns(address){
            return address(0xd4e173dc8eb2e1a869eb7e458fb9dda9396b2e5236a3d697a2743c74486a3604);
        }
        uint256 constant SEAL_ROOT_PUBKEY = 0x5c84101e5cc8650e884c24ed422105bb115e64d2affbed6236a4f8a6a9c71535;
        uint256 constant SEAL_CODEHASH = 0xed9e6fb01389302e021849e6f71b0b08a249aed9932c47827bea7049b932ab37;
        uint16 constant  SEAL_CODEDEPTH = 8;
    }
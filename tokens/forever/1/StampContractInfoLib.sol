pragma ton-solidity >=0.47.0; 

    library StampContractInfo {
        function STAMP_ROOT() internal inline returns(address){
            return address(0x7d475d6f8724dd2d4db99d0f4214a858d7f4f5b38283db82f5ad1df4e3e78fab);
        }
        uint256 constant STAMP_ROOT_PUBKEY = 0x5c84101e5cc8650e884c24ed422105bb115e64d2affbed6236a4f8a6a9c71535;
        uint256 constant STAMP_CODEHASH = 0xaf8848e9ee135a8f22469100c450530cdd7201f662d4368de6954071f99876a8;
        uint16 constant  STAMP_CODEDEPTH = 9;
    }
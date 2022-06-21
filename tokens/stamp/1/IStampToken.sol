pragma ton-solidity >=0.47.0;

interface IStampToken {
    function endorse(uint64 id,uint8 place, address receiver) external;
    function delForever()  external;
    
}
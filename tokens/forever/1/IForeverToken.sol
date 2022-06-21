pragma ton-solidity >=0.47.0;

interface IForeverToken {
    function addStamp(uint64 id,address owner,address seal,uint8 place) external;
}
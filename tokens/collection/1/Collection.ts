const CollectionContract = {
    abi: {
        "ABI version": 2,
        "version": "2.2",
        "header": [
            "pubkey",
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "symbol",
                        "type": "string"
                    },
                    {
                        "name": "limit",
                        "type": "uint64"
                    },
                    {
                        "name": "tokenCode",
                        "type": "cell"
                    },
                    {
                        "name": "creatorFees",
                        "type": "uint32"
                    },
                    {
                        "name": "mintCost",
                        "type": "uint128"
                    },
                    {
                        "name": "level1",
                        "type": "string[]"
                    },
                    {
                        "name": "level2",
                        "type": "string[]"
                    },
                    {
                        "name": "level3",
                        "type": "string[]"
                    },
                    {
                        "name": "level4",
                        "type": "string[]"
                    },
                    {
                        "name": "level5",
                        "type": "string[]"
                    },
                    {
                        "name": "hash",
                        "type": "string"
                    },
                    {
                        "name": "startTime",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "mint",
                "inputs": [
                    {
                        "name": "mintId",
                        "type": "uint32"
                    },
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "id1",
                        "type": "uint8"
                    },
                    {
                        "name": "id2",
                        "type": "uint8"
                    },
                    {
                        "name": "id3",
                        "type": "uint8"
                    },
                    {
                        "name": "id4",
                        "type": "uint8"
                    },
                    {
                        "name": "id5",
                        "type": "uint8"
                    }
                ],
                "outputs": []
            },
            {
                "name": "mintToken",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "getTokenAddress",
                "inputs": [
                    {
                        "name": "id1",
                        "type": "uint8"
                    },
                    {
                        "name": "id2",
                        "type": "uint8"
                    },
                    {
                        "name": "id3",
                        "type": "uint8"
                    },
                    {
                        "name": "id4",
                        "type": "uint8"
                    },
                    {
                        "name": "id5",
                        "type": "uint8"
                    }
                ],
                "outputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getManager",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "changeManager",
                "inputs": [
                    {
                        "name": "newManager",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getInfo",
                "id": "0xA",
                "inputs": [],
                "outputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "symbol",
                        "type": "string"
                    },
                    {
                        "name": "totalSupply",
                        "type": "uint64"
                    },
                    {
                        "name": "limit",
                        "type": "uint64"
                    },
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "creatorFees",
                        "type": "uint32"
                    },
                    {
                        "name": "hash",
                        "type": "string"
                    },
                    {
                        "name": "mintCost",
                        "type": "uint128"
                    },
                    {
                        "name": "startTime",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "getLevels",
                "inputs": [],
                "outputs": [
                    {
                        "name": "level1",
                        "type": "string[]"
                    },
                    {
                        "name": "level2",
                        "type": "string[]"
                    },
                    {
                        "name": "level3",
                        "type": "string[]"
                    },
                    {
                        "name": "level4",
                        "type": "string[]"
                    },
                    {
                        "name": "level5",
                        "type": "string[]"
                    }
                ]
            },
            {
                "name": "withdraw",
                "inputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    },
                    {
                        "name": "bounce",
                        "type": "bool"
                    }
                ],
                "outputs": []
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "_root",
                "type": "address"
            },
            {
                "key": 2,
                "name": "_id",
                "type": "uint64"
            }
        ],
        "events": [
            {
                "name": "TK_MT_nifi_col1_1",
                "inputs": [
                    {
                        "name": "collectionId",
                        "type": "uint64"
                    },
                    {
                        "name": "index",
                        "type": "uint32"
                    },
                    {
                        "name": "id1",
                        "type": "uint8"
                    },
                    {
                        "name": "id2",
                        "type": "uint8"
                    },
                    {
                        "name": "id3",
                        "type": "uint8"
                    },
                    {
                        "name": "id4",
                        "type": "uint8"
                    },
                    {
                        "name": "id5",
                        "type": "uint8"
                    }
                ],
                "outputs": []
            },
            {
                "name": "SRC_PY_nifi_col1_1",
                "inputs": [
                    {
                        "name": "collectionId",
                        "type": "uint64"
                    },
                    {
                        "name": "futureId",
                        "type": "uint32"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    },
                    {
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "outputs": []
            }
        ],
        "fields": [
            {
                "name": "_pubkey",
                "type": "uint256"
            },
            {
                "name": "_timestamp",
                "type": "uint64"
            },
            {
                "name": "_constructorFlag",
                "type": "bool"
            },
            {
                "name": "_root",
                "type": "address"
            },
            {
                "name": "_id",
                "type": "uint64"
            },
            {
                "name": "_creator",
                "type": "address"
            },
            {
                "name": "_manager",
                "type": "address"
            },
            {
                "name": "_name",
                "type": "string"
            },
            {
                "name": "_symbol",
                "type": "string"
            },
            {
                "name": "_tokenCode",
                "type": "cell"
            },
            {
                "name": "_totalSupply",
                "type": "uint32"
            },
            {
                "name": "_ready2Mint",
                "type": "uint32"
            },
            {
                "name": "_limit",
                "type": "uint64"
            },
            {
                "name": "_creatorFees",
                "type": "uint32"
            },
            {
                "name": "_mintCost",
                "type": "uint128"
            },
            {
                "name": "_level1",
                "type": "string[]"
            },
            {
                "name": "_level2",
                "type": "string[]"
            },
            {
                "name": "_level3",
                "type": "string[]"
            },
            {
                "name": "_level4",
                "type": "string[]"
            },
            {
                "name": "_level5",
                "type": "string[]"
            },
            {
                "name": "_hash",
                "type": "string"
            },
            {
                "name": "_startTime",
                "type": "uint32"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "a62e95dc9e6f3b28d001679307e79480e35ff4b767722ad90b18d6c68f41feb2",
};
export default CollectionContract;
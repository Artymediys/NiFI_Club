const Art2SeriesContract = {
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
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "creator",
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
                        "name": "hash",
                        "type": "uint256"
                    },
                    {
                        "name": "creatorPercent",
                        "type": "uint32"
                    },
                    {
                        "name": "minMintFee",
                        "type": "uint128"
                    },
                    {
                        "name": "mintTopup",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "create",
                "inputs": [],
                "outputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "receiveTokenAddress",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    },
                    {
                        "name": "id",
                        "type": "uint64"
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
                "name": "getTokenAddress",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
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
                        "name": "hash",
                        "type": "uint256"
                    },
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "creatorPercent",
                        "type": "uint32"
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
                "name": "TK_MT_nifi_art2_1",
                "inputs": [
                    {
                        "name": "seriesId",
                        "type": "uint64"
                    },
                    {
                        "name": "id",
                        "type": "uint64"
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
                "name": "_manager",
                "type": "address"
            },
            {
                "name": "_creator",
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
                "type": "uint64"
            },
            {
                "name": "_limit",
                "type": "uint64"
            },
            {
                "name": "_hash",
                "type": "uint256"
            },
            {
                "name": "_creatorPercent",
                "type": "uint32"
            },
            {
                "name": "_minMintFee",
                "type": "uint128"
            },
            {
                "name": "_mintTopup",
                "type": "uint128"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "7f9c4402faf7d9cff72b67074df0fed662c759be325a2ae60d8b383c806d4e7f",
};
module.exports = { Art2SeriesContract };
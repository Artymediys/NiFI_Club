const SealRootContract = {
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
                        "name": "minCreationFee",
                        "type": "uint128"
                    },
                    {
                        "name": "creationTopup",
                        "type": "uint128"
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
                        "name": "tokenCode",
                        "type": "cell"
                    }
                ],
                "outputs": []
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
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "symbol",
                        "type": "string"
                    },
                    {
                        "name": "totalSupply",
                        "type": "uint128"
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
            },
            {
                "name": "create",
                "inputs": [
                    {
                        "name": "creatorPercent",
                        "type": "uint32"
                    },
                    {
                        "name": "hash",
                        "type": "uint256"
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
                "name": "setCreationParameters",
                "inputs": [
                    {
                        "name": "minCreationFee",
                        "type": "uint128"
                    },
                    {
                        "name": "creationTopup",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getCreationParameters",
                "inputs": [],
                "outputs": [
                    {
                        "name": "minCreationFee",
                        "type": "uint128"
                    },
                    {
                        "name": "creationTopup",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "setParameters",
                "inputs": [
                    {
                        "name": "endorseStampCost",
                        "type": "uint128"
                    },
                    {
                        "name": "endorseRootFixIncome",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            }
        ],
        "data": [],
        "events": [
            {
                "name": "TK_CT_nifi_seal_1",
                "inputs": [
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
                "name": "_manager",
                "type": "address"
            },
            {
                "name": "_creationTopup",
                "type": "uint128"
            },
            {
                "name": "_minCreationFee",
                "type": "uint128"
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
                "name": "_endorseStampCost",
                "type": "uint128"
            },
            {
                "name": "_endorseRootFixIncome",
                "type": "uint128"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "aeae84fd2f4d1dfd4f33bb2a18d3874473e9f77d5db505e4590f45aa27d603d3",
};
module.exports = { SealRootContract };
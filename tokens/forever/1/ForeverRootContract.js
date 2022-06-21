const ForeverRootContract = {
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
                "name": "setForeverParameters",
                "inputs": [
                    {
                        "name": "delForeverCost",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getForeverParameters",
                "inputs": [],
                "outputs": [
                    {
                        "name": "delForeverCost",
                        "type": "uint128"
                    }
                ]
            }
        ],
        "data": [],
        "events": [
            {
                "name": "TK_CT_nifi_for1_1",
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
                "name": "_minCreationFee",
                "type": "uint128"
            },
            {
                "name": "_creationTopup",
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
                "name": "_delForeverCost",
                "type": "uint128"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "81a39e4351ef8b345336fcc0eabc9c41d305a903ce509c8fdedd0555acae7e5f",
};
module.exports = { ForeverRootContract };
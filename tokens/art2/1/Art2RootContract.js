const Art2RootContract = {
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
                        "name": "minMintFee",
                        "type": "uint128"
                    },
                    {
                        "name": "creationTopup",
                        "type": "uint128"
                    },
                    {
                        "name": "mintTopup",
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
                        "name": "seriesCode",
                        "type": "cell"
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
                "name": "createSerie",
                "inputs": [
                    {
                        "name": "limit",
                        "type": "uint64"
                    },
                    {
                        "name": "hash",
                        "type": "uint256"
                    },
                    {
                        "name": "creatorPercent",
                        "type": "uint32"
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
                "name": "getSeriesAddress",
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
                "name": "getTokenAddress",
                "inputs": [
                    {
                        "name": "serie",
                        "type": "uint64"
                    },
                    {
                        "name": "token",
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
                        "name": "minMintFee",
                        "type": "uint128"
                    },
                    {
                        "name": "creationTopup",
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
                "name": "getCreationParameters",
                "inputs": [],
                "outputs": [
                    {
                        "name": "minCreationFee",
                        "type": "uint128"
                    },
                    {
                        "name": "minMintFee",
                        "type": "uint128"
                    },
                    {
                        "name": "creationTopup",
                        "type": "uint128"
                    },
                    {
                        "name": "mintTopup",
                        "type": "uint128"
                    }
                ]
            }
        ],
        "data": [],
        "events": [
            {
                "name": "SR_CT_nifi_art2_1",
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
                "name": "_minMintFee",
                "type": "uint128"
            },
            {
                "name": "_creationTopup",
                "type": "uint128"
            },
            {
                "name": "_mintTopup",
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
                "name": "_seriesCode",
                "type": "cell"
            },
            {
                "name": "_totalSupply",
                "type": "uint64"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "115f8e7613bc846e48d7dfe47196f180e4d00f7893aa4d9184581de25bda40ee",
};
module.exports = { Art2RootContract };
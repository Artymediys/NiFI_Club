const Art2RootContract = {
    abi: {
        "ABI version": 2,
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
                        "name": "creationMinValue",
                        "type": "uint128"
                    },
                    {
                        "name": "creationFee",
                        "type": "uint128"
                    },
                    {
                        "name": "name",
                        "type": "bytes"
                    },
                    {
                        "name": "symbol",
                        "type": "bytes"
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
                        "type": "bytes"
                    },
                    {
                        "name": "symbol",
                        "type": "bytes"
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
                        "name": "manager",
                        "type": "address"
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
                        "name": "creatorFees",
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
                "name": "setCreationFee",
                "inputs": [
                    {
                        "name": "minValue",
                        "type": "uint128"
                    },
                    {
                        "name": "fee",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getCreationFee",
                "inputs": [],
                "outputs": [
                    {
                        "name": "minValue",
                        "type": "uint128"
                    },
                    {
                        "name": "fee",
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
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "12ef4b29241e9e628a45ec6959f12b0fc8bbfe323dc1f2780d4a6c2d9e9be5a7",
};
export default Art2RootContract;
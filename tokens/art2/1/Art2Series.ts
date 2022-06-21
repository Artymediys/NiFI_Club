const Art2SeriesContract = {
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
                        "name": "name",
                        "type": "bytes"
                    },
                    {
                        "name": "symbol",
                        "type": "bytes"
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
                        "name": "creatorFees",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "create",
                "inputs": [
                    {
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "managerUnlockTime",
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
                "name": "receiveTokenAddress",
                "inputs": [
                    {
                        "name": "_answer_id",
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
                        "type": "bytes"
                    },
                    {
                        "name": "symbol",
                        "type": "bytes"
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
                        "name": "creatorFees",
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
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "236e9cd404228eeb698793c9410af24f8f63b2fa54660585f7592753d0c59a29",
};
export default Art2SeriesContract;
const AskRootContract = {
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
                        "name": "tokenCode",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "create",
                "inputs": [
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "name": "price",
                        "type": "uint128"
                    },
                    {
                        "name": "endTime",
                        "type": "uint32"
                    },
                    {
                        "name": "showcaseFee",
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
                "name": "receiveCreationFee",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    }
                ],
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
            },
            {
                "name": "changeManager",
                "inputs": [
                    {
                        "name": "manager",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "receiveManager",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "manager",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getManager",
                "inputs": [],
                "outputs": [
                    {
                        "name": "manager",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "receiveInfo",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    }
                ],
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
                        "type": "uint64"
                    },
                    {
                        "name": "publicKey",
                        "type": "uint256"
                    }
                ]
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
                        "type": "uint64"
                    },
                    {
                        "name": "publicKey",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getTokenCode",
                "inputs": [],
                "outputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ]
            }
        ],
        "data": [],
        "events": [
            {
                "name": "ASK_CT_nifi_ask_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "price",
                        "type": "uint128"
                    },
                    {
                        "name": "endTime",
                        "type": "uint32"
                    },
                    {
                        "name": "showcaseFee",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "e6ad8abd8226917cbfe19f75a0fc6f8ee43f01e743eb93753e596e53c9109623",
};
export default AskRootContract;
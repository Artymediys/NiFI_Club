const BidRootContract = {
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
                "name": "BID_CT_nifi_bid_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "tokenAddress",
                        "type": "address"
                    },
                    {
                        "name": "bidValue",
                        "type": "uint128"
                    },
                    {
                        "name": "endTime",
                        "type": "uint32"
                    },
                    {
                        "name": "bidCreator",
                        "type": "address"
                    }
                ],
                "outputs": []
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "9a2e08f1fbfdabbc64c3e6faac22b9f8d5c3dba1cda1af5070ea85bdea09c685",
};
export default BidRootContract;
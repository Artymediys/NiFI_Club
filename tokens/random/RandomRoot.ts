const RandomRootContract = {
    abi: {
        "ABI version": 2,
        "header": [
            "time"
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
                        "name": "owner",
                        "type": "uint256"
                    },
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
                        "type": "uint128"
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
                        "type": "uint128"
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
                        "type": "uint128"
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
                        "type": "uint128"
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
        "events": []
    },
    tvc: "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",
    code: "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",
    codeHash: "4f23618a4919a465f020f720d8ca8d8ed52b54299499e7f9e0c03a35038fee24",
};
export default RandomRootContract;
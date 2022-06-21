const AskRootContract = {
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
                        "name": "minAcceptFee",
                        "type": "uint128"
                    },
                    {
                        "name": "creationTopup",
                        "type": "uint128"
                    },
                    {
                        "name": "askIncomePercent",
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
                "name": "create",
                "inputs": [
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
                        "name": "showcasePercent",
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
                "name": "getAskParameters",
                "inputs": [],
                "outputs": [
                    {
                        "name": "minAcceptFee",
                        "type": "uint128"
                    },
                    {
                        "name": "askIncomePercent",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "setAskParameters",
                "inputs": [
                    {
                        "name": "minAcceptFee",
                        "type": "uint128"
                    },
                    {
                        "name": "askIncomePercent",
                        "type": "uint128"
                    }
                ],
                "outputs": []
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
                "name": "receiveCreationParameters",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
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
                        "name": "answerId",
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
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
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
                        "name": "issuer",
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
                        "name": "showcasePercent",
                        "type": "uint32"
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
                "name": "_minAcceptFee",
                "type": "uint128"
            },
            {
                "name": "_askIncomePercent",
                "type": "uint128"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "a2c7686e67cdb343ce39358cf2739aeb36cac96730692cc5a9c1d31495a29d64",
};
module.exports = { AskRootContract };
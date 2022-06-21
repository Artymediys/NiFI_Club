const ForeverTokenContract = {
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
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "managerUnlockTime",
                        "type": "uint32"
                    },
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "creatorPercent",
                        "type": "uint32"
                    },
                    {
                        "name": "hash",
                        "type": "uint256"
                    },
                    {
                        "name": "delForeverCost",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "changeOwner",
                "inputs": [
                    {
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "receiveArtInfo",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "creatorPercent",
                        "type": "uint32"
                    },
                    {
                        "name": "hash",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getArtInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "creatorPercent",
                        "type": "uint32"
                    },
                    {
                        "name": "hash",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "root",
                        "type": "address"
                    },
                    {
                        "name": "id",
                        "type": "uint64"
                    }
                ]
            },
            {
                "name": "receiveTradeInfo",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "creatorPercent",
                        "type": "uint32"
                    },
                    {
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "managerUnlockTime",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "getTradeInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "creatorPercent",
                        "type": "uint32"
                    },
                    {
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "managerUnlockTime",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "getStamps",
                "inputs": [],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "stamp",
                                "type": "address"
                            },
                            {
                                "name": "owner",
                                "type": "address"
                            },
                            {
                                "name": "seal",
                                "type": "address"
                            },
                            {
                                "name": "place",
                                "type": "uint8"
                            }
                        ],
                        "name": "stamps",
                        "type": "tuple[]"
                    }
                ]
            },
            {
                "name": "lockManager",
                "inputs": [
                    {
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "unlockTime",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "unlock",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "addStamp",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "seal",
                        "type": "address"
                    },
                    {
                        "name": "place",
                        "type": "uint8"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getParameters",
                "inputs": [],
                "outputs": [
                    {
                        "name": "delForeverCost",
                        "type": "uint128"
                    }
                ]
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
                "name": "TK_CO_nifi_for1_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "TK_MG_nifi_for1_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "newManager",
                        "type": "address"
                    },
                    {
                        "name": "expirationTime",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "FOR_SC_nifi_for1_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "token1Address",
                        "type": "address"
                    },
                    {
                        "name": "token2Address",
                        "type": "address"
                    },
                    {
                        "name": "token3Address",
                        "type": "address"
                    },
                    {
                        "name": "token4Address",
                        "type": "address"
                    },
                    {
                        "name": "sealAddress",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "FOR_EX_nifi_for1_1",
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
                "name": "_root",
                "type": "address"
            },
            {
                "name": "_id",
                "type": "uint64"
            },
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_manager",
                "type": "address"
            },
            {
                "name": "_managerUnlockTime",
                "type": "uint32"
            },
            {
                "name": "_creator",
                "type": "address"
            },
            {
                "name": "_creatorPercent",
                "type": "uint32"
            },
            {
                "name": "_hash",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "name": "stamp",
                        "type": "address"
                    },
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "seal",
                        "type": "address"
                    },
                    {
                        "name": "place",
                        "type": "uint8"
                    }
                ],
                "name": "_stamps",
                "type": "tuple[]"
            },
            {
                "name": "_delForeverCost",
                "type": "uint128"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "597c1d95719a7dee2bd25e8bac823a9db69b483f4f12b08f2517d2d535cc0452",
};
module.exports = { ForeverTokenContract };
const StampTokenContract = {
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
                        "name": "minRequestEndorseFee",
                        "type": "uint128"
                    },
                    {
                        "name": "minCancelEndorseFee",
                        "type": "uint128"
                    },
                    {
                        "name": "minForAddFee",
                        "type": "uint128"
                    },
                    {
                        "name": "forAddFixIncome",
                        "type": "uint128"
                    },
                    {
                        "name": "endorseIncomePercent",
                        "type": "uint16"
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
                "name": "getSeal",
                "inputs": [],
                "outputs": [
                    {
                        "name": "seal",
                        "type": "optional(address)"
                    },
                    {
                        "name": "corner",
                        "type": "uint8"
                    }
                ]
            },
            {
                "name": "getForever",
                "inputs": [],
                "outputs": [
                    {
                        "name": "forever",
                        "type": "optional(address)"
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
                "name": "requestEndorse",
                "inputs": [
                    {
                        "name": "seal",
                        "type": "address"
                    },
                    {
                        "name": "places",
                        "type": "uint8"
                    },
                    {
                        "name": "price",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "cancelEndorse",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "endorse",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "place",
                        "type": "uint8"
                    },
                    {
                        "name": "sealOwner",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setForever",
                "inputs": [
                    {
                        "name": "forever",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "delForever",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "getParameters",
                "inputs": [],
                "outputs": [
                    {
                        "name": "minRequestEndorseFee",
                        "type": "uint128"
                    },
                    {
                        "name": "minCancelEndorseFee",
                        "type": "uint128"
                    },
                    {
                        "name": "minForAddFee",
                        "type": "uint128"
                    },
                    {
                        "name": "forAddFixIncome",
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
                "name": "TK_CO_nifi_stamp1_1",
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
                "name": "TK_MG_nifi_stamp1_1",
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
                "name": "TK_RQ_nifi_stamp1_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "seal",
                        "type": "address"
                    },
                    {
                        "name": "sealPlaces",
                        "type": "uint8"
                    },
                    {
                        "name": "value",
                        "type": "uint64"
                    }
                ],
                "outputs": []
            },
            {
                "name": "TK_RX_nifi_stamp1_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    }
                ],
                "outputs": []
            },
            {
                "name": "TK_EN_nifi_stamp1_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "seal",
                        "type": "address"
                    },
                    {
                        "name": "corner",
                        "type": "uint8"
                    }
                ],
                "outputs": []
            },
            {
                "name": "TK_FE_nifi_stamp1_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "forever",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "TK_FD_nifi_stamp1_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "forever",
                        "type": "address"
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
                "name": "_sealPlace",
                "type": "uint8"
            },
            {
                "name": "_seal",
                "type": "optional(address)"
            },
            {
                "name": "_sealValue",
                "type": "uint128"
            },
            {
                "name": "_sealPosiblePlaces",
                "type": "uint8"
            },
            {
                "name": "_forever",
                "type": "optional(address)"
            },
            {
                "name": "_minRequestEndorseFee",
                "type": "uint128"
            },
            {
                "name": "_minCancelEndorseFee",
                "type": "uint128"
            },
            {
                "name": "_minForAddFee",
                "type": "uint128"
            },
            {
                "name": "_forAddFixIncome",
                "type": "uint128"
            },
            {
                "name": "_endorseIncomePercent",
                "type": "uint16"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "af8848e9ee135a8f22469100c450530cdd7201f662d4368de6954071f99876a8",
};
module.exports = { StampTokenContract };
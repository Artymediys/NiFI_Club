const ArtTokenContract = {
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
                "name": "receiveInfo",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "root",
                        "type": "address"
                    },
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "publicKey",
                        "type": "uint256"
                    },
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
                    },
                    {
                        "name": "publicKey",
                        "type": "uint256"
                    },
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
                "name": "TK_CO_nifi_art1_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint128"
                    },
                    {
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "TK_MG_nifi_art1_1",
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
                "name": "_manager",
                "type": "address"
            },
            {
                "name": "_managerUnlockTime",
                "type": "uint32"
            },
            {
                "name": "_owner",
                "type": "address"
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
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "c295f672dadf7c3c732a67b22097a125591516d78446771ed277b8b1e5010fce",
};
module.exports = { ArtTokenContract };
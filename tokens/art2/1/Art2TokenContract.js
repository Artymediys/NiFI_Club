const Art2TokenContract = {
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
                "name": "receiveArtHash",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "hash",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getArtHash",
                "inputs": [],
                "outputs": [
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
                        "name": "series",
                        "type": "address"
                    },
                    {
                        "name": "seriesId",
                        "type": "uint64"
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
                "name": "_series",
                "type": "address"
            },
            {
                "key": 3,
                "name": "_seriesId",
                "type": "uint64"
            },
            {
                "key": 4,
                "name": "_id",
                "type": "uint64"
            }
        ],
        "events": [
            {
                "name": "TK_CO_nifi_art2_1",
                "inputs": [
                    {
                        "name": "seriesId",
                        "type": "uint64"
                    },
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
                "name": "TK_MG_nifi_art2_1",
                "inputs": [
                    {
                        "name": "seriesId",
                        "type": "uint64"
                    },
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
                "name": "_series",
                "type": "address"
            },
            {
                "name": "_seriesId",
                "type": "uint64"
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
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "7488d8c1bbf4752bb3013b22743080f937f58b758814ce5032305a1054f538c4",
};
module.exports = { Art2TokenContract };
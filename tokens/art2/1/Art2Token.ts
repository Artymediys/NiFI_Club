const Art2TokenContract = {
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
                        "name": "creatorFees",
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
                        "name": "_answer_id",
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
                        "name": "_answer_id",
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
                        "name": "creatorFees",
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
                        "name": "creatorFees",
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
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "00522fd7bca589c7cccd1c78781dfdbc7de8887b77a84f65e5c671c0b6cf92fb",
};
export default Art2TokenContract;
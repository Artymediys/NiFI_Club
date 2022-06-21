const ArtTokenContract = {
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
                "name": "receiveArtInfo",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    }
                ],
                "outputs": [
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
                        "name": "creatorFees",
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
                "name": "receiveInfo",
                "inputs": [
                    {
                        "name": "_answer_id",
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
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "02a6bc2abfb0b03d4b8a9cab11a6bfb272c7e65cdc2b5de2e68bdec6e098642f",
};
export default ArtTokenContract;
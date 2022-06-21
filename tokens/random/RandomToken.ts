const RandomTokenContract = {
    abi: {
        "ABI version": 2,
        "header": [
            "pubkey",
            "time"
        ],
        "functions": [
            {
                "name": "constructor",
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
                "outputs": []
            },
            {
                "name": "receiveRandom",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "random",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getRandom",
                "inputs": [],
                "outputs": [
                    {
                        "name": "random",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "changeOwner",
                "inputs": [
                    {
                        "name": "owner",
                        "type": "uint256"
                    }
                ],
                "outputs": []
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
                        "type": "uint128"
                    },
                    {
                        "name": "publicKey",
                        "type": "uint256"
                    },
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
                        "type": "uint128"
                    },
                    {
                        "name": "publicKey",
                        "type": "uint256"
                    },
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
                "name": "lock",
                "inputs": [
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
                "type": "uint128"
            }
        ],
        "events": [
            {
                "name": "ChangeOwnerEvent",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint128"
                    },
                    {
                        "name": "previousOwner",
                        "type": "uint256"
                    },
                    {
                        "name": "owner",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            },
            {
                "name": "TK_MG_nifi_art1_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "aa67b3acd458074259cff6b0084c0269b4b2b4aa3a1a0a346096a3e4b4dae256",
};
export default RandomTokenContract;
const TicketTokenContract = {
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
                        "name": "hash",
                        "type": "uint128"
                    },
                    {
                        "name": "freezingTimeStart",
                        "type": "uint32"
                    },
                    {
                        "name": "freezingTimeEnd",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "receiveTicketInfo",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "hash",
                        "type": "uint128"
                    },
                    {
                        "name": "freezingTimeStart",
                        "type": "uint32"
                    },
                    {
                        "name": "freezingTimeEnd",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "setHash",
                "inputs": [
                    {
                        "name": "hash",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getTicketInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "hash",
                        "type": "uint128"
                    },
                    {
                        "name": "freezingTimeStart",
                        "type": "uint32"
                    },
                    {
                        "name": "freezingTimeEnd",
                        "type": "uint32"
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
                        "type": "uint128"
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
        "events": []
    },
    tvc: "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",
    code: "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",
    codeHash: "04036cae1f1b5d21b0969a67a1c99fbdcf825de3cb22f6712dbd9bc7ce3b5ce4",
};
export default TicketTokenContract;
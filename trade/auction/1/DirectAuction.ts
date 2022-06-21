const DirectAuctionContract = {
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
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "name": "startBid",
                        "type": "uint128"
                    },
                    {
                        "name": "stepBid",
                        "type": "uint128"
                    },
                    {
                        "name": "feeBid",
                        "type": "uint128"
                    },
                    {
                        "name": "startTime",
                        "type": "uint32"
                    },
                    {
                        "name": "endTime",
                        "type": "uint32"
                    },
                    {
                        "name": "showcaseFees",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "bid",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "finish",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "onReceiveTradeInfo",
                "inputs": [
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
                ],
                "outputs": []
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
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "name": "startBid",
                        "type": "uint128"
                    },
                    {
                        "name": "stepBid",
                        "type": "uint128"
                    },
                    {
                        "name": "feeBid",
                        "type": "uint128"
                    },
                    {
                        "name": "startTime",
                        "type": "uint32"
                    },
                    {
                        "name": "endTime",
                        "type": "uint32"
                    },
                    {
                        "components": [
                            {
                                "name": "bider",
                                "type": "address"
                            },
                            {
                                "name": "value",
                                "type": "uint128"
                            }
                        ],
                        "name": "curBid",
                        "type": "tuple"
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
                "name": "AUC_BS_nifi_auc_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "bidValue",
                        "type": "uint128"
                    },
                    {
                        "name": "bidCreator",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "AUC_SC_nifi_auc_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "finalBidValue",
                        "type": "uint128"
                    },
                    {
                        "name": "bidCreator",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "AUC_EX_nifi_auc_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    }
                ],
                "outputs": []
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "d1e878a16ac2d0036b43badb0bbeef0f4035c5ab31e03b2c03e31a1b4c0d79a8",
};
export default DirectAuctionContract;
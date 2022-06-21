const DirectAuctionContract = {
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
                        "name": "issuer",
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
                        "name": "bidStep",
                        "type": "uint128"
                    },
                    {
                        "name": "minBidSubmissionFee",
                        "type": "uint128"
                    },
                    {
                        "name": "auctionIncomePercent",
                        "type": "uint32"
                    },
                    {
                        "name": "bidCost",
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
                        "name": "showcasePercent",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "onReceiveTradeInfoForCreation",
                "inputs": [
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "value1",
                        "type": "address"
                    },
                    {
                        "name": "value2",
                        "type": "uint32"
                    },
                    {
                        "name": "value3",
                        "type": "address"
                    },
                    {
                        "name": "value4",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "bid",
                "inputs": [
                    {
                        "name": "price",
                        "type": "uint128"
                    }
                ],
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
                        "name": "token",
                        "type": "address"
                    },
                    {
                        "name": "startBid",
                        "type": "uint128"
                    },
                    {
                        "name": "bidStep",
                        "type": "uint128"
                    },
                    {
                        "name": "auctionIncomePercent",
                        "type": "uint32"
                    },
                    {
                        "name": "minBidSubmissionFee",
                        "type": "uint128"
                    },
                    {
                        "name": "bidCost",
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
                                "name": "bidder",
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
                "name": "_issuer",
                "type": "address"
            },
            {
                "name": "_token",
                "type": "address"
            },
            {
                "name": "_startTime",
                "type": "uint32"
            },
            {
                "name": "_endTime",
                "type": "uint32"
            },
            {
                "name": "_askFinish",
                "type": "uint32"
            },
            {
                "name": "_startBid",
                "type": "uint128"
            },
            {
                "name": "_bidStep",
                "type": "uint128"
            },
            {
                "name": "_minBidSubmissionFee",
                "type": "uint128"
            },
            {
                "name": "_auctionIncomePercent",
                "type": "uint32"
            },
            {
                "name": "_bidCost",
                "type": "uint128"
            },
            {
                "components": [
                    {
                        "name": "bidder",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    }
                ],
                "name": "_curBid",
                "type": "tuple"
            },
            {
                "name": "_showcasePercent",
                "type": "uint32"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "49b3e3788c82a68ca9ecf3afcd82024a031247db3f0ba4eb41c182655df36202",
};
module.exports = { DirectAuctionContract };
const DirectAuctionRootContract = {
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
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "minCreationFee",
                        "type": "uint128"
                    },
                    {
                        "name": "auctionIncomePercent",
                        "type": "uint32"
                    },
                    {
                        "name": "creationTopup",
                        "type": "uint128"
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
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "symbol",
                        "type": "string"
                    },
                    {
                        "name": "tokenCode",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "create",
                "inputs": [
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
                "outputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "receiveTokenAddress",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    },
                    {
                        "name": "id",
                        "type": "uint64"
                    }
                ],
                "outputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getTokenAddress",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    }
                ],
                "outputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getAuctionParameters",
                "inputs": [],
                "outputs": [
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
                    }
                ]
            },
            {
                "name": "setAuctionParameters",
                "inputs": [
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
                    }
                ],
                "outputs": []
            },
            {
                "name": "withdraw",
                "inputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    },
                    {
                        "name": "bounce",
                        "type": "bool"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setCreationParameters",
                "inputs": [
                    {
                        "name": "minCreationFee",
                        "type": "uint128"
                    },
                    {
                        "name": "creationTopup",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "receiveCreationParameters",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "minCreationFee",
                        "type": "uint128"
                    },
                    {
                        "name": "creationTopup",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "getCreationParameters",
                "inputs": [],
                "outputs": [
                    {
                        "name": "minCreationFee",
                        "type": "uint128"
                    },
                    {
                        "name": "creationTopup",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "changeManager",
                "inputs": [
                    {
                        "name": "manager",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "receiveManager",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "manager",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getManager",
                "inputs": [],
                "outputs": [
                    {
                        "name": "manager",
                        "type": "address"
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
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "symbol",
                        "type": "string"
                    },
                    {
                        "name": "totalSupply",
                        "type": "uint64"
                    },
                    {
                        "name": "publicKey",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "symbol",
                        "type": "string"
                    },
                    {
                        "name": "totalSupply",
                        "type": "uint64"
                    },
                    {
                        "name": "publicKey",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "getTokenCode",
                "inputs": [],
                "outputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ]
            }
        ],
        "data": [],
        "events": [
            {
                "name": "AUC_CT_nifi_auc_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "tokenAddress",
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
                        "name": "startTime",
                        "type": "uint32"
                    },
                    {
                        "name": "endTime",
                        "type": "uint32"
                    },
                    {
                        "name": "issuer",
                        "type": "address"
                    },
                    {
                        "name": "showcasePercent",
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
                "name": "_name",
                "type": "string"
            },
            {
                "name": "_symbol",
                "type": "string"
            },
            {
                "name": "_tokenCode",
                "type": "cell"
            },
            {
                "name": "_totalSupply",
                "type": "uint64"
            },
            {
                "name": "_manager",
                "type": "address"
            },
            {
                "name": "_minCreationFee",
                "type": "uint128"
            },
            {
                "name": "_creationTopup",
                "type": "uint128"
            },
            {
                "name": "_auctionIncomePercent",
                "type": "uint32"
            },
            {
                "name": "_minBidSubmissionFee",
                "type": "uint128"
            },
            {
                "name": "_bidCost",
                "type": "uint128"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "3e414045543e2e701bd1632c673a26a0a4b619c5ea713f5213a4cb02d8731564",
};
module.exports = { DirectAuctionRootContract };
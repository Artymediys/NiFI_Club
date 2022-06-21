const BidRootContract = {
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
                        "name": "minAcceptFee",
                        "type": "uint128"
                    },
                    {
                        "name": "creationTopup",
                        "type": "uint128"
                    },
                    {
                        "name": "bidIncomePercent",
                        "type": "uint32"
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
                        "name": "price",
                        "type": "uint128"
                    },
                    {
                        "name": "endTime",
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
                "name": "getBidParameters",
                "inputs": [],
                "outputs": [
                    {
                        "name": "minAcceptFee",
                        "type": "uint128"
                    },
                    {
                        "name": "bidIncomePercent",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "setBidParameters",
                "inputs": [
                    {
                        "name": "minAcceptFee",
                        "type": "uint128"
                    },
                    {
                        "name": "bidIncomePercent",
                        "type": "uint32"
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
                "name": "BID_CT_nifi_bid_1",
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
                        "name": "bidValue",
                        "type": "uint128"
                    },
                    {
                        "name": "endTime",
                        "type": "uint32"
                    },
                    {
                        "name": "bidder",
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
                "name": "_minAcceptFee",
                "type": "uint128"
            },
            {
                "name": "_bidIncomePercent",
                "type": "uint32"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "0fc5b3e9d487cfd57d3d391385c84160db800ad4f25bcf30fe66df8d6170152b",
};
module.exports = { BidRootContract };
const AskContract = {
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
                        "name": "price",
                        "type": "uint128"
                    },
                    {
                        "name": "endTime",
                        "type": "uint32"
                    },
                    {
                        "name": "minAcceptFee",
                        "type": "uint128"
                    },
                    {
                        "name": "showcasePercent",
                        "type": "uint32"
                    },
                    {
                        "name": "askIncomePercent",
                        "type": "uint128"
                    }
                ],
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
                "name": "acceptAsk",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "cancel",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "expired",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "changePrice",
                "inputs": [
                    {
                        "name": "newPrice",
                        "type": "uint128"
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
                        "name": "issuer",
                        "type": "address"
                    },
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
                    },
                    {
                        "name": "showcasePercent",
                        "type": "uint32"
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
                "name": "ASK_AC_nifi_ask_1",
                "inputs": [
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
                "name": "ASK_CN_nifi_ask_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    }
                ],
                "outputs": []
            },
            {
                "name": "ASK_EX_nifi_ask_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    }
                ],
                "outputs": []
            },
            {
                "name": "ASK_PC_nifi_ask_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "newPrice",
                        "type": "uint128"
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
                "name": "_askIncomePercent",
                "type": "uint128"
            },
            {
                "name": "_issuer",
                "type": "address"
            },
            {
                "name": "_creator",
                "type": "address"
            },
            {
                "name": "_token",
                "type": "address"
            },
            {
                "name": "_minAcceptFee",
                "type": "uint128"
            },
            {
                "name": "_creatorPercent",
                "type": "uint32"
            },
            {
                "name": "_showcasePercent",
                "type": "uint32"
            },
            {
                "name": "_endTime",
                "type": "uint32"
            },
            {
                "name": "_price",
                "type": "uint128"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "4170d544f3d75940e8d87f5c141d2a99301c225c1493327b6a13de6177e8a0c9",
};
module.exports = { AskContract };
const AskContract = {
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
                        "name": "price",
                        "type": "uint128"
                    },
                    {
                        "name": "endTime",
                        "type": "uint32"
                    },
                    {
                        "name": "showcaseFee",
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
                        "name": "creator",
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
                        "name": "showcaseFee",
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
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "cd96c74336b477c08abc0fdb088ccf6bcf1753b737e4293529ed845bc0261fcb",
};
export default AskContract;
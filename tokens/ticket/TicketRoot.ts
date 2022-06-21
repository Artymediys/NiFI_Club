const TicketRootContract = {
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
                        "name": "manager",
                        "type": "address"
                    },
                    {
                        "name": "creationMinValue",
                        "type": "uint128"
                    },
                    {
                        "name": "creationFee",
                        "type": "uint128"
                    },
                    {
                        "name": "limit",
                        "type": "uint128"
                    },
                    {
                        "name": "freezingTimeStart",
                        "type": "uint32"
                    },
                    {
                        "name": "freezingTimeEnd",
                        "type": "uint32"
                    },
                    {
                        "name": "name",
                        "type": "bytes"
                    },
                    {
                        "name": "symbol",
                        "type": "bytes"
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
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "hash",
                        "type": "uint128"
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
                "name": "tokenChangeOwner",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint128"
                    },
                    {
                        "name": "previousOwner",
                        "type": "address"
                    },
                    {
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "receiveTokenAddress",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    },
                    {
                        "name": "id",
                        "type": "uint128"
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
                "name": "receiveTicketInfo",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "limit",
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
                "name": "getTicketInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "limit",
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
                "name": "getTokenAddress",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint128"
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
                "name": "getTokensIds",
                "inputs": [
                    {
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "ids",
                        "type": "uint128[]"
                    }
                ]
            },
            {
                "name": "getSecretKey",
                "inputs": [],
                "outputs": [
                    {
                        "name": "key",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "getHash",
                "inputs": [
                    {
                        "name": "key",
                        "type": "uint128"
                    }
                ],
                "outputs": [
                    {
                        "name": "hash",
                        "type": "uint128"
                    }
                ]
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
                "name": "setCreationFee",
                "inputs": [
                    {
                        "name": "minValue",
                        "type": "uint128"
                    },
                    {
                        "name": "fee",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "receiveCreationFee",
                "inputs": [
                    {
                        "name": "_answer_id",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "minValue",
                        "type": "uint128"
                    },
                    {
                        "name": "fee",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "getCreationFee",
                "inputs": [],
                "outputs": [
                    {
                        "name": "minValue",
                        "type": "uint128"
                    },
                    {
                        "name": "fee",
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
                        "name": "_answer_id",
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
                        "name": "_answer_id",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "name",
                        "type": "bytes"
                    },
                    {
                        "name": "symbol",
                        "type": "bytes"
                    },
                    {
                        "name": "totalSupply",
                        "type": "uint128"
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
                        "type": "bytes"
                    },
                    {
                        "name": "symbol",
                        "type": "bytes"
                    },
                    {
                        "name": "totalSupply",
                        "type": "uint128"
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
        "events": []
    },
    tvc: "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",
    code: "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",
    codeHash: "f397acb5fec1a5df6b093f13a75f9dd34d711937c69d58972d17d34ef4425133",
};
export default TicketRootContract;
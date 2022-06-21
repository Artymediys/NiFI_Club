const SealTokenContract = {
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
                        "name": "creatorPercent",
                        "type": "uint32"
                    },
                    {
                        "name": "hash",
                        "type": "uint256"
                    },
                    {
                        "name": "endorseStampCost",
                        "type": "uint128"
                    },
                    {
                        "name": "endorseRootFixIncome",
                        "type": "uint128"
                    }
                ],
                "outputs": []
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
                "name": "receiveArtInfo",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "creator",
                        "type": "address"
                    },
                    {
                        "name": "creatorPercent",
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
                        "name": "creatorPercent",
                        "type": "uint32"
                    },
                    {
                        "name": "hash",
                        "type": "uint256"
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
                    }
                ]
            },
            {
                "name": "receiveTradeInfo",
                "inputs": [
                    {
                        "name": "answerId",
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
            },
            {
                "name": "endorse",
                "inputs": [
                    {
                        "name": "stamp",
                        "type": "address"
                    },
                    {
                        "name": "place",
                        "type": "uint8"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getParameters",
                "inputs": [],
                "outputs": [
                    {
                        "name": "endorseStampCost",
                        "type": "uint128"
                    },
                    {
                        "name": "endorseRootFixIncome",
                        "type": "uint128"
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
                "name": "TK_CO_nifi_seal_1",
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
                "name": "TK_MG_nifi_seal_1",
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
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_manager",
                "type": "address"
            },
            {
                "name": "_managerUnlockTime",
                "type": "uint32"
            },
            {
                "name": "_creator",
                "type": "address"
            },
            {
                "name": "_creatorPercent",
                "type": "uint32"
            },
            {
                "name": "_hash",
                "type": "uint256"
            },
            {
                "name": "_endorseStampCost",
                "type": "uint128"
            },
            {
                "name": "_endorseRootFixIncome",
                "type": "uint128"
            }
        ]
    },
    tvc: "te6ccgECNAEACFAAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsxBQQzA77tRNDXScMB+GaJ+Gkh2zzTAAGOGoECANcYIPkBAdMAAZTT/wMBkwL4QuL5EPKoldMAAfJ64tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPBoXBgN67UTQ10nDAfhmItDTA/pAMPhpqTgA+ER/b3GCCJiWgG9ybW9zcG90+GTcIccA4wIh1w0f8rwh4wMB2zzyPDAwBgM8IIIQLM0kn7vjAiCCEFasAlK74wIgghBv2nP+u+MCIA8HAzwgghBcxOa2uuMCIIIQbB9PsLrjAiCCEG/ac/664wIMCwgDijD4RvLgTPhCbuMA0x/4RFhvdfhk0ds8JY4rJ9DTAfpAMDHIz4cgznHPC2FeQMjPk79pz/rOVTDIzssfWcjOyx/Nzc3JcC8KCQGQjj/4RCBvEyFvEvhJVQJvEcjPhIDKAM+EQM4B+gL0AHHPC2leQMj4RG8VzwsfzlUwyM7LH1nIzssfzc3NyfhEbxTi+wDjAPIALQEg+ERwb3Jwb3GAQG90+GTbPC4DejD4RvLgTPhCbuMA0ds8I44kJdDTAfpAMDHIz4cgznHPC2FeIMjPk7B9PsLOyx/L/83JcPsAkl8D4uMA8gAvKy0DJjD4RvLgTPhCbuMA0ds8MNs88gAvDSQBKoj4SfhNxwX4I/hOubDy6Gf4AHD4bg4APE1ldGhvZCBmb3IgbG9ja2VkIG1hbmFnZXIgb25seQRQIIIQRWQ8aLrjAiCCEEru55C64wIgghBQVBjguuMCIIIQVqwCUrrjAh0bExADOjD4RvLgTPhCbuMAIZPU0dDe+kDTB9HbPDDbPPIALxEkAeiI+En4TMcF+CP4Tr6w8uhs+FP4UqC1f2im/mABvvLgbyDAASHAAiLABCPACLGxsfLgcPhMAfhL+FJVA3/Iz4WAygDPhEDOAfoCcc8LalUgyM+Q8g+Xgss/ywfOzclw+wD4U/hKyM+FiM4B+gKAa89AyXD7ABIAKk1ldGhvZCBmb3Igb3duZXIgb25seQR6MPhCbuMA+EbycyGT1NHQ3vpA1NHQ+kDTH9TR0PpA0x/T/9N/1NHQ03/RiPhJ+ErHBfLoZYgkgQlhufLoaxcWFRQDeogl+kJvE9cL/8MA8uhqiCj6Qm8T1wv/wwDy6Gr4AFUD+G9VAvhwWPhxVQP4bFUC+G1Y+G4B+HL4c9s88gAnJyQAKFVudmFsaWQgY3JlYXRvciBmZWVzADBNZXRob2QgZm9yIHRoZSByb290IG9ubHkCFu1E0NdJwgGOgOMNGC8DinDtRND0BXEhgED0Do6A33IigED0DpPXCz+RcOKJIHCJcF8w+HP4cvhx+HD4b/hu+G34bPhr+GqAQPQO8r3XC//4YnD4YxkaGgECiRoAQ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABADcjD4RvLgTPhCbuMA0ds8Io4hJNDTAfpAMDHIz4cgzoBiz0BeAc+TK7ueQst/y3/JcPsAkVvi4wDyAC8cLQAI+FL4UwM6MPhG8uBM+EJu4wAhk9TR0N76QNMf0ds8MNs88gAvHiQEuoj4SfhMxwX4I/hOvrD4SfhNxwX4I/hOubCx8uhoiCL6Qm8T1wv/wwDy6GqI+CMiufLoafgAAfhtIPhu+E34S9s8yM+HIM5xzwthVSDIz5FmW4Myyz/Oyx/NyXD7ACgnHyYAIkludmFsaWQgbG9jayB0aW1lBFAgghAUewjIuuMCIIIQFaW1lLrjAiCCECF7Mwi64wIgghAszSSfuuMCLCkjIQNyMPhG8uBM+EJu4wDR2zwijiEk0NMB+kAwMcjPhyDOcc8LYQLIz5KzNJJ+zss/zclw+wCRW+LjAPIALyItAAj4SvhLAzYw+Eby4Ez4Qm7jACGT1NHQ3vpA0ds8MNs88gAvJSQAgvhT+FL4UfhQ+E/4TvhN+Ez4S/hK+EP4QsjL/8s/z4POyz9VcMjOVWDIzssfVUDIzssfy//LfwHIy3/Nzc3Nye1UA5qI+En4TMcF+CP4Tr6w+En4TccF+CP4TrmwsfLoaIgh+kJvE9cL/8MA8uhq+AAg+Gz4S9s8yM+HIM5xzwthWcjPkNrZOcrLP87NyXD7ACgnJgBIjQhYAIjauhi5sHE50bjRASMZ4Ep5srgIiSLgeblpuOIZCokUACpBZGRyZXNzIGNhbid0IGJlIG51bGwASE1ldGhvZCBmb3IgdGhlIG93bmVyIG9yIG1hbmFnZXIgb25seQP2MPhG8uBM+EJu4wDTH/hEWG91+GTR2zwjjiIl0NMB+kAwMcjPhyDOcc8LYV4gyM+SVpbWUs7LH8v/zclwjjb4RCBvEyFvEvhJVQJvEcjPhIDKAM+EQM4B+gL0AHHPC2leIMj4RG8Vzwsfzssfy//NyfhEbxTi+wDjAPIALyotASD4RHBvcnBvcYBAb3T4ZNs8KwAM+E/4UPhRA4ww+Eby4Ez4Qm7jANHbPCWOLSfQ0wH6QDAxyM+HIM5xzwthXkDIz5JR7CMizlUwyM7LH1nIzssfzc3NyXD7AJJfBeLjAPIALy4tACjtRNDT/9M/MfhDWMjL/8s/zsntVAAU+Ez4T/hQ+E34TgCG7UTQ0//TP9MAMfpA0z/U0dD6QNTR0PpA0x/U0dD6QNMf0//Tf9TR0NN/0fhz+HL4cfhw+G/4bvht+Gz4a/hq+GP4YgAK+Eby4EwCCvSkIPShMzIAFHNvbCAwLjU4LjIAAA==",
    code: "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",
    codeHash: "ed9e6fb01389302e021849e6f71b0b08a249aed9932c47827bea7049b932ab37",
};
module.exports = { SealTokenContract };
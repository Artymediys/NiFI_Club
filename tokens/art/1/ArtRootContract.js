const ArtRootContract = {
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
                        "name": "creationTopup",
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
                        "name": "creatorPercent",
                        "type": "uint32"
                    },
                    {
                        "name": "hash",
                        "type": "uint256"
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
                "name": "TK_CT_nifi_art1_1",
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
            }
        ]
    },
    tvc: "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",
    code: "te6ccgECMwEACOMABCSK7VMg4wMgwP/jAiDA/uMC8gswAgEyA8TtRNDXScMB+GaJ+Gkh2zzTAAGOHYECANcYIPkBAdMAAZTT/wMBkwL4QuIg+GX5EPKoldMAAfJ64tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPBsZAwN67UTQ10nDAfhmItDTA/pAMPhpqTgA+ER/b3GCCJiWgG9ybW9zcG90+GTcIccA4wIh1w0f8rwh4wMB2zzyPC8vAwRQIIIQHV6JKLvjAiCCEDeQ/ja74wIgghBmDOkRu+MCIIIQf2Y3SLvjAiAUCAQCKCCCEH6dYxa64wIgghB/ZjdIuuMCBwUD7DD4RvLgTPhCbuMA0x/4RFhvdfhk0ds8Io4fJNDTAfpAMDHIz4cgzoBiz0BeAc+T/ZjdIst/y3/JcI40+EQgbxMhbxL4SVUCbxHIz4SAygDPhEDOAfoC9ABxzwtpAsj4RG8Vzwsfy3/Lf83J+ERvFOL7AOMA8gAuBisBIPhEcG9ycG9xgEBvdPhk2zwfA3Iw+Eby4Ez4Qm7jANM/0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+T+nWMWs7NyXD7AJEw4uMA8gAuLSsEUCCCEFSL8Dy64wIgghBZ4Kb0uuMCIIIQXx6CUbrjAiCCEGYM6RG64wIRDAoJA24w+Eby4Ez4Qm7jANHbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPk5gzpEbOzclw+wCRMOLjAPIALhMrAzow+Eby4Ez4Qm7jACGT1NHQ3tN/03/R2zww2zzyAC4LJAEiiPhJ+E7HBfLr6PgAAfhv+HAnA4ow+Eby4Ez4Qm7jACGV0x/U0dCS0x/i0//R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5NngpvSzs3JcPsAkTDiMNs88gAuDSQC/FMRgQlhufLhFTBopv5g+E++8uEW+E2ktT/4bQH4SXD4SSD4QsjL/3BtgED0Q/gocViAQPQW+E3Iyz9yWIBA9EPI9ADJ+EzIz4SA9AD0AM+BySD5AMjPigBAy//J0FVg+FAoyM+FiM4B+gJzzwtqIds8zM+DVVDIz5A3M8OizhAOAVpVQMjOyx9VIMjOyx/L/83Nzclw+wD4Tds8yM+HIM6CEC9iTzbPC4HLP8lw+wAPAEiNCFgAiNq6GLmwcTnRuNEBIxngSnmyuAiJIuB5uWm44hkKiRQANNDSAAGT0gQx3tIAAZPSATHe9AT0BPQE0V8DA+Iw+Eby4Ez4Qm7jANMf+ERYb3X4ZNHbPCGOHSPQ0wH6QDAxyM+HIM5xzwthAcjPk1IvwPLOzclwjjH4RCBvEyFvEvhJVQJvEcjPhIDKAM+EQM4B+gL0AHHPC2kByPhEbxXPCx/Ozcn4RG8U4vsA4wDyAC4SKwEg+ERwb3Jwb3GAQG90+GTbPBMABPhOBFAgghAhqZ2ouuMCIIIQKlP4o7rjAiCCEDcXk6m64wIgghA3kP42uuMCHhwXFQM8MPhG8uBM+EJu4wAhk9TR0N76QNN/0gDR2zzjAPIALhYrAUSI+En4TscF8uvo+AASyM+FgMoAz4RAzgH6AoBrz0DJcPsAJwSiMPhCbuMA+EbycyGT1NHQ3vpA03/Tf9TU1NGI+EUgbpIwcN74Qrry6GT4AFj4agH4a/hsWIgh+kJvE9cL/8MA8uvp+AD4bvgAAfhv+HDbPPIAGRgmJAAyTWV0aG9kIGZvciB0aGUgb3duZXIgb25seQIW7UTQ10nCAY6A4w0aLgJScO1E0PQFiF8gcIlwIPhw+G/4bvht+Gz4a/hqgED0DvK91wv/+GJw+GMyGwBDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAP6MPhG8uBM+EJu4wDTH/hEWG91+GTR2zwkjiMm0NMB+kAwMcjPhyDOcc8LYV4wyM+SqU/ijszMyz/L/83JcI43+EQgbxMhbxL4SVUCbxHIz4SAygDPhEDOAfoC9ABxzwtpXjDI+ERvFc8LH8zMyz/L/83J+ERvFOL7AOMA8gAuHSsBIPhEcG9ycG9xgEBvdPhk2zwiA3Iw+Eby4Ez4Qm7jANHbPCKOISTQ0wH6QDAxyM+HIM6AYs9AXgHPkoamdqLLf8t/yXD7AJFb4uMA8gAuHysACPhP+FAETiCCCtOet7rjAiCCEA51Br+64wIgghAZk6DOuuMCIIIQHV6JKLrjAiooIyEDfDD4RvLgTPhCbuMA0ds8JI4lJtDTAfpAMDHIz4cgznHPC2FeMMjPknV6JKLMzMs/y//NyXD7AJJfBOLjAPIALiIrABD4SvhL+E34QgM2MPhG8uBM+EJu4wAhk9TR0N76QNHbPDDbPPIALiUkAFL4UPhP+E74TfhM+Ev4SvhD+ELIy//LP8+DzMzMyz/OWcjLf8t/zcntVAI4iPhJ+E7HBfLr6Igh+kJvE9cL/8MA8uvp+AD4bicmADpNYW5hZ2VyIGFkZHJlc3MgY2FuJ3QgYmUgbnVsbAA2TWV0aG9kIGZvciB0aGUgbWFuYWdlciBvbmx5A2Yw+Eby4Ez4Qm7jANHbPCGOGyPQ0wH6QDAxyM+HIM6CEI51Br/PC4HMyXD7AJEw4uMA8gAuKSsABPhMA+Yw+Eby4Ez4Qm7jANMf+ERYb3X4ZNM/0ds8IY4dI9DTAfpAMDHIz4cgznHPC2EByM+SC0563s7NyXCOMfhEIG8TIW8S+ElVAm8RyM+EgMoAz4RAzgH6AvQAcc8LaQHI+ERvFc8LH87NyfhEbxTi+wDjAPIALiwrACjtRNDT/9M/MfhDWMjL/8s/zsntVAEg+ERwb3Jwb3GAQG90+GTbPC0AcvhCyMv/cG2AQPRD+ChxWIBA9BYByMs/cliAQPRDyPQAyfhMyM+EgPQA9ADPgcn5AMjPigBAy//J0ABW7UTQ0//TP9MAMdTU1NM/+kDU0dDTf9N/0fhw+G/4bvht+Gz4a/hq+GP4YgAK+Eby4EwCCvSkIPShMjEAFHNvbCAwLjU4LjIAAA==",
    codeHash: "f84908e6bf1337aaa91acfa810576dff894980f855956953a357bb83bec534c3",
};
module.exports = { ArtRootContract };
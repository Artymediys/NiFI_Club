const StampRootContract = {
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
                "name": "getManager",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "changeManager",
                "inputs": [
                    {
                        "name": "newManager",
                        "type": "address"
                    }
                ],
                "outputs": []
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
                "name": "setStampParameters",
                "inputs": [
                    {
                        "name": "minSealFee",
                        "type": "uint128"
                    },
                    {
                        "name": "minSealRxFee",
                        "type": "uint128"
                    },
                    {
                        "name": "requestEndorseFixIncome",
                        "type": "uint128"
                    },
                    {
                        "name": "minForAddFee",
                        "type": "uint128"
                    },
                    {
                        "name": "forAddFixIncome",
                        "type": "uint128"
                    },
                    {
                        "name": "endorseIncomePercent",
                        "type": "uint16"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getStampParameters",
                "inputs": [],
                "outputs": [
                    {
                        "name": "minSealFee",
                        "type": "uint128"
                    },
                    {
                        "name": "minSealRxFee",
                        "type": "uint128"
                    },
                    {
                        "name": "requestEndorseFixIncome",
                        "type": "uint128"
                    },
                    {
                        "name": "minForAddFee",
                        "type": "uint128"
                    },
                    {
                        "name": "forAddFixIncome",
                        "type": "uint128"
                    },
                    {
                        "name": "endorseIncomePercent",
                        "type": "uint16"
                    }
                ]
            }
        ],
        "data": [],
        "events": [
            {
                "name": "TK_CT_nifi_stamp1_1",
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
                "name": "_manager",
                "type": "address"
            },
            {
                "name": "_creationTopup",
                "type": "uint128"
            },
            {
                "name": "_minCreationFee",
                "type": "uint128"
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
                "name": "_minSealFee",
                "type": "uint128"
            },
            {
                "name": "_minSealRxFee",
                "type": "uint128"
            },
            {
                "name": "_requestEndorseFixIncome",
                "type": "uint128"
            },
            {
                "name": "_minForAddFee",
                "type": "uint128"
            },
            {
                "name": "_forAddFixIncome",
                "type": "uint128"
            },
            {
                "name": "_endorseIncomePercent",
                "type": "uint16"
            }
        ]
    },
    tvc: "te6ccgECLAEABw0AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gspBQQrA8TtRNDXScMB+GaJ+Gkh2zzTAAGOHYECANcYIPkBAdMAAZTT/wMBkwL4QuIg+GX5EPKoldMAAfJ64tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPCEfBgNS7UTQ10nDAfhmItDTA/pAMPhpqTgA3CHHAOMCIdcNH/K8IeMDAds88jwoKAYDPCCCEDeQ/ja74wIgghBmDOkRu+MCIIIQfp1jFrvjAhoOBwM8IIIQfJZ2G7rjAiCCEH0Yn7264wIgghB+nWMWuuMCDAoIA3Iw+Eby4Ez4Qm7jANM/0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+T+nWMWs7NyXD7AJEw4uMA8gAnCRwAcvhCyMv/cG2AQPRD+ChxWIBA9BYByMs/cliAQPRDyPQAyfhPyM+EgPQA9ADPgcn5AMjPigBAy//J0ANKMPhG8uBM+EJu4wAhk9TR0N7Tf9N/03/Tf9N/0w/R2zww2zzyACcLJQBO+En4SscF8uBmIIEnELvy4Gf4AFUE+HFVA/hyVQL4c1j4dAH4dfh2A4ow+Eby4Ez4Qm7jANHbPCaOKyjQ0wH6QDAxyM+HIM5xzwthXlDIz5PyWdhuy3/Lf8t/y3/Lf8sPzclw+wCSXwbiMNs88gAnDSUAGPhR+FL4U/hU+FX4VgRQIIIQWeCm9LrjAiCCEF8eglG64wIgghBlPEO7uuMCIIIQZgzpEbrjAhUTEQ8DbjD4RvLgTPhCbuMA0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+TmDOkRs7NyXD7AJEw4uMA8gAnEBwABPhKA3Qw+Eby4Ez4Qm7jANHbPCOOISXQ0wH6QDAxyM+HIM6AYs9AXhHPk5TxDu7MzMt/yXD7AJJfA+LjAPIAJxIcAAz4TfhO+FADOjD4RvLgTPhCbuMAIZPU0dDe03/Tf9HbPDDbPPIAJxQlACr4SfhKxwXy4GZcvPLgZ/gAAfhs+GsDijD4RvLgTPhCbuMAIZXTH9TR0JLTH+LT/9HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPk2eCm9LOzclw+wCRMOIw2zzyACcWJQL8UxGBCWG58uEVMGim/mD4TL7y4Rb4UKS1P/hw+Fb4VfhU+FL4UVUUAfhJcPhJIPhCyMv/cG2AQPRD+ChxWIBA9Bb4UMjLP3JYgED0Q8j0AMn4T8jPhID0APQAz4HJIPkAyM+KAEDL/8nQVbD4Sy3Iz4WIzgH6AnPPC2oh2zzMGRcBjs+DVaDIz5BFLrmSzlWQyM7LH1VwyM7LH8v/y39VMMjLf8t/y3/LD83Nzc3JcPsA+FDbPMjPhyDOghAuYNp4zwuByz/JcPsAGABIjQhYAIjauhi5sHE50bjRASMZ4Ep5srgIiSLgeblpuOIZCokUADTQ0gABk9IEMd7SAAGT0gEx3vQE9AT0BNFfAwRQIIIQGZOgzrrjAiCCECGpnai64wIgghA3F5OpuuMCIIIQN5D+NrrjAiQiHhsDPDD4RvLgTPhCbuMAIZPU0dDe+kDTf9IA0ds84wDyACcdHAAo7UTQ0//TPzH4Q1jIy//LP87J7VQAQvhJ+ErHBfLgZvgAEsjPhYDKAM+EQM4B+gKAa89AyXD7AALYMPhCbuMA+EbycyGT1NHQ3vpA03/Tf9TU1NH4RSBukjBw3vhCuvLgZfgAVQT4alj4bQH4bvhvghAL68IA+HGCEAvrwgD4coIQBfXhAPhzghAL68IA+HSCEAX14QD4dYEB9Ph2Afhs+GvbPPIAHyUCFu1E0NdJwgGOgOMNICcCbnDtRND0BYlwIIhfIHBfYPh2+HX4dPhz+HL4cfhw+G/4bvht+Gz4a/hqgED0DvK91wv/+GJw+GMhKwBDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAN0MPhG8uBM+EJu4wDR2zwijiEk0NMB+kAwMcjPhyDOgGLPQF4Bz5KGpnaiy3/Lf8lw+wCRW+Iw2zzyACcjJQAI+Ez4SwM2MPhG8uBM+EJu4wAhk9TR0N76QNHbPDDbPPIAJyYlAIT4VvhV+FT4U/hS+FH4UPhP+E74TfhM+Ev4SvhD+ELIy//LP8+DzlWwyMt/y3/MzMzLP8t/y3/Lf8t/y3/LD83J7VQAGvhJ+ErHBfLgZvgA+GoAhu1E0NP/0z/TADH6QNTR0NN/03/U1NTTP9N/03/Tf9N/03/TD9H4dvh1+HT4c/hy+HH4cPhv+G74bfhs+Gv4avhj+GIACvhG8uBMAgr0pCD0oSsqABRzb2wgMC41OC4yAAA=",
    code: "te6ccgECKQEABuAABCSK7VMg4wMgwP/jAiDA/uMC8gsmAgEoA8TtRNDXScMB+GaJ+Gkh2zzTAAGOHYECANcYIPkBAdMAAZTT/wMBkwL4QuIg+GX5EPKoldMAAfJ64tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPB4cAwNS7UTQ10nDAfhmItDTA/pAMPhpqTgA3CHHAOMCIdcNH/K8IeMDAds88jwlJQMDPCCCEDeQ/ja74wIgghBmDOkRu+MCIIIQfp1jFrvjAhcLBAM8IIIQfJZ2G7rjAiCCEH0Yn7264wIgghB+nWMWuuMCCQcFA3Iw+Eby4Ez4Qm7jANM/0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+T+nWMWs7NyXD7AJEw4uMA8gAkBhkAcvhCyMv/cG2AQPRD+ChxWIBA9BYByMs/cliAQPRDyPQAyfhPyM+EgPQA9ADPgcn5AMjPigBAy//J0ANKMPhG8uBM+EJu4wAhk9TR0N7Tf9N/03/Tf9N/0w/R2zww2zzyACQIIgBO+En4SscF8uBmIIEnELvy4Gf4AFUE+HFVA/hyVQL4c1j4dAH4dfh2A4ow+Eby4Ez4Qm7jANHbPCaOKyjQ0wH6QDAxyM+HIM5xzwthXlDIz5PyWdhuy3/Lf8t/y3/Lf8sPzclw+wCSXwbiMNs88gAkCiIAGPhR+FL4U/hU+FX4VgRQIIIQWeCm9LrjAiCCEF8eglG64wIgghBlPEO7uuMCIIIQZgzpEbrjAhIQDgwDbjD4RvLgTPhCbuMA0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+TmDOkRs7NyXD7AJEw4uMA8gAkDRkABPhKA3Qw+Eby4Ez4Qm7jANHbPCOOISXQ0wH6QDAxyM+HIM6AYs9AXhHPk5TxDu7MzMt/yXD7AJJfA+LjAPIAJA8ZAAz4TfhO+FADOjD4RvLgTPhCbuMAIZPU0dDe03/Tf9HbPDDbPPIAJBEiACr4SfhKxwXy4GZcvPLgZ/gAAfhs+GsDijD4RvLgTPhCbuMAIZXTH9TR0JLTH+LT/9HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPk2eCm9LOzclw+wCRMOIw2zzyACQTIgL8UxGBCWG58uEVMGim/mD4TL7y4Rb4UKS1P/hw+Fb4VfhU+FL4UVUUAfhJcPhJIPhCyMv/cG2AQPRD+ChxWIBA9Bb4UMjLP3JYgED0Q8j0AMn4T8jPhID0APQAz4HJIPkAyM+KAEDL/8nQVbD4Sy3Iz4WIzgH6AnPPC2oh2zzMFhQBjs+DVaDIz5BFLrmSzlWQyM7LH1VwyM7LH8v/y39VMMjLf8t/y3/LD83Nzc3JcPsA+FDbPMjPhyDOghAuYNp4zwuByz/JcPsAFQBIjQhYAIjauhi5sHE50bjRASMZ4Ep5srgIiSLgeblpuOIZCokUADTQ0gABk9IEMd7SAAGT0gEx3vQE9AT0BNFfAwRQIIIQGZOgzrrjAiCCECGpnai64wIgghA3F5OpuuMCIIIQN5D+NrrjAiEfGxgDPDD4RvLgTPhCbuMAIZPU0dDe+kDTf9IA0ds84wDyACQaGQAo7UTQ0//TPzH4Q1jIy//LP87J7VQAQvhJ+ErHBfLgZvgAEsjPhYDKAM+EQM4B+gKAa89AyXD7AALYMPhCbuMA+EbycyGT1NHQ3vpA03/Tf9TU1NH4RSBukjBw3vhCuvLgZfgAVQT4alj4bQH4bvhvghAL68IA+HGCEAvrwgD4coIQBfXhAPhzghAL68IA+HSCEAX14QD4dYEB9Ph2Afhs+GvbPPIAHCICFu1E0NdJwgGOgOMNHSQCbnDtRND0BYlwIIhfIHBfYPh2+HX4dPhz+HL4cfhw+G/4bvht+Gz4a/hqgED0DvK91wv/+GJw+GMeKABDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAN0MPhG8uBM+EJu4wDR2zwijiEk0NMB+kAwMcjPhyDOgGLPQF4Bz5KGpnaiy3/Lf8lw+wCRW+Iw2zzyACQgIgAI+Ez4SwM2MPhG8uBM+EJu4wAhk9TR0N76QNHbPDDbPPIAJCMiAIT4VvhV+FT4U/hS+FH4UPhP+E74TfhM+Ev4SvhD+ELIy//LP8+DzlWwyMt/y3/MzMzLP8t/y3/Lf8t/y3/LD83J7VQAGvhJ+ErHBfLgZvgA+GoAhu1E0NP/0z/TADH6QNTR0NN/03/U1NTTP9N/03/Tf9N/03/TD9H4dvh1+HT4c/hy+HH4cPhv+G74bfhs+Gv4avhj+GIACvhG8uBMAgr0pCD0oSgnABRzb2wgMC41OC4yAAA=",
    codeHash: "1ce827242f3aa04bdec6af1fd982a63fa9a6abe66f666a67b7f4817ed892aec6",
};
module.exports = { StampRootContract };
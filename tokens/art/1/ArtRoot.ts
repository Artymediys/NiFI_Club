const ArtRootContract = {
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
                        "name": "creatorFees",
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
                        "name": "_answer_id",
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
                        "type": "bytes"
                    },
                    {
                        "name": "symbol",
                        "type": "bytes"
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
        ]
    },
    tvc: "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",
    code: "te6ccgECLQEACaMABCSK7VMg4wMgwP/jAiDA/uMC8gsqAwEsAQACAv6NCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4dgQIA1xgg+QEB0wABlNP/AwGTAvhC4iD4ZfkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8EAQBaiLQ0wP6QDD4aak4APhEf29xggiYloBvcm1vc3BvdPhk3CHHANwh1w0f8rwh3QHbPPhHbvJ8BARQIIIQEQJd8LvjAiCCEDeVwJ674wIgghBmDOkRu+MCIIIQf5ggJ7vjAhsSCAUCKCCCEH6dYxa64wIgghB/mCAnuuMCBwYDajD4Qm7jANHbPCKOISTQ0wH6QDAxyM+HIM6AYs9AXgHPk/5ggJ7Lf8t/yXD7AJFb4uMAf/hnKRonA2ow+EJu4wDTP9HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPk/p1jFrOzclw+wCRMOLjAH/4ZykoJwRQIIIQO/Iaw7rjAiCCEEHmdU+64wIgghBUi/A8uuMCIIIQZgzpEbrjAg0MCgkDZjD4Qm7jANHbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPk5gzpEbOzclw+wCRMOLjAH/4ZykLJwPOMPhCbuMA0x/4RFhvdfhk0Y0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhEcG9ycG9xgEBvdPhk2zwxIY4fI9DTAfpAMDHIz4cgznHPC2EByM+TUi/A8s7NyXD7ACkLJgAE+E4DYjD4Qm7jANcNf5XU0dDTf9/XDX+V1NHQ03/f0Yj4SfhOxwXy6+j4AAH4b/hw2zx/+GcpFycE/DD4Qm7jAPhG8nN/+Gb6QZXU0dD6QN/XDX+V1NHQ03/f1w1/ldTR0NN/3yDXSsABk9TR0N7UINdKwAGT1NHQ3tTU0V8yiPhFIG6SMHDe+EK68uhk+AAi+GoB+Gv4bDBTVYgh+kJvE9cL/8MA8uvp+AAw+G5fJPgAAfhv+HBfBhAPFg4BCts8f/hnJwAyTWV0aG9kIGZvciB0aGUgb3duZXIgb25seQIW7UTQ10nCAYqOgOIpEQOecO1E0PQFiPhqiPhriPhscPhtjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+G5w+G9w+HCAQPQO8r3XC//4YnD4Y3D4ZiwsLARQIIIQERo7j7rjAiCCEBmToM664wIgghA3kP42uuMCIIIQN5XAnrrjAhgVFBMDeDD4Qm7jANHbPCSOJybQ0wH6QDAxyM+HIM5xzwthXiFVMMjPkt5XAnrMzMs/y//NyXD7AJJfBOLjAH/4ZykeJwOeMPhCbuMA+kGV1NHQ+kDf1w1/ldTR0NN/39cMAJXU0dDSAN/RiPhJ+E7HBfLr6PgAVHEgyM+FgMoAc89AzgH6AoBrz0DJcPsAXwPjAH/4ZykXJwRmMPhCbuMA+kGV1NHQ+kDf0Yj4SfhOxwXy6+ggiCH6Qm8T1wv/wwDy6+n4ADD4bts8f/hnKRcWJwA6TWFuYWdlciBhZGRyZXNzIGNhbid0IGJlIG51bGwANk1ldGhvZCBmb3IgdGhlIG1hbmFnZXIgb25seQOQMPhCbuMA0x/4RFhvdfhk0XBw+ERwb3Jwb3GAQG90+GTbPGwiIo4hJNDTAfpAMDHIz4cgzoBiz0BeAc+SRGjuPst/y3/JcPsAKRoZAXyONvhEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAcc8LaQLI+ERvFc8LH8t/y3/NyfhEbxT7AOLjAH/4ZycACPhP+FAETiCCCtOet7rjAiCCEApdI0u64wIgghAOdQa/uuMCIIIQEQJd8LrjAiUhHxwERDD4Qm7jANMf+ERYb3X4ZNGIiHBw+ERwb3Jwb3GAQG90+GQpLCwdAuLbPGxEJI4nJtDTAfpAMDHIz4cgznHPC2FeIVUwyM+SRAl3wszMyz/L/83JcPsAjjv4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AHHPC2leIVUwyPhEbxXPCx/MzMs/y//NyfhEbxT7AOLjAH/4Zx4nAhaIiFv4SvhL+E34QiwsA3Yw+EJu4wDR2zwhjicj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAI51Br+M8WzMlw+wCRMOLjAH/4ZykgJwEIiDD4TCwC/DD4Qm7jAPpBldTR0PpA3/pBldTR0PpA39cNH5XU0dDTH9/6QZXU0dD6QN/XDR+V1NHQ0x/f1w3/ldTR0NP/39GNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARTIoEJYbny4RVopv5g+E++8uEWaKb+YPhQoSkiAf61f/hNpLU/+G1Uc0VUeatt+ELIy/9wWIBA9EP4KHFYgED0FvhNyMs/cliAQPRDyPQAyfhMyM+EgPQA9ADPgckg+QDIz4oAQMv/ydBVYF8oyM+FiM4B+gKL0AAAAAAAAAAAAAAAAAfPFszPg1VQyM+QNzPDos5VQMjOyx9VIMjOIwK6yx/L/83Nzclw+wAz+E3bPMjPhyDOjQQAAAAAAAAAAAAAAAAC9iTzaM8Wyz/JcPsAW2xhIY4fI9DTAfpAMDHIz4cgznHPC2EByM+SKXSNLs7NyXD7AJEw4ts8f/hnJCcASI0IWAAg2roYubBxOdG40QEjGeBKebK4CIki4Hm5abjiGQqI/APWMPhCbuMA0x/4RFhvdfhk0z/RjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+ERwb3Jwb3GAQG90+GQh2zwxMSGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPkgtOet7Ozclw+wApKCYBdo4z+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ABxzwtpAcj4RG8Vzwsfzs3J+ERvFPsA4uMAf/hnJwBW+FD4T/hO+E34TPhL+Er4RvhD+ELIy//LP8oAzMzMyz/OWcjLf8t/zcntVADIjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEbfhCyMv/cFiAQPRD+ChxWIBA9BYiyMs/cliAQPRDyPQAyfhMyM+EgPQA9ADPgckg+QDIz4oAQMv/ydBsEgEwMQBY7UTQ0//TP9IA1NTU0z/6QNTR0NN/03/R+HD4b/hu+G34bPhr+Gr4Zvhj+GICCvSkIPShLCsAFHNvbCAwLjQ3LjAAAA==",
    codeHash: "80ce1c04cb6dd46e1309503d0f732502fe5900e9271a401e2b90c5092d6ec21d",
};
export default ArtRootContract;
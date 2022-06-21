const BidContract = {
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
                        "name": "bidder",
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
                        "name": "minAcceptFee",
                        "type": "uint128"
                    },
                    {
                        "name": "bidIncomePercent",
                        "type": "uint128"
                    },
                    {
                        "name": "endTime",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "acceptBid",
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
                "name": "finish",
                "inputs": [],
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
                        "name": "bidder",
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
                "name": "BID_AC_nifi_bid_1",
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint64"
                    }
                ],
                "outputs": []
            },
            {
                "name": "BID_CL_nifi_bid_1",
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
                "name": "_bidder",
                "type": "address"
            },
            {
                "name": "_token",
                "type": "address"
            },
            {
                "name": "_endTime",
                "type": "uint32"
            },
            {
                "name": "_price",
                "type": "uint128"
            },
            {
                "name": "_minAcceptFee",
                "type": "uint128"
            },
            {
                "name": "_bidIncomePercent",
                "type": "uint128"
            }
        ]
    },
    tvc: "te6ccgECJgEABZ0AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsjBQQlA77tRNDXScMB+GaJ+Gkh2zzTAAGOGoECANcYIPkBAdMAAZTT/wMBkwL4QuL5EPKoldMAAfJ64tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPBgVBgNS7UTQ10nDAfhmItDTA/pAMPhpqTgA3CHHAOMCIdcNH/K8IeMDAds88jwiIgYCKCCCEFAdUYq74wIgghBamGAkuuMCCQcDkjD4RvLgTPhCbuMA0ds8Jo4wKNDTAfpAMDHIz4cgznHPC2FeUMjPk2phgJLOyz9VMMjOVSDIzst/yx/Nzc3JcPsAkl8G4uMA8gAhCA4AGPhK+Ev4TPhN+E/4TgRQIIIQGeopRLrjAiCCEDBz6Fu64wIgghBGWI5GuuMCIIIQUB1RirrjAhkTDQoDJjD4RvLgTPhCbuMA0ds8MNs88gAhCxoCnIj4I/hOgQOEoLUfvvLoaPgA+EvbPMjPhyDOghA+f0BwzwuByz/JcPsA+E/4TMjPhYjOAfoCgGvPQMlx+wD4SsjPhQjOgG/PQMmBAKD7AAwdACBCaWQgbm90IGZpbmlzaGVkAyQw+Eby4Ez4Qm7jANHbPOMA8gAhDw4AKO1E0NP/0z8x+ENYyMv/yz/Oye1UA3qIaKb+YMMA8uhmiPgj+E658uhniGim/mD4UL7y6Gn4TXDIz4WAygDPhEDOgjBv2nP+GeopRM8LrsmAQPsAEhEQACBOb3QgZW5vdWdoIG1vbmV5AChCaWQgYWxyZWFkeSBmaW5pc2hlZAA0UmVjZWl2ZSBvbmx5IGlubmVyIG1lc3NhZ2UDiDD4Qm7jAPhG8nMhk9TR0N76QNTR0PpA03/Tf9N/0x/RiPhJ+ErHBfLoZPgAVQT4bFUD+G1VAvhvWPhwAfhx+G7bPPIAFRQaADBNZXRob2QgZm9yIHRoZSByb290IG9ubHkCFu1E0NdJwgGOgOMNFiECfnDtRND0BXEhgED0Do6A33IigED0DpPXCz+RcOKJIHBfMPhx+HD4b/hu+G34bPhr+GqAQPQO8r3XC//4YnD4YxcYAQKJGABDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEANSMPhG8uBM+EJu4wAhk9TR0N76QNTR0PpA0x/U0dD6QNMf0ds8MNs88gAhGxoAZvhR+FD4T/hO+E34TPhL+Er4Q/hCyMv/yz/Pg87LP1VQyM5VQMjOyx/Lf8t/y3/NzcntVAT8iPhJ+E3HBfLoZYhY+CjHBfLoaogB+E6BA4SgtR+88uhrcCHCAI4j+E8igScQqYS1fzEgwgCOElMCyM+FiM4B+gKAa89AyXH7AN7e+E3Iz4WIzoJ4HMS0AAAAAAAAAAAAAAAAAAHPC4b4TMjPkIXszCLOzclw+wD4TcjPhYjOIB8eHAHcgpgcxLQAAAAAAAAAAAAAAAAAAFzE5rbPC6bJcPsA+E/4UYEnEKmEtX/4T1mgtX+htX9VAsjPhYjOAfoCgGvPQMlx+wBb+EvbPMjPhyDOghAVv6MBzwuByz/JcPsA+ErIz4UIzoBvz0DJgQCg+wAdAEiNCFgAiNq6GLmwcTnRuNEBIxngSnmyuAiJIuB5uWm44hkKiRQAMldyb25nIG1hbmFnZXIgdW5sb2NrIHRpbWUAGldyb25nIG1hbmFnZXIAMk1ldGhvZCBmb3IgdGhlIHRva2VuIG9ubHkAau1E0NP/0z/TADH6QNM/1NHQ+kDU0dD6QNMf03/Tf9N/0fhx+HD4b/hu+G34bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KElJAAUc29sIDAuNTguMgAA",
    code: "te6ccgECIwEABXAABCSK7VMg4wMgwP/jAiDA/uMC8gsgAgEiA77tRNDXScMB+GaJ+Gkh2zzTAAGOGoECANcYIPkBAdMAAZTT/wMBkwL4QuL5EPKoldMAAfJ64tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zzyPBUSAwNS7UTQ10nDAfhmItDTA/pAMPhpqTgA3CHHAOMCIdcNH/K8IeMDAds88jwfHwMCKCCCEFAdUYq74wIgghBamGAkuuMCBgQDkjD4RvLgTPhCbuMA0ds8Jo4wKNDTAfpAMDHIz4cgznHPC2FeUMjPk2phgJLOyz9VMMjOVSDIzst/yx/Nzc3JcPsAkl8G4uMA8gAeBQsAGPhK+Ev4TPhN+E/4TgRQIIIQGeopRLrjAiCCEDBz6Fu64wIgghBGWI5GuuMCIIIQUB1RirrjAhYQCgcDJjD4RvLgTPhCbuMA0ds8MNs88gAeCBcCnIj4I/hOgQOEoLUfvvLoaPgA+EvbPMjPhyDOghA+f0BwzwuByz/JcPsA+E/4TMjPhYjOAfoCgGvPQMlx+wD4SsjPhQjOgG/PQMmBAKD7AAkaACBCaWQgbm90IGZpbmlzaGVkAyQw+Eby4Ez4Qm7jANHbPOMA8gAeDAsAKO1E0NP/0z8x+ENYyMv/yz/Oye1UA3qIaKb+YMMA8uhmiPgj+E658uhniGim/mD4UL7y6Gn4TXDIz4WAygDPhEDOgjBv2nP+GeopRM8LrsmAQPsADw4NACBOb3QgZW5vdWdoIG1vbmV5AChCaWQgYWxyZWFkeSBmaW5pc2hlZAA0UmVjZWl2ZSBvbmx5IGlubmVyIG1lc3NhZ2UDiDD4Qm7jAPhG8nMhk9TR0N76QNTR0PpA03/Tf9N/0x/RiPhJ+ErHBfLoZPgAVQT4bFUD+G1VAvhvWPhwAfhx+G7bPPIAEhEXADBNZXRob2QgZm9yIHRoZSByb290IG9ubHkCFu1E0NdJwgGOgOMNEx4CfnDtRND0BXEhgED0Do6A33IigED0DpPXCz+RcOKJIHBfMPhx+HD4b/hu+G34bPhr+GqAQPQO8r3XC//4YnD4YxQVAQKJFQBDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEANSMPhG8uBM+EJu4wAhk9TR0N76QNTR0PpA0x/U0dD6QNMf0ds8MNs88gAeGBcAZvhR+FD4T/hO+E34TPhL+Er4Q/hCyMv/yz/Pg87LP1VQyM5VQMjOyx/Lf8t/y3/NzcntVAT8iPhJ+E3HBfLoZYhY+CjHBfLoaogB+E6BA4SgtR+88uhrcCHCAI4j+E8igScQqYS1fzEgwgCOElMCyM+FiM4B+gKAa89AyXH7AN7e+E3Iz4WIzoJ4HMS0AAAAAAAAAAAAAAAAAAHPC4b4TMjPkIXszCLOzclw+wD4TcjPhYjOHRwbGQHcgpgcxLQAAAAAAAAAAAAAAAAAAFzE5rbPC6bJcPsA+E/4UYEnEKmEtX/4T1mgtX+htX9VAsjPhYjOAfoCgGvPQMlx+wBb+EvbPMjPhyDOghAVv6MBzwuByz/JcPsA+ErIz4UIzoBvz0DJgQCg+wAaAEiNCFgAiNq6GLmwcTnRuNEBIxngSnmyuAiJIuB5uWm44hkKiRQAMldyb25nIG1hbmFnZXIgdW5sb2NrIHRpbWUAGldyb25nIG1hbmFnZXIAMk1ldGhvZCBmb3IgdGhlIHRva2VuIG9ubHkAau1E0NP/0z/TADH6QNM/1NHQ+kDU0dD6QNMf03/Tf9N/0fhx+HD4b/hu+G34bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEiIQAUc29sIDAuNTguMgAA",
    codeHash: "6ed830bca986deb62af98f31f847ce1e1a0639d963633b4c037da9ab9caf5af1",
};
module.exports = { BidContract };
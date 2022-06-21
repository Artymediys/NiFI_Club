module.exports = {
    config: {
        endpoints: ["https://main.ton.dev"],
        //endpoints: ["https://net.ton.dev"],
        //endpoints: ["http://localhost"],
        msgiManager: "0:7d28795845160c7322eb9e9ea9b88c700d42bad744148b15f80978f85c47cbdd",
        swiftAddr:":111b574317360e273a371a2024633c094f36570111245c0f372d371c43215122",
        art: {
            minCreationFee: 300_000_000,
            creationTopup: 200_000_000
        },
        art2: {
            minCreationFee: 300_000_000,
            creationTopup: 200_000_000,
            mintTopup: 200_000_000,
            minMintFee: 300_000_000
        }
    }
}

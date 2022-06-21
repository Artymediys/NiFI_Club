module.exports = {
    config: {
        endpoints: ["https://main.ton.dev"],
        //endpoints: ["https://net.ton.dev"],
        //endpoints: ["http://localhost"],
        msgiManager: "0:7d28795845160c7322eb9e9ea9b88c700d42bad744148b15f80978f85c47cbdd",
        swiftAddr:":111b574317360e273a371a2024633c094f36570111245c0f372d371c43215122",
        minCreationFee: 350000000,
        creationTopup: 100000000,
        stampRoot: {
            minCreationFee: 400000000,
            creationTopup: 300000000,
            name: 'Stamp',
            symbol: 'STP'
        },
        sealRoot: {
            minCreationFee: 300000000,
            creationTopup: 200000000,
             name: 'Seal',
            symbol: 'SEA'
        },
        foreverRoot: {
            minCreationFee: 400000000,
            creationTopup: 300000000,
             name: 'Forever',
            symbol: 'FOR'
        },
    }
}

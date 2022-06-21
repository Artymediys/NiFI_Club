const {TonClient} = require("@eversdk/core")
const {libNode} = require("@eversdk/lib-node")

const {ArtRootContract} = require ('../../art/1/ArtRootContract')
const {ArtTokenContract} = require ('../../art/1/ArtTokenContract')
const {Art2RootContract} = require ('../../art2/1/Art2RootContract')
const {Art2SeriesContract} = require ('../../art2/1/Art2SeriesContract')
const {Art2TokenContract} = require ('../../art2/1/Art2TokenContract')
const {transfer} = require('../utils/transfer')
const {config} = require('../config')
const fs = require('fs');

TonClient.useBinaryLibrary(libNode)

async function deployArtRoot (client,rootKeys) {

    const rootAbi = {
        type: 'Contract',
        value: ArtRootContract.abi
    }
    const deployOptions = {
        abi: rootAbi,
        deploy_set: {
            tvc: ArtRootContract.tvc,
            initial_data: {}
        },
        call_set: {
            function_name: 'constructor',
            input: {
                manager: config.msgiManager,
                minCreationFee: config.art.minCreationFee,
                creationTopup : config.art.creationTopup,
                name : "ArtRoot",
                symbol: "ART",
                tokenCode: ArtTokenContract.code,
            }
        },
        signer: {
            type: 'Keys',
            keys: rootKeys
        }
    }

    const { address } = await client.abi.encode_message(deployOptions);
    console.log(`Future address of the contract will be: ${address}`);
    await transfer(client,address,100_000_000,"");

    await client.processing.process_message({
        send_events: false,
        message_encode_params: deployOptions
      });

    console.log(`ArtRoot contract was deployed at address: ${address}`);
    return address;
}

async function deployArt2Root (client,rootKeys) {

    const rootAbi = {
        type: 'Contract',
        value: Art2RootContract.abi
    }
    const deployOptions = {
        abi: rootAbi,
        deploy_set: {
            tvc: Art2RootContract.tvc,
            initial_data: {}
        },
        call_set: {
            function_name: 'constructor',
            input: {
                manager: config.msgiManager,
                minCreationFee: config.art2.minCreationFee,
                minMintFee: config.art2.minMintFee,
                creationTopup : config.art2.creationTopup,
                mintTopup : config.art2.mintTopup,
                name : "Art2Root",
                symbol: "ART2",
                seriesCode: Art2SeriesContract.code,
                tokenCode: Art2TokenContract.code
            }
        },
        signer: {
            type: 'Keys',
            keys: rootKeys
        }
    }

    const { address } = await client.abi.encode_message(deployOptions);
    console.log(`Future address of the contract will be: ${address}`);
    await transfer(client,address,100_000_000,"");

    await client.processing.process_message({
        send_events: false,
        message_encode_params: deployOptions
      });

    console.log(`Art2Root contract was deployed at address: ${address}`);
    return address;
}

(async () => {

    const client = new TonClient({
        network: {
            // Blockchain node URL
            endpoints: config.endpoints
        }
    });
    try {
        const rootKeys = await client.crypto.generate_random_sign_keys();
        /*const rootKeys = {public:"a32b6119b77e79ee370e173a3383e517d2d235c796bd38198af22b6673300cb8",
        secret:"5707985ddf6b95a2a11d8503dbc52fee5be330dbc0020023a1180f08aaaef843"}*/
        console.log("keys: ",JSON.stringify(rootKeys));

        const artRoot = await deployArtRoot(client,rootKeys)
        const art2Root = await deployArt2Root(client,rootKeys)
        console.log(`artRoot: ${artRoot}`);
        console.log(`art2Root: ${art2Root}`);

    } catch (err) {
        console.error(err)
    }
    client.close()
})()

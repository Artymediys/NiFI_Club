const {TonClient} = require("@eversdk/core")
const {libNode} = require("@eversdk/lib-node")
const {ForeverRootContract} = require ('../../forever/1/ForeverRootContract')
const {ForeverTokenContract} = require ('../../forever/1/ForeverTokenContract')
const {transfer} = require('../utils/transfer')
const {config} = require('../config')
const fs = require('fs');

TonClient.useBinaryLibrary(libNode)


async function deployForeverRoot (client,rootKeys) {

    const rootAbi = {
        type: 'Contract',
        value: ForeverRootContract.abi
    }
    const deployOptions = {
        abi: rootAbi,
        deploy_set: {
            tvc: ForeverRootContract.tvc,
            initial_data: {}
        },
        call_set: {
            function_name: 'constructor',
            input: {
                manager: config.msgiManager,
                minCreationFee: config.foreverRoot.minCreationFee,
                creationTopup: config.foreverRoot.creationTopup,
                name : config.foreverRoot.name,
                symbol: config.foreverRoot.symbol,
                tokenCode: ForeverTokenContract.code,
            }
        },
        signer: {
            type: 'Keys',
            keys: rootKeys
        }
    }

    const { address } = await client.abi.encode_message(deployOptions);
    console.log(`Future address of the contract will be: ${address}`);
    await transfer(client,address,100000000,"");

    await client.processing.process_message({
        send_events: false,
        message_encode_params: deployOptions
      });

    console.log(`ForeverRoot contract was deployed at address: ${address}`);
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

        //generated in seal deploy
        let root_json = JSON.parse(fs.readFileSync("../root.json").toString());

        const foreverRoot = await deployForeverRoot(client,root_json.keys)
        root_json.forever = foreverRoot;

        fs.writeFileSync("../root.json",JSON.stringify(root_json),{encoding:'utf8',flag:'w'})

    } catch (err) {
        console.error(err)
    }
    client.close()
})()

const {TonClient} = require("@eversdk/core")
const {libNode} = require("@eversdk/lib-node")

const {SealRootContract} = require ('../../seal/1/SealRootContract')
const {SealTokenContract} = require ('../../seal/1/SealTokenContract')
const {transfer} = require('../utils/transfer')
const {config} = require('../config')
const fs = require('fs');

TonClient.useBinaryLibrary(libNode)

async function deploySealRoot (client,rootKeys) {

    const rootAbi = {
        type: 'Contract',
        value: SealRootContract.abi
    }
    const deployOptions = {
        abi: rootAbi,
        deploy_set: {
            tvc: SealRootContract.tvc,
            initial_data: {}
        },
        call_set: {
            function_name: 'constructor',
            input: {
                manager: config.msgiManager,
                minCreationFee: config.sealRoot.minCreationFee,
                creationTopup: config.sealRoot.creationTopup,
                name : config.sealRoot.name,
                symbol: config.sealRoot.symbol,
                tokenCode: SealTokenContract.code,
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

    console.log(`SealRoot contract was deployed at address: ${address}`);
    return address;
}

async function writeSealContractInfo (sealRoot, pubkey, sealTockenCodeHash, sealTokenCodeDepth) {
    let res = sealRoot.substring(2);
    const path = "../../stamp/1/SealContractInfoLib.sol";
    const content= `pragma ton-solidity >=0.47.0; \n\n\
    library SealContractInfo {\n\
        function SEAL_ROOT() internal inline returns(address){\n\
            return address(0x${res});\n\
        }\n\
        uint256 constant SEAL_ROOT_PUBKEY = 0x${pubkey};\n\
        uint256 constant SEAL_CODEHASH = 0x${sealTockenCodeHash};\n\
        uint16 constant  SEAL_CODEDEPTH = ${sealTokenCodeDepth};\n\
    }`
    fs.writeFileSync(path,content,{encoding:'utf8',flag:'w'})
}

(async () => {

    const client = new TonClient({
        network: {
            // Blockchain node URL
            endpoints: config.endpoints
        }
    });
    try {
        console.log('version:', await client.client.version());
        console.log('net: '+config.endpoints.toString());
        let root_json = JSON.parse(fs.readFileSync("../root.json").toString());

        const rootKeys = await client.crypto.generate_random_sign_keys();
        console.log('root keys:'+JSON.stringify(rootKeys));

        root_json.keys = rootKeys;
        root_json.seal="";
        root_json.stamp="";
        root_json.forever="";

        const sealRoot = await deploySealRoot(client,root_json.keys)
        root_json.seal = sealRoot;
        const sealCodeInfo = await client.boc.decode_tvc({tvc: SealTokenContract.tvc});
        await writeSealContractInfo(sealRoot, root_json.keys.public,sealCodeInfo.code_hash,sealCodeInfo.code_depth)

        fs.writeFileSync("../root.json",JSON.stringify(root_json),{encoding:'utf8',flag:'w'})

    } catch (err) {
        console.error(err)
    }
    client.close()
})()

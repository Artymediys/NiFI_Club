const {TonClient} = require("@eversdk/core")
const {libNode} = require("@eversdk/lib-node")
const {StampRootContract} = require ('../../stamp/1/StampRootContract')
const {StampTokenContract} = require ('../../stamp/1/StampTokenContract')
const {transfer} = require('../utils/transfer')
const {config} = require('../config')
const fs = require('fs');

TonClient.useBinaryLibrary(libNode)

async function deployStampRoot (client,rootKeys) {

    const rootAbi = {
        type: 'Contract',
        value: StampRootContract.abi
    }
    const deployOptions = {
        abi: rootAbi,
        deploy_set: {
            tvc: StampRootContract.tvc,
            initial_data: {}
        },
        call_set: {
            function_name: 'constructor',
            input: {
                manager: config.msgiManager,
                minCreationFee: config.stampRoot.minCreationFee,
                creationTopup: config.stampRoot.creationTopup,
                name : config.stampRoot.name,
                symbol: config.stampRoot.symbol,
                tokenCode: StampTokenContract.code,
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

    console.log(`StampRoot contract was deployed at address: ${address}`);
    return address;
}

async function writeStampContractInfo (sealRoot, pubkey, sealTockenCodeHash, sealTokenCodeDepth) {
    let res = sealRoot.substring(2);
    const path = "../../forever/1/StampContractInfoLib.sol";
    const content= `pragma ton-solidity >=0.47.0; \n\n\
    library StampContractInfo {\n\
        function STAMP_ROOT() internal inline returns(address){\n\
            return address(0x${res});\n\
        }\n\
        uint256 constant STAMP_ROOT_PUBKEY = 0x${pubkey};\n\
        uint256 constant STAMP_CODEHASH = 0x${sealTockenCodeHash};\n\
        uint16 constant  STAMP_CODEDEPTH = ${sealTokenCodeDepth};\n\
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

        //generated in seal deploy
        let root_json = JSON.parse(fs.readFileSync("../root.json").toString());

        const stampRoot = await deployStampRoot(client,root_json.keys)
        root_json.stamp = stampRoot;
        const stampCodeInfo = await client.boc.decode_tvc({tvc: StampTokenContract.tvc});
        await writeStampContractInfo(stampRoot, root_json.keys.public,stampCodeInfo.code_hash,stampCodeInfo.code_depth)

        fs.writeFileSync("../root.json",JSON.stringify(root_json),{encoding:'utf8',flag:'w'})

    } catch (err) {
        console.error(err)
    }
    client.close()
})()

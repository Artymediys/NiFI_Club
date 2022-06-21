const {TonClient} = require("@eversdk/core")
const {libNode} = require("@eversdk/lib-node")
const {SealRootContract} = require ('../../seal/1/SealRootContract')
const {SealTokenContract} = require ('../../seal/1/SealTokenContract')
const {StampRootContract} = require ('../../stamp/1/StampRootContract')
const {StampTokenContract} = require ('../../stamp/1/StampTokenContract')
const {ForeverRootContract} = require ('../../forever/1/ForeverRootContract')
const {ForeverTokenContract} = require ('../../forever/1/ForeverTokenContract')
const {SafeMultisigWallet} = require('../utils/SafeMultisigWallet')
const {config} = require('../config')
const fs = require('fs');
const { MsigKeys } = require('../utils/msig.keys.js')
const { Msig } = require('../utils/msig.js')
const { transfer } = require('../utils/transfer.js')

const { deployMultisig } = require('../utils/deployMsig.js')

TonClient.useBinaryLibrary(libNode)

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function createToken(client,root,abiContract,amount,hash) {
    const abi = {
        type: 'Contract',
        value: abiContract.abi
    }
    const body =await client.abi.encode_message_body({
        abi,
        call_set: {
            function_name: "create",
            input: {
                creatorPercentReward:1000,
                hash:hash
            }
        },
        is_internal: true,
        signer: {
            type:"None"
        }
    })

    const wallet_abi = {
        type: 'Contract',
        value: SafeMultisigWallet.abi
    }
    const params = {
        address: Msig.address,
        abi:wallet_abi,
        call_set: {
            function_name: 'sendTransaction',
            input: {
                dest:root,
                value: amount,
                bounce:true,
                flags:1,
                payload: body.body
            }
        },
        signer: { type: 'Keys', keys: MsigKeys}
    }

    try {
        const message = await client.abi.encode_message(params);
        await client.processing.send_message({
            message:message.message,
            send_events: false
            });
        const in_msg = await client.boc.get_boc_hash({ boc: message.message });
        const res = await client.net.query_transaction_tree({in_msg: in_msg.hash, abi_registry:[abi]});
        for (let i = 0; i<res.messages.length; i++) {
            if(res.messages[i].src==root&&res.messages[i].dst!=config.swiftAddr) {
                return res.messages[i].dst
            }
        }
        return "address not found";
    } catch (error) {
        console.error(error);
        exit(1)
    }
}

async function callGet(client, contract, addr, function_name, input) {
    const abi = {
        type: 'Contract',
        value: contract.abi
    }
    const address = addr;
        const [account, message] = await Promise.all([
        client.net.query_collection({
            collection: 'accounts',
            filter: { id: { eq: address } },
            result: 'boc'
        })
        .then(({ result }) => result[0].boc)
        .catch(() => {
            //throw Error(`Failed to fetch account data`)
            console.log(`Failed to fetch account data`)
            return ""
        }),
        client.abi.encode_message({
            abi,
            address,
            call_set: {
                function_name,
                input
            },
            signer: { type: 'None' }
        }).then(({ message }) => message)
    ]);

    if (account === null) {return "no account"}

    response = await client.tvm.run_tvm({ message, account, abi });
    return response.decoded.output
    //console.log('output:', response.decoded.output);
}


async function requestEndorse(client,stamp,seal,places,price,amount) {
    const abi = {
        type: 'Contract',
        value: StampTokenContract.abi
    }
    const body =await client.abi.encode_message_body({
        abi,
        call_set: {
            function_name: "requestEndorse",
            input: {
                seal,
                places,
                price
            }
        },
        is_internal: true,
        signer: {
            type:"None"
        }
    })
    const wallet_abi = {
        type: 'Contract',
        value: SafeMultisigWallet.abi
    }
    const params = {
        address: Msig.address,
        abi:wallet_abi,
        call_set: {
            function_name: 'sendTransaction',
            input: {
                dest:stamp,
                value: amount,
                bounce:true,
                flags:1,
                payload: body.body
            }
        },
        signer: { type: 'Keys', keys: MsigKeys}
    }

    try {
        const message = await client.abi.encode_message(params);
        await client.processing.send_message({
            message:message.message,
            send_events: false
            });
        const in_msg = await client.boc.get_boc_hash({ boc: message.message });
        await client.net.query_transaction_tree({in_msg: in_msg.hash, abi_registry:[abi]});
    } catch (error) {
        console.error(error);
        exit(1)
    }
}

async function cancelEndorse(client,stamp,amount) {
    const abi = {
        type: 'Contract',
        value: StampTokenContract.abi
    }
    const body =await client.abi.encode_message_body({
        abi,
        call_set: {
            function_name: "cancelEndorse",
            input: { }
        },
        is_internal: true,
        signer: {
            type:"None"
        }
    })
    const wallet_abi = {
        type: 'Contract',
        value: SafeMultisigWallet.abi
    }
    const params = {
        address: Msig.address,
        abi:wallet_abi,
        call_set: {
            function_name: 'sendTransaction',
            input: {
                dest:stamp,
                value: amount,
                bounce:true,
                flags:1,
                payload: body.body
            }
        },
        signer: { type: 'Keys', keys: MsigKeys}
    }

    try {
        const message = await client.abi.encode_message(params);
        await client.processing.send_message({
            message:message.message,
            send_events: false
            });
        const in_msg = await client.boc.get_boc_hash({ boc: message.message });
        await client.net.query_transaction_tree({in_msg: in_msg.hash, abi_registry:[abi]});
    } catch (error) {
        console.error(error);
        exit(1)
    }
}

async function endorse(client,seal,stamp,place,amount) {
    const abi = {
        type: 'Contract',
        value: SealTokenContract.abi
    }
    const body =await client.abi.encode_message_body({
        abi,
        call_set: {
            function_name: "endorse",
            input: {
                stamp,
                place
            }
        },
        is_internal: true,
        signer: {
            type:"None"
        }
    })
    const wallet_abi = {
        type: 'Contract',
        value: SafeMultisigWallet.abi
    }
    const params = {
        address: Msig.address,
        abi:wallet_abi,
        call_set: {
            function_name: 'sendTransaction',
            input: {
                dest:seal,
                value: amount,
                bounce:true,
                flags:1,
                payload: body.body
            }
        },
        signer: { type: 'Keys', keys: MsigKeys}
    }

    try {
        const message = await client.abi.encode_message(params);
        await client.processing.send_message({
            message:message.message,
            send_events: false
            });
        const in_msg = await client.boc.get_boc_hash({ boc: message.message });
        await client.net.query_transaction_tree({in_msg: in_msg.hash, abi_registry:[abi]});
    } catch (error) {
        console.error(error);
        exit(1)
    }
}

async function setForever(client,stamp,forever,amount) {
    const abi = {
        type: 'Contract',
        value: StampTokenContract.abi
    }
    const body =await client.abi.encode_message_body({
        abi,
        call_set: {
            function_name: "setForever",
            input: {
                forever
            }
        },
        is_internal: true,
        signer: {
            type:"None"
        }
    })
    const wallet_abi = {
        type: 'Contract',
        value: SafeMultisigWallet.abi
    }
    const params = {
        address: Msig.address,
        abi:wallet_abi,
        call_set: {
            function_name: 'sendTransaction',
            input: {
                dest:stamp,
                value: amount,
                bounce:true,
                flags:1,
                payload: body.body
            }
        },
        signer: { type: 'Keys', keys: MsigKeys}
    }

    try {
        const message = await client.abi.encode_message(params);
        await client.processing.send_message({
            message:message.message,
            send_events: false
            });
        const in_msg = await client.boc.get_boc_hash({ boc: message.message });
        await client.net.query_transaction_tree({in_msg: in_msg.hash, abi_registry:[abi]});
    } catch (error) {
        console.error(error);
        exit(1)
    }
}

function checkExp(json,exp,prefix,text) {
    if(exp) {
        console.log(JSON.stringify(json))
        console.error(prefix+" "+text);
        process.exit(1)
    }
}


async function simpleTest(client, root_json) {
    const stampRoot = root_json.stamp;
    const sealRoot = root_json.seal;
    const foreverRoot = root_json.forever;
    const stamp1 =await createToken(client,stampRoot,StampRootContract,config.stampRoot.minCreationFee,"0x1111112")

    const seal1 =await createToken(client,sealRoot,SealRootContract,config.sealRoot.minCreationFee,"0x1111121")

    const forever1 =await createToken(client,foreverRoot,ForeverRootContract,config.foreverRoot.minCreationFee,"0x1111131")
    await requestEndorse(client,stamp1,seal1,2|1,500_000_000,650_000_000)
    await sleep(1000);
    await endorse(client,seal1,stamp1,1,2_900_000_000)
    await sleep(1000);
    let get_res = await callGet(client,StampTokenContract,stamp1,'getSeal',{})
    checkExp(get_res,get_res.corner!=1,"simpleTest" , "1 endorse failed");
    await setForever(client,stamp1,forever1,210000000)
    await sleep(1000);
    get_res = await callGet(client,ForeverTokenContract,forever1,'getStamps',{})
    checkExp(get_res,get_res.stamps.length!=1,"simpleTest" , "1 setForever failed");
    console.log("simpleTest PASS")
}

async function lowValueEndroseTest(client, root_json) {
    const stampRoot = root_json.stamp;
    const sealRoot = root_json.seal;
    const stamp1 =await createToken(client,stampRoot,StampRootContract,config.stampRoot.minCreationFee,"0x1111112")

    const seal1 =await createToken(client,sealRoot,SealRootContract,config.sealRoot.minCreationFee,"0x1111121")

    await requestEndorse(client,stamp1,seal1,2|1,200_000,280_200_000)
    await sleep(1000);
    await endorse(client,seal1,stamp1,1,290_000_000)
    await sleep(1000);
    let get_res = await callGet(client,StampTokenContract,stamp1,'getSeal',{})
    checkExp(get_res,get_res.corner!=1,"lowValueEndroseTest" , "1 endorse failed");
    console.log("lowValueEndroseTest PASS")
}

async function cancelEndroseTest(client, root_json) {
    const stampRoot = root_json.stamp;
    const sealRoot = root_json.seal;
    const foreverRoot = root_json.forever;
    const stamp1 =await createToken(client,stampRoot,StampRootContract,config.stampRoot.minCreationFee,"0x1111112")

    const seal1 =await createToken(client,sealRoot,SealRootContract,config.sealRoot.minCreationFee,"0x1111121")

    await requestEndorse(client,stamp1,seal1,2|1,500_000_000,650_000_000)
    await sleep(1000);
    let get_res = await callGet(client,StampTokenContract,stamp1,'getSeal',{})
    checkExp(get_res,get_res.corner!=0,"cancelEndroseTest" , "1 requestEndorse failed");
    checkExp(get_res,get_res.seal!=seal1,"cancelEndroseTest" , "1 requestEndorse failed");

    await cancelEndorse(client,stamp1,110000000)
    await sleep(1000);
    get_res = await callGet(client,StampTokenContract,stamp1,'getSeal',{})
    checkExp(get_res,get_res.corner!=0,"cancelEndroseTest" , "1 requestEndorse failed");
    checkExp(get_res,get_res.seal!=null,"cancelEndroseTest" , "1 requestEndorse failed");

    console.log("cancelEndroseTest PASS")
}

async function niceForeverTest(client, root_json) {
    const stampRoot = root_json.stamp;
    const sealRoot = root_json.seal;
    const foreverRoot = root_json.forever;

    const seal1 =await createToken(client,sealRoot,SealRootContract,config.sealRoot.minCreationFee,"0x1111121")

    const forever1 =await createToken(client,foreverRoot,ForeverRootContract,config.foreverRoot.minCreationFee,"0x1111131")

    const stamp1 =await createToken(client,stampRoot,StampRootContract,config.stampRoot.minCreationFee,"0x1111112")
    await requestEndorse(client,stamp1,seal1,2|1,500_000_000,650_000_000)
    await sleep(1000);
    await endorse(client,seal1,stamp1,1,290000000)
    await sleep(1000);
    let get_res = await callGet(client,StampTokenContract,stamp1,'getSeal',{})
    checkExp(get_res,get_res.corner!=1,"niceForeverTest" , "1 endorse failed");

    const stamp2 =await createToken(client,stampRoot,StampRootContract,config.stampRoot.minCreationFee,"0x1111112")
    await requestEndorse(client,stamp2,seal1,2|1,500_000_000,650_000_000)
    await sleep(1000);
    await endorse(client,seal1,stamp2,2,290000000)
    await sleep(1000);
    get_res = await callGet(client,StampTokenContract,stamp2,'getSeal',{})
    checkExp(get_res,get_res.corner!=2,"niceForeverTest" , "2 endorse failed");

    const stamp3 =await createToken(client,stampRoot,StampRootContract,config.stampRoot.minCreationFee,"0x1111112")
    await requestEndorse(client,stamp3,seal1,4,500_000_000,650_000_000)
    await sleep(1000);
    await endorse(client,seal1,stamp3,4,290000000)
    await sleep(1000);
    get_res = await callGet(client,StampTokenContract,stamp3,'getSeal',{})
    checkExp(get_res,get_res.corner!=4,"niceForeverTest" , "3 endorse failed");

    const stamp4 =await createToken(client,stampRoot,StampRootContract,config.stampRoot.minCreationFee,"0x1111112")
    await requestEndorse(client,stamp4,seal1,8,500_000_000,650_000_000)
    await sleep(1000);
    await endorse(client,seal1,stamp4,8,290000000)
    await sleep(1000);
    get_res = await callGet(client,StampTokenContract,stamp4,'getSeal',{})
    checkExp(get_res,get_res.corner!=8,"niceForeverTest" , "4 endorse failed");

    await setForever(client,stamp1,forever1,210000000)
    await sleep(1000);
    get_res = await callGet(client,ForeverTokenContract,forever1,'getStamps',{})
    checkExp(get_res,get_res.stamps.length!=1,"niceForeverTest" , "1 setForever failed");

    await setForever(client,stamp2,forever1,210000000)
    await sleep(1000);
    await setForever(client,stamp3,forever1,210000000)
    await sleep(1000);
    await setForever(client,stamp4,forever1,210000000)
    await sleep(1000);
    get_res = await callGet(client,ForeverTokenContract,forever1,'getStamps',{})
    checkExp(get_res,get_res.stamps.length!=4,"niceForeverTest" , "Forever failed");

    const stamp5 =await createToken(client,stampRoot,StampRootContract,config.stampRoot.minCreationFee,"0x1111112")
    await requestEndorse(client,stamp5,seal1,8,500_000_000,650_000_000)
    await sleep(1000);
    await endorse(client,seal1,stamp5,8,290000000)
    await sleep(1000);
    get_res = await callGet(client,StampTokenContract,stamp5,'getSeal',{})
    checkExp(get_res,get_res.corner!=8,"niceForeverTest" , "5 endorse failed");
    await setForever(client,stamp5,forever1,210000000)
    await sleep(1000);
    get_res = await callGet(client,StampTokenContract,stamp5,'getForever',{})
    checkExp(get_res,get_res.forever != null,"niceForeverTest" , "5 setForever failed");

    console.log("niceForeverTest PASS")
}

async function badForeverCornerTest(client, root_json) {
    const stampRoot = root_json.stamp;
    const sealRoot = root_json.seal;
    const foreverRoot = root_json.forever;

    const seal1 =await createToken(client,sealRoot,SealRootContract,config.sealRoot.minCreationFee,"0x1111121")

    const forever1 =await createToken(client,foreverRoot,ForeverRootContract,config.foreverRoot.minCreationFee,"0x1111131")

    const stamp1 =await createToken(client,stampRoot,StampRootContract,config.stampRoot.minCreationFee,"0x1111112")
    await requestEndorse(client,stamp1,seal1,2|1,500_000_000,650_000_000)
    await sleep(1000);
    await endorse(client,seal1,stamp1,1,290000000)
    await sleep(1000);
    let get_res = await callGet(client,StampTokenContract,stamp1,'getSeal',{})
    checkExp(get_res,get_res.corner!=1,"badForeverCornerTest" , "1 endorse failed");

    const stamp2 =await createToken(client,stampRoot,StampRootContract,config.stampRoot.minCreationFee,"0x1111112")
    await requestEndorse(client,stamp2,seal1,2|1,500_000_000,650_000_000)
    await sleep(1000);
    await endorse(client,seal1,stamp2,2,290000000)
    await sleep(1000);
    get_res = await callGet(client,StampTokenContract,stamp2,'getSeal',{})
    checkExp(get_res,get_res.corner!=2,"badForeverCornerTest" , "2 endorse failed");

    const stamp3 =await createToken(client,stampRoot,StampRootContract,config.stampRoot.minCreationFee,"0x1111112")
    await requestEndorse(client,stamp3,seal1,4,500_000_000,650_000_000)
    await sleep(1000);
    await endorse(client,seal1,stamp3,4,290000000)
    await sleep(1000);
    get_res = await callGet(client,StampTokenContract,stamp3,'getSeal',{})
    checkExp(get_res,get_res.corner!=4,"badForeverCornerTest" , "3 endorse failed");

    const stamp4 =await createToken(client,stampRoot,StampRootContract,config.stampRoot.minCreationFee,"0x1111112")
    await requestEndorse(client,stamp4,seal1,4,500_000_000,650_000_000)
    await sleep(1000);
    await endorse(client,seal1,stamp4,4,290000000)
    await sleep(1000);
    get_res = await callGet(client,StampTokenContract,stamp4,'getSeal',{})
    checkExp(get_res,get_res.corner!=4,"badForeverCornerTest" , "4 endorse failed");

    await setForever(client,stamp1,forever1,210000000)
    await sleep(1000);
    get_res = await callGet(client,ForeverTokenContract,forever1,'getStamps',{})
    checkExp(get_res,get_res.stamps.length!=1,"badForeverCornerTest" , "1 setForever failed");

    await setForever(client,stamp2,forever1,210000000)
    await sleep(1000);
    await setForever(client,stamp3,forever1,210000000)
    await sleep(1000);
    await setForever(client,stamp4,forever1,210000000)
    await sleep(1000);
    get_res = await callGet(client,ForeverTokenContract,forever1,'getStamps',{})
    checkExp(get_res,get_res!="no account","badForeverCornerTest" , "Forever failed");

    sleep(1000);
    get_res = await callGet(client,StampTokenContract,stamp1,'getForever',{})
    checkExp(get_res,get_res.forever != null,"badForeverCornerTest" , "1 delForever failed");
    get_res = await callGet(client,StampTokenContract,stamp2,'getForever',{})
    checkExp(get_res,get_res.forever != null,"badForeverCornerTest" , "2 delForever failed");
    get_res = await callGet(client,StampTokenContract,stamp3,'getForever',{})
    checkExp(get_res,get_res.forever != null,"badForeverCornerTest" , "3 delForever failed");
    get_res = await callGet(client,StampTokenContract,stamp4,'getForever',{})
    checkExp(get_res,get_res.forever != null,"badForeverCornerTest" , "4 delForever failed");

    console.log("badForeverCornerTest PASS")
}

async function badForeverSealTest(client, root_json) {
    const stampRoot = root_json.stamp;
    const sealRoot = root_json.seal;
    const foreverRoot = root_json.forever;

    const seal1 =await createToken(client,sealRoot,SealRootContract,config.sealRoot.minCreationFee,"0x1111121")
    const seal2 =await createToken(client,sealRoot,SealRootContract,config.sealRoot.minCreationFee,"0x1111122")

    const forever1 =await createToken(client,foreverRoot,ForeverRootContract,config.foreverRoot.minCreationFee,"0x1111131")

    const stamp1 =await createToken(client,stampRoot,StampRootContract,config.stampRoot.minCreationFee,"0x1111112")
    await requestEndorse(client,stamp1,seal1,2|1,500_000_000,650_000_000)
    await sleep(1000);
    await endorse(client,seal1,stamp1,1,290000000)
    await sleep(1000);
    let get_res = await callGet(client,StampTokenContract,stamp1,'getSeal',{})
    checkExp(get_res,get_res.corner!=1,"badForeverSealTest" , "1 endorse failed");

    const stamp2 =await createToken(client,stampRoot,StampRootContract,config.stampRoot.minCreationFee,"0x1111112")
    await requestEndorse(client,stamp2,seal1,2|1,500_000_000,650_000_000)
    await sleep(1000);
    await endorse(client,seal1,stamp2,2,290000000)
    await sleep(1000);
    get_res = await callGet(client,StampTokenContract,stamp2,'getSeal',{})
    checkExp(get_res,get_res.corner!=2,"badForeverSealTest" , "2 endorse failed");

    const stamp3 =await createToken(client,stampRoot,StampRootContract,config.stampRoot.minCreationFee,"0x1111112")
    await requestEndorse(client,stamp3,seal1,4,500_000_000,650_000_000)
    await sleep(1000);
    await endorse(client,seal1,stamp3,4,290000000)
    await sleep(1000);
    get_res = await callGet(client,StampTokenContract,stamp3,'getSeal',{})
    checkExp(get_res,get_res.corner!=4,"badForeverSealTest" , "3 endorse failed");

    const stamp4 =await createToken(client,stampRoot,StampRootContract,config.stampRoot.minCreationFee,"0x1111112")
    await requestEndorse(client,stamp4,seal2,8,500_000_000,650_000_000)
    await sleep(1000);
    await endorse(client,seal2,stamp4,8,290000000)
    await sleep(1000);
    get_res = await callGet(client,StampTokenContract,stamp4,'getSeal',{})
    checkExp(get_res,get_res.corner!=8,"badForeverSealTest" , "4 endorse failed");

    await setForever(client,stamp1,forever1,210000000)
    await sleep(1000);
    get_res = await callGet(client,ForeverTokenContract,forever1,'getStamps',{})
    checkExp(get_res,get_res.stamps.length!=1,"badForeverSealTest" , "1 setForever failed");

    await setForever(client,stamp2,forever1,210000000)
    await sleep(1000);
    await setForever(client,stamp3,forever1,210000000)
    await sleep(1000);
    await setForever(client,stamp4,forever1,210000000)
    await sleep(1000);
    get_res = await callGet(client,ForeverTokenContract,forever1,'getStamps',{})
    checkExp(get_res,get_res!="no account","badForeverSealTest" , "Forever failed");

    sleep(1000);
    get_res = await callGet(client,StampTokenContract,stamp1,'getForever',{})
    checkExp(get_res,get_res.forever != null,"badForeverSealTest" , "1 delForever failed");
    get_res = await callGet(client,StampTokenContract,stamp2,'getForever',{})
    checkExp(get_res,get_res.forever != null,"badForeverSealTest" , "2 delForever failed");
    get_res = await callGet(client,StampTokenContract,stamp3,'getForever',{})
    checkExp(get_res,get_res.forever != null,"badForeverSealTest" , "3 delForever failed");
    get_res = await callGet(client,StampTokenContract,stamp4,'getForever',{})
    checkExp(get_res,get_res.forever != null,"badForeverSealTest" , "4 delForever failed");

    console.log("badForeverSealTest PASS")
}

async function badEndroseTest(client, root_json) {
    const stampRoot = root_json.stamp;

    const stamp1 =await createToken(client,stampRoot,StampRootContract,config.stampRoot.minCreationFee,"0x1111112")
    await requestEndorse(client,stamp1,Msig.address,2|1,500_000_000,650_000_000)
    await sleep(1000);

    const abi = {
        type: 'Contract',
        value: StampTokenContract.abi
    }

    const body =await client.abi.encode_message_body({
        abi,
        call_set: {
            function_name: "endorse",
            input: {
                id: 1,
                place: 1,
                sealOwner: Msig.address
            }
        },
        is_internal: true,
        signer: {
            type:"None"
        }
    })

    transfer(client, stamp1, 290000000, body.body)
    await sleep(1000);
    let get_res = await callGet(client,StampTokenContract,stamp1,'getSeal',{})
    //console.log(get_res)
    //console.log("stamp1",stamp1)
    checkExp(get_res,get_res.corner!=0,"simpleTest" , "1 badEndroseTest failed");
}

async function calcStorageFee(client, root_json) {

    const stampRoot = root_json.stamp;
    const stamp1 =await createToken(client,stampRoot,StampRootContract,config.stampRoot.minCreationFee,"0x1111112")
    sleep(1000)

    const res = await client.net.query_collection({
        collection: 'accounts',
        filter: { id: { eq: stamp1 } },
        result: 'boc'
    })

    const fee = await client.utils.calc_storage_fee({
        account: res.result[0].boc,
        period: 60*60*24*365
    })

    console.log(fee);
}

async function changeCreationFee(client, root_json){
    const stampRoot = root_json.stamp;

    let get_res = await callGet(client,StampRootContract,stampRoot,'getCreationParameters',{})
    checkExp(get_res,get_res.minCreationFee!=config.stampRoot.minCreationFee,"changeCreationFee" , "1 changeCreationFee failed");
    checkExp(get_res,get_res.creationTopup!=config.stampRoot.creationTopup,"changeCreationFee" , "2 changeCreationFee failed");

    const abi = {
        type: 'Contract',
        value: StampRootContract.abi
    }

    const body =await client.abi.encode_message_body({
        abi,
        call_set: {
            function_name: "setCreationParameters",
            input: {
                minCreationFee: 500_000_000,
                creationTopup: 300_000_000,
            }
        },
        is_internal: true,
        signer: {
            type:"None"
        }
    })

    transfer(client, stampRoot, 100_000_000, body.body)
    await sleep(2000);
    get_res = await callGet(client,StampRootContract,stampRoot,'getCreationParameters',{})
    checkExp(get_res,get_res.minCreationFee!=500_000_000,"changeCreationFee" , "3 changeCreationFee failed");
    checkExp(get_res,get_res.creationTopup!=300_000_000,"changeCreationFee" , "4 changeCreationFee failed");
    console.log("changeCreationFee PASS")
}

(async () => {

    const client = new TonClient({
        network: {
            // Blockchain node URL
            endpoints: config.endpoints
        }
    });
    try {

        let root_json = JSON.parse(fs.readFileSync("../root.json").toString());
        //const res = await deployMultisig (client, MsigKeys, 1000_000_000_000);
        //console.log(res.address);
        //console.log('ok');

        await lowValueEndroseTest(client, root_json)
        await simpleTest(client, root_json)
        await niceForeverTest(client, root_json)
        await badForeverCornerTest(client, root_json)
        await cancelEndroseTest(client, root_json)
        await badEndroseTest(client, root_json)
        await badForeverSealTest(client, root_json)
        //await calcStorageFee(client, root_json)
        await changeCreationFee(client, root_json)

    } catch (err) {
        console.error(err)
    }
    client.close()
})()

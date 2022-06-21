const {TonClient} = require("@eversdk/core")
const {libNode} = require("@eversdk/lib-node")

const {AskRootContract} = require ('../../ask/1/AskRootContract')
const {AskContract} = require ('../../ask/1/AskContract')
const {BidRootContract} = require ('../../bid/1/BidRootContract')
const {BidContract} = require ('../../bid/1/BidContract')
const {DirectAuctionRootContract} = require ('../../auction/1/DirectAuctionRootContract')
const {DirectAuctionContract} = require ('../../auction/1/DirectAuctionContract')

const {transfer} = require('../utils/transfer')
const {config} = require('../config')
const fs = require('fs');

TonClient.useBinaryLibrary(libNode)

async function deployAskRoot (client,rootKeys) {

    const rootAbi = {
        type: 'Contract',
        value: AskRootContract.abi
    }
    const deployOptions = {
        abi: rootAbi,
        deploy_set: {
            tvc: AskRootContract.tvc,
            initial_data: {}
        },
        call_set: {
            function_name: 'constructor',
            input: {
                manager: config.msgiManager,
                minCreationFee: config.ask.minCreationFee,
                minAcceptFee: config.ask.minAcceptFee,
                creationTopup: config.ask.creationTopup,
                askIncomePercent: config.ask.askIncomePercent,
                name : "AskRoot",
                symbol: "ASK",
                tokenCode: AskContract.code,
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

    console.log(`AskRoot contract was deployed at address: ${address}`);
    return address;
}

async function deployBidRoot (client,rootKeys) {

    const rootAbi = {
        type: 'Contract',
        value: BidRootContract.abi
    }
    const deployOptions = {
        abi: rootAbi,
        deploy_set: {
            tvc: BidRootContract.tvc,
            initial_data: {}
        },
        call_set: {
            function_name: 'constructor',
            input: {
                manager: config.msgiManager,
                minCreationFee: config.bid.minCreationFee,
                minAcceptFee: config.bid.minAcceptFee,
                creationTopup: config.bid.creationTopup,
                bidIncomePercent: config.bid.bidIncomePercent,
                name : "BidRoot",
                symbol: "BID",
                tokenCode: BidContract.code,
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

    console.log(`BidRoot contract was deployed at address: ${address}`);
    return address;
}

async function deployAuctionRoot (client,rootKeys) {

    const rootAbi = {
        type: 'Contract',
        value: DirectAuctionRootContract.abi
    }
    const deployOptions = {
        abi: rootAbi,
        deploy_set: {
            tvc: DirectAuctionRootContract.tvc,
            initial_data: {}
        },
        call_set: {
            function_name: 'constructor',
            input: {
                manager: config.msgiManager,
                minCreationFee: config.auction.minCreationFee,
                auctionIncomePercent: config.auction.auctionIncomePercent,
                creationTopup: config.auction.creationTopup,
                name : "AuctionRoot",
                symbol: "AUCTION",
                tokenCode: DirectAuctionContract.code,
                minBidSubmissionFee: config.auction.minBidSubmissionFee,
                bidCost: config.auction.bidCost
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

    console.log(`AuctionRoot contract was deployed at address: ${address}`);
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

        const askRoot = await deployAskRoot(client,rootKeys)
        const auctionRoot = await deployAuctionRoot(client,rootKeys)
        const bidRoot = await deployBidRoot(client,rootKeys)
        console.log(`askRoot: ${askRoot}`);
        console.log(`auctionRoot: ${auctionRoot}`);
        console.log(`bidRoot: ${bidRoot}`);

    } catch (err) {
        console.error(err)
    }
    client.close()
})()

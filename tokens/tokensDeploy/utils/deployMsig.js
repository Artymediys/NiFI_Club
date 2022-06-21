const {get_tokens_from_giver} = require('./giver')
const {SafeMultisigWallet} = require('./SafeMultisigWallet')

async function deployMultisig (client, keys, amount) {

    let safeMultisigWalletKeys = {
        type: "Keys",
        keys: keys
    };
    const wallet_abi = {
        type: 'Contract',
        value: SafeMultisigWallet.abi
    }
    const deployOptions = {
        abi: wallet_abi,
        deploy_set: {
            tvc: SafeMultisigWallet.tvc,
            initial_data: {}
        },
        call_set: {
            function_name: 'constructor',
            input: {
                "owners": ['0x'+keys.public],
                "reqConfirms": 1
            }
        },
        signer: safeMultisigWalletKeys
    }

    const { address } = await client.abi.encode_message(deployOptions);
    await get_tokens_from_giver(client, address, amount);

    await client.processing.process_message({
        send_events: false,
        message_encode_params: deployOptions
      });

    return {address, keys}
}

module.exports = {deployMultisig}
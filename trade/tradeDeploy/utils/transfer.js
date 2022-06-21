
const { MsigKeys } = require('./msig.keys.js')
const { Msig } = require('./msig.js')

async function transfer (client, dst, amount, payload) {

    const msig_abi = {
        type: 'Contract',
        value: Msig.abi
    }
	
	console.log(MsigKeys);

    const params = {
        send_events: false,
        message_encode_params: {
            address: Msig.address,
            abi:msig_abi,
            call_set: {
                function_name: 'sendTransaction',
                input: {
                    dest:dst,
                    value:amount,
                    bounce:false,
                    flags:1,
                    payload: payload
                }
            },
            signer: { type: 'Keys', keys: MsigKeys}
        }
    }

    try {
        await client.processing.process_message(params);
        console.log(`Evers transfered to ${dst}`);
    } catch (error) {
    console.error(error);
  }
}

module.exports = {transfer}
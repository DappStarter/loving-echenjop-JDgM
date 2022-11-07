require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index razor misery arrow hover fat swing genre'; 
let testAccounts = [
"0x75c53eace6653e1ff2852926680057775469fc8cf4c58004491def39cf721afa",
"0xd57e281e106943708f4d273d924a20bf7b1d794c5f2f487f1b7e8c65ea7e9123",
"0x028604959aa0f6f30d478e063cd0a41dc3f6a6a432d33f9b0fb9277800608754",
"0x808ebd4bb36bc7e3343d9cb95c73bde3829c309c8e9f38140217af5bddab9081",
"0x06648655a1ce301f30de01161fdc91650423f77e16fc2352a97f3494de10b008",
"0xe801c678382de061ce1812930973f58521483e623ed9c60b0eb248c55b9afe18",
"0xb13dd2eef814cb40e0edc98859c709a059db92a64ae43d06e44a1ed341a1ece5",
"0xe788981d76e29bb74b19d540e0cdc0678bc7a049ae93aaac5fdee5edc2ecbc4d",
"0x21bcf07f5c98200d8e50606bdfee76731fde92723bd88f2855b76328beb24607",
"0x4aed145e5fd7edd4cf8351eaedfe4271d1cb8262c46703dda3b96be3b41efbd6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



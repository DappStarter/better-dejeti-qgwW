require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give close brown slab carpet rate noble erosion inner end army gate'; 
let testAccounts = [
"0xa888a5a58b96f27a63f597780f11ab9fbc7a1023872e7d5ee8b514f48b83d15a",
"0x5f37730b18f8fc14ed6ec204a294c105cfc50fcd769f479faab55d8bc7b3cdf7",
"0xdc307cf4f569309f1806c1e56e03ca0f4854f095407d45eacb5c1c7acd1dc11d",
"0x7614e617249eb1b67dad714455b6cecef558a93dace6ba51608173a13d4c9bfd",
"0x48c07cd7e7a0b9aff633a86de6369855f2c6df782842f5fe6456120dc2c59c3e",
"0xea809ae9e9fa2e1f0856db60d0475007800bfbee6a7e61e7716b415f54a975bd",
"0x879c252fe3b7a4e4a9521bf1bdf179d87331d071e5ab58edc926b61df3acc195",
"0x1dbbc73728da7d98fe8a8383bac065bbf78f9d85d578bf09ca2ba1272693bb1d",
"0x50be5aa412a6fcc2b60290c47c39dd0ece9c89962ce2e1bb5263c609143cf44b",
"0x076c0103f5bb09e88a47a5feb6f1c4a39372f6322f75e509f6a110e10ac3884c"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


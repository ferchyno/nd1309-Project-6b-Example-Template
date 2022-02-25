const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
      // gas: 4500000,        // rinkeby has a lower block limit than mainnet
      // gasPrice: 10000000000
    },
    // account[0]: 0x27D8D15CbC94527cAdf5eC14B69519aE23288B95
    develop: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
      // gas: 4500000,        // rinkeby has a lower block limit than mainnet
      // gasPrice: 10000000000
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/f85ca96666304af18d77aa32afaf5293`),
      network_id: 4,       // rinkeby's id
      gas: 4500000,        // rinkeby has a lower block limit than mainnet
      gasPrice: 10000000000
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    timeout: 100000
 },

    // Configure your compilers
    compilers: {
      solc: {
        // version: "0.5.1",    // Fetch exact version from solc-bin (default: truffle's version)
        version: "0.4.24",      // Fetch exact version from solc-bin (default: truffle's version)
        // version: "0.8.0",      // Fetch exact version from solc-bin (default: truffle's version)
        // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
        // settings: {          // See the solidity docs for advice about optimization and evmVersion
        //  optimizer: {
        //    enabled: false,
        //    runs: 200
        //  },
        //  evmVersion: "byzantium"
        // }
      }
    }
};
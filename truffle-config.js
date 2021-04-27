
const PrivateKeyProvider = require("truffle-privatekey-provider");
const infuraRopsten = `https://ropsten.infura.io/v3/${process.env.INFURA_ID}`;
const infuraMainnet = `https://mainnet.infura.io/v3/${process.env.INFURA_ID}`;

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    ropsten: {
      provider: () => new PrivateKeyProvider(PRIVATE_KEY, infuraRopsten),
      gasPrice: 50000000000, // 50 gwei,
      network_id: 3,
    },
    mainnet: {
      provider: () => new PrivateKeyProvider(PRIVATE_KEY, infuraMainnet),
      gasPrice: 1000000000, // 1 gwei
      network_id: 1,
    }
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
    }
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled: false to enabled: true
  db: {
    enabled: false
  }
};

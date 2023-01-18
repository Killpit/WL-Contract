require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env"});

module.exports = {
    solidity: "0.8.9",
    networks: {
      mainnet: {
        url: `https://api.avax.network/ext/bc/C/rpc`
          //accounts: [`${PRIVATE_KEY}`]
      },
      fuji: {
        url: `https://api.avax-test.network/ext/bc/C/rpc`
          //accounts: [`${PRIVATE_KEY}`]
      }
    }
};


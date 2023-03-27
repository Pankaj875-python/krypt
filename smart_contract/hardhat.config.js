require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/xh3pAhZNktBETSljPneHDiYx72p2Komv',
      accounts: ['2d6a0d622621aea1b40e2be089d8aa579ed8ba3f35f03c8513875afb93042d33'],
    },
  },
};
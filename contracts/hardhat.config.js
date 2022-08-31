/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomiclabs/hardhat-ethers');

// Change private keys accordingly - ONLY FOR DEMOSTRATION PURPOSES - PLEASE STORE PRIVATE KEYS IN A SAFE PLACE
// Export your private key as
//       export PRIVKEY=0x.....
const privateKey = process.env.PRIVKEY;
const privateKeyDev =
   '0x99b3c12287537e38c90a9219d4cb074a89a16e9cdb20bf85728ebd97c343e342';

module.exports = {
   defaultNetwork: 'hardhat',

   networks: {
      hardhat: {},

      // moonbase: {
      //    url: 'https://rpc.api.moonbase.moonbeam.network',
      //    accounts: [privateKey],
      //    chainId: 1287,
      // },
      obscuro: {
         url: 'http://127.0.0.1:3000',
         accounts: ['ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'],
         network_id: '777',
         chainId: 777,
      },
      dev: {
         url: 'http://127.0.0.1:9933',
         accounts: [privateKeyDev],
         network_id: '1281',
         chainId: 1281,
      },
   },
   solidity: {
      compilers: [
         {
            version: '0.5.16',
            settings: {
               optimizer: {
                  enabled: true,
                  runs: 200,
               },
            },
         },
         {
            version: '0.6.6',
            settings: {
               optimizer: {
                  enabled: true,
                  runs: 200,
               },
            },
         },
      ],
   },
   paths: {
      sources: './contracts',
      cache: './cache',
      artifacts: './artifacts',
   },
   mocha: {
      timeout: 20000,
   },
};

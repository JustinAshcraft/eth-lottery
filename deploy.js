const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'air under battle seed tomorrow minute cluster fatigue outdoor burden version dune', // Rinkeby test account
  'https://rinkeby.infura.io/v3/42e701df556547e6808fee1959bb772a'
);

const web3 = new Web3(provider);

// Writing inside a function in order to use 'async await'
const deploy = async () => {

  //Get list of accounts
  const accounts = await web3.eth.getAccounts();

  // Console log account address deploying contract
  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
   .deploy({ data: '0x' + bytecode }) // add 0x bytecode
   .send({ from: accounts[0] }); // remove 'gas'

   // Console log out address location of contract
   console.log('Contract deployed to', result.options.address);
};
deploy();

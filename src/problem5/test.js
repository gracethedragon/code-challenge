const { ethers } = require("ethers");
const { formatUnits } = require("ethers/lib/utils");
const {abi} = require("./build/contracts/TokenBalances.json");

const ADDR = "0x7F225410B6C8648B4F28FfF3554F1ee86c57745A";   // your contract address
const ABI = abi;    // your contract ABI

const ADDRESS = "0x51F87CBdee52edb4A2870b12fc51957232DA7d62"; // some wallet address with token balance
const TOKENS = [    // token contract addresses
    "0x965934A991778060135f63616be2e821742664ac",
    "0x5592EC0cfb4dbc12D3aB100b257153436a1f0FEa",
];

const provider = ethers.providers.getDefaultProvider("rinkeby");

const test = async () => {
  
    const contract = new ethers.Contract(ADDR, ABI, provider);

    const balances = await contract.getBalances(ADDRESS, TOKENS);

   return balances
};

test().then(console.log);
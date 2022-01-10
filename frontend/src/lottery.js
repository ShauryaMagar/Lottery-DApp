import web3 from 'web3';
const address = '0x6Dc9361788665eC49392Be6b83422f1344D65785';
const abi = [{
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "enter",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPlayers",
        "outputs": [{
            "internalType": "address payable[]",
            "name": "",
            "type": "address[]"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "lotteryPrize",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "manager",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "pickWinner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "name": "players",
        "outputs": [{
            "internalType": "address payable",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "random",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }
]
export default new web3.length.Contract(abi,address);
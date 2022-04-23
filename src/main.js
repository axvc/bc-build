const { Blockchain, Transaction } = require('./blockchain')
const EC = require('elliptic').ec;
const ec =  new EC('secp256k1');

const myKey = ec.keyFromPrivate("1860ffe02ae59575702b8a6410391d5c3f09fc42247eee02da1fb725f92e408b");
const myWalletAddress = myKey.getPublic('hex');

const sCoin = new Blockchain()

const tx1 =  new Transaction(myWalletAddress, 'some publicKey', 10);
tx1.signTransaction(myKey);
sCoin.addTransaction(tx1);

console.log("\n Starting the miner...")
sCoin.minePendingTransactions(myWalletAddress)

console.log('\n Balance of axvc is', sCoin.getBalanceOfAddress(myWalletAddress))

console.log('Is chain valid', sCoin.isChainValid())

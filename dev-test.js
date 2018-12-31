/*jshint esversion: 6 */ 


const Blockchain = require('./blockchain');

const bc = new Blockchain();

for (let i=0; i<10; i++) {
    console.log(bc.addBlock(`yeet ${i}`));
}


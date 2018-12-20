/*jshint esversion: 6 */ 
const Block = require('./Block');


class Blockchain {
    constructor() {
        this.chain = [Block.genesis()];
    }

    addBlock(data) {
        const lastBlock = this.chain[this.chain.length-1];
        const Block = Block.mineBlock(lastBlock, data);
        this.chain.push(block);

        return block;

    }
}
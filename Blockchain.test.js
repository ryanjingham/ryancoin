/*jshint esversion: 6 */ 

const Blockchain = require('./Blockchain');
const Block = require('./Block');

describe('Blockchain', () => {
    let bc;

    beforeEach(() => {
        bc = new Blockchain();
    });

    it('start with genesis block', () => {
        expect(bc.chain[0]).toEqual(Block.genesis());
    });

    it('adds a new block', () => {
        const data = 'yeet';
        bc.addBlock(data);

        expect(bc.chain[bc.chain.length-1].data).toEqual(data);
    });

});
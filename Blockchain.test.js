/*jshint esversion: 6 */ 

const Blockchain = require('./Blockchain');
const Block = require('./Block');

describe('Blockchain', () => {
    let bc, bc2;

    beforeEach(() => {
        bc = new Blockchain();
        bc2 = new Blockchain();
    });

    it('start with genesis block', () => {
        expect(bc.chain[0]).toEqual(Block.genesis());
    });

    it('adds a new block', () => {
        const data = 'yeet';
        bc.addBlock(data);

        expect(bc.chain[bc.chain.length-1].data).toEqual(data);
    });
    it('validates a valid chain',() => {
        bc2.addBlock('yoted');

        expect(bc.isValidChain(bc2.chain)).toBe(true);
    });

    it('invalidates a chain with a corrupt block'), () => {
        bc2.chain[0].data = 'bad data';

        expect(bc.isValidChain(bc2.chain)).toBe(false);
    };

});
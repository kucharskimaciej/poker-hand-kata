import Game from '../Game.js';
import Hand from '../Hand.js';

describe('Game', () => {
    it('holds an ordered list of ranks', () => {
       expect(Game.orderedRanks).toBeDefined()
    });

    it('should create two player Hands after init', () => {
        let game = new Game('TH JS 5D 4H 2C 3D 4S 5H 6D JC');

        expect(game.player1 instanceof Hand).toBe(true);
        expect(game.player2 instanceof Hand).toBe(true);
    });

    describe('#resolve', () => {
        it('resolves games correctly', () => {
            let game1 = new Game('TH JS 5D 4H 2C 4D 5D 8D 7D 6D');
            let game2 = new Game('TH TS 2C 4S AH QS QC AS 2C 7H');
            let game3 = new Game('TH TS 2C 4S AH TC TD QS 2C 7H');
            let game4 = new Game('TH JS 5D 4H 2C 4D 5D 8D 7D 6D');
            let game5 = new Game('TH JS 5D 4H 2C 4D 5D 8D 7D 6D');

            expect(game1.resolve()).toBe('player 2');
            expect(game2.resolve()).toBe('player 2');
            expect(game3.resolve()).toBe('player 2');

        })
    });
});

import Hand from '../Hand.js'
import Card from '../Card.js'

describe('Hand', () => {

    it('decodes card', () => {
        let hand = new Hand('TH JS 5D 4H 2C');

        expect(hand.cards instanceof Array).toBe(true);
        expect(hand.cards.length).toBeGreaterThan(0);
        hand.cards.forEach(function (card) {
           expect(card instanceof Card).toBe(true);
        });
    });
});

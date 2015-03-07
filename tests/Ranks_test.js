import Hand from '../Hand.js'
import Card from '../Card.js'
import Ranks from '../Ranks.js'

describe('Ranks', () => {
    describe('#HighCard', () => {
        it('returns cards in descending order', () => {
            let hand = new Hand('TH JS 5D 4H 2C');
            let result = Ranks.highCard(hand.cards);

            expect(result).toBe(98320);
        });
    });

    describe('#Pair', () => {
       it('returns value of cards in pair', () => {
           let hand = new Hand('TH JS 2D 4H 2C');
           let result = Ranks.pair(hand.cards);

           expect(result).toBe(0);
       });
    });
    describe('#twoPairs', () => {
        it('returns array value of cards in pairs', () => {
            let hand = new Hand('TH 2S 2D JH JC');
            let result = Ranks.twoPairs(hand.cards);

            expect(result).toEqual(908);
        });

        it('returns undefined if there are less than two pairs', () => {
            let hand = new Hand('TH 2S 3D JH JC');
            let result = Ranks.twoPairs(hand.cards);

            expect(result).toEqual(undefined);
        });
    });
    describe('#threeOfAKind', () => {
       it('returns value of three cards', () => {
           let hand = new Hand('2H JS 2D 4H 2C');
           let result = Ranks.threeOfAKind(hand.cards);

           expect(result).toBe(0);
       });
    });

    describe('#fourOfAKind', () => {
        it('returns value of four cards', () => {
            let hand = new Hand('2H JS 2D 2H 2C');
            let result = Ranks.fourOfAKind(hand.cards);

            expect(result).toBe(0);
        });
    });

    describe('#flush', () => {
        it('returns high card if flush is found', () => {
            let hand = new Hand('TS JS 5S 4S 2S');
            let result = Ranks.flush(hand.cards);

            expect(result).toBe(98320);
        });

        it('returns undefined if flush is NOT found', () => {
            let hand = new Hand('TS JS 5H 4S 2C');
            let result = Ranks.flush(hand.cards);

            expect(result).not.toBeDefined();
        });
    });

    describe('#fullHouse', () => {
        it('returns value of three cards if full house is found', () => {
            let hand = new Hand('2H 4S 2D 4H 2C');
            let result = Ranks.fullHouse(hand.cards);

            expect(result).toBe(0);
        });

        it('returns value of three cards if full house is found', () => {
            let hand = new Hand('2H 4S 2D 5H 2C');
            let result = Ranks.fullHouse(hand.cards);

            expect(result).not.toBeDefined();
        });
    });

    describe('#straight', () => {
       it('return highCard if straight is found', () => {
           let hand = new Hand('4H 5D 8D 7S 6C');
           let result = Ranks.straight(hand.cards);

           expect(result).toBe(65432);
       });

       it('returns undefined if straight is not found', () => {
           let hand = new Hand('4H JD 8D 7S 6C');
           let result = Ranks.straight(hand.cards);

           expect(result).not.toBeDefined();
       })
    });

    describe('#straightFlush', () => {
        it('return highCard if straight flush is found', () => {
            let hand = new Hand('4D 5D 8D 7D 6D');
            let result = Ranks.straightFlush(hand.cards);

            expect(result).toBe(65432);
        });

        it('returns undefined if straight flush is not found', () => {
            let hand = new Hand('4D 5D 8S 7D 6D');
            let result = Ranks.straightFlush(hand.cards);

            expect(result).not.toBeDefined();
        })
    });
});
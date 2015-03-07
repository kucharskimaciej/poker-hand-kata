import Card from '../Card.js'

describe('Card', () => {
   it('is defined', () => {
      expect(Card).toBeDefined();
   });

    it('decodes value from arg', () => {
        let card = new Card('TH');

        expect(card.value).toBe(8);
        expect(new Card('QD').value).toBe(10);
    });
    it('color from arg', () => {
       let card = new Card('QD');

        expect(card.color).toBe('Diamonds');
    });

    describe(':compare', () => {
       it('returns 1 when first card is higher than the second', () => {
            var result = Card.compare(new Card('JS'), new Card('2H'));
            expect(result).toBe(1);
       });

       it('returns 0 when cards are the same', () => {
           var result = Card.compare(new Card('JS'), new Card('JH'));
           expect(result).toBe(0);
       });

        it('returns 1 when first card is higher than the second', () => {
            var result = Card.compare(new Card('5S'), new Card('7H'));
            expect(result).toBe(-1);
        });
    });
});
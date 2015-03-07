const CARD_VALUES = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'T',
    'J',
    'Q',
    'K',
    'A'
];

const CARD_COLORS = {
    H: 'Hearts',
    C: 'Clubs',
    D: 'Diamonds',
    S: 'Spades'
};

class Card {
    constructor(symbol) {
        this.value = CARD_VALUES.indexOf(symbol[0]);
        this.color = CARD_COLORS[symbol[1]];
    }

    static compare (card1, card2) {
        if(card1.value > card2.value) {
            return 1;
        } else if (card1.value === card2.value) {
            return 0;
        } else {
            return -1;
        }
    }
}

module.exports = Card;
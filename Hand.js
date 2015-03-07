import Card from './Card.js'

class Hand {
    // 'TH JS 5D 4H 2C'
    constructor(cards) {
        this.cards = cards.split(' ').map((cardSymbol) => {
           return new Card(cardSymbol);
        });
    }
}

module.exports = Hand;
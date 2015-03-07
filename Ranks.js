import Card from './Card.js';
let Ranks = {};

Ranks.highCard = (cards) => {
    var result = cards.sort(Card.compare).reverse().map( (card) => {
        return card.value;
    }).join('');

    return parseInt(result, 10);
};

Ranks.pair = (cards) => {
    var count = Ranks.countCards(cards);
    return Ranks.findQuantity(count, 2)[0];
};

Ranks.twoPairs = (cards) => {
    let count = Ranks.countCards(cards);
    let pairs = Ranks.findQuantity(count, 2);
    let rest = cards.filter((card) => {
       return pairs.indexOf(card.value) !== -1;
    });

    if (pairs && pairs.length === 2 ) {
        return pairs;
    } else {
        return undefined;
    }
};

Ranks.threeOfAKind = (cards) => {
    let count = Ranks.countCards(cards);
    return Ranks.findQuantity(count, 3)[0];
};
Ranks.fourOfAKind = (cards) => {
    let count = Ranks.countCards(cards);
    return Ranks.findQuantity(count, 4)[0];
};

Ranks.flush = (cards) => {
    var isFlush = Ranks.isFlush(cards);

    if (isFlush) {
        return Ranks.highCard(cards);
    } else {
        return undefined;
    }
};

Ranks.fullHouse = (cards) => {
    let three = Ranks.threeOfAKind(cards);

    if (three !== undefined) {
        let rest = cards.filter( (c) => { return c.value !== three });
        let pair = Ranks.pair(rest);

        if (pair) {
            return three;
        }
    }
};

Ranks.straight = (cards) => {
  let isStraight = Ranks.isStraight(cards);

    if(isStraight) {
        return Ranks.highCard(cards);
    } else {
        return undefined;
    }

};

Ranks.straightFlush = (cards) => {
    let isStraight = Ranks.isStraight(cards);
    var isFlush = Ranks.isFlush(cards);
    if(isStraight && isFlush) {
        return Ranks.highCard(cards);

    }else {return undefined}
};

Ranks.isStraight = (cards) => {
    return cards.sort(Card.compare).reverse().every((card, index) => {
        if(!cards[index+1]) {
            return true;
        }

        return cards[index].value === cards[index + 1].value + 1;
    });
};

Ranks.isFlush = (cards) => {
    return cards.every((card) => {
        return card.color === cards[0].color;
    });
};

Ranks.countCards = (cards) => {
    var count = {};
    cards.forEach( (card) => {
        count[card.value] = (count[card.value] || 0) + 1;
    });

    return count;
};

Ranks.findQuantity = (countObj, quantity) => {
    return Object.keys(countObj).filter((card) => {
        return countObj[card] === quantity;
    }).map( (card) => {
        return parseInt(card);
    }).sort().reverse();
};

module.exports = Ranks;
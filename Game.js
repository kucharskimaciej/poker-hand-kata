import Ranks from './Ranks.js';
import Hand from './Hand.js';

class Game {
    static get orderedRanks () {
        return [
            'straightFlush',
            'fourOfAKind',
            'fullHouse',
            'flush',
            'straight',
            'threeOfAKind',
            'twoPairs',
            'pair',
            'highCard'
        ];
    }

    constructor (input) {
        this.input = input;
        this.player1 = new Hand(input.substring(0, 14));
        this.player2 = new Hand(input.substring(15));
    }

    resolve () {
        console.log(this.input)
        for (let i = 0; i < Game.orderedRanks.length; i++) {
            var rankName = Game.orderedRanks[i];

            var p1, p2;

            p1 = Ranks[rankName](this.player1.cards);
            p2 = Ranks[rankName](this.player2.cards);

            console.log(rankName, p1, p2);

            if(p1 && !p2) {
                return 'player 1';
            }
            if(!p1 && p2) {
                return 'player 2';
            }
            if(p1 && p2) {
                if (p1 > p2) {
                    return 'player 1';
                } else if (p2 > p1) {
                    return 'player 2';
                } else {
                    return 'tie';
                }
            }
        }
    }
}

module.exports = Game;
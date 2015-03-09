Hand = require('./Hand.coffee')
Rank = require('./Rank.coffee')
class Game

  @RANKS: [
    'straight_flush',
    'four_of_kind',
    'full_house',
    'flush',
    'straight',
    'three_of_kind',
    'two_pairs',
    'pair',
    'high_card'
  ]

  constructor: (hand1, hand2) ->
    @hand1 = new Hand hand1
    @hand2 = new Hand hand2

  judge: () ->
    result = undefined
    for rank in Game.RANKS when result is undefined

      p1 = Rank[rank] @hand1.cards
      p2 = Rank[rank] @hand2.cards

      result = @getResult(p1, p2)


    result

  getResult: (p1, p2) ->
    (p1 and !p2) and 'player 1' or
      (!p1 and p2) and 'player 2' or
      (p1 and p2) and 'tie' or undefined

module.exports = Game
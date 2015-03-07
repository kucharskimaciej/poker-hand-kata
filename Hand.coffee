Card = require('./Card.coffee')
class Hand

  constructor: (hand) ->
    @_hand = hand
    @stringToArray()

  stringToArray: () ->
    @cards = (new Card(c) for c in @_hand.split(' '))
    @cards = @cards.sort(Card.compare).reverse()

module.exports = Hand
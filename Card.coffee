

class Card

  @VALUES:
    2: '02'
    3: '03'
    4: '04'
    5: '05'
    6: '06'
    7: '07'
    8: '08'
    9: '09'
    T: '10'
    J: '11'
    Q: '12'
    K: '13'
    A: '14'

  constructor: (suit) ->
    @_suit = suit
    @color = suit[1]
    @toValue()

  toValue: () ->
    @value = Card.VALUES[@_suit[0]]

  @compare: (card1, card2) ->
    (+card1.value - +card2.value < 0) and res = -1
    (+card1.value - +card2.value is 0) and res = 0
    (+card1.value - +card2.value > 0) and res = 1
    res

module.exports = Card
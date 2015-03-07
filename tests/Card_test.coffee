Card = require '../Card.coffee'

describe "Card", () ->
  it "decodes card value from input string", ->
    card = new Card('TH')

    expect card.value
        .toBe('10')

  describe ":compare", () ->
     it "returns 1 when first card is higher rank then the second", () ->
       expect Card.compare(new Card('JS'), new Card('TD'))
           .toBe(1)

     it "return 0 when cards are of equal rank", () ->
       expect Card.compare(new Card('JS'), new Card('JD'))
          .toBe(0)

     it "returns -1 when card is lower rank than the second", () ->
       expect Card.compare(new Card('2S'), new Card('QS'))
           .toBe(-1)

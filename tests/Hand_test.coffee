Hand = require('../Hand.coffee')
Card = require('../Card.coffee')

describe "Hand", () ->
  hand = new Hand('TH JS QD 5C 2H')

  it "creates an array of cards when initialized", () ->
    expect hand.cards instanceof Array
        .toBe yes

  it 'creates an instance of card', () ->
    expect hand.cards[0] instanceof Card
        .toBe yes

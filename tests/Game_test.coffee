Game = require('../Game.coffee')
Hand = require('../Hand.coffee')

describe 'Game', () ->
  game = new Game('TH JS QD 5C 2H', 'TH JS QD 5C 2H')

  it 'creates two instances of Hand', () ->
    expect game.hand1 instanceof Hand
    .toBe yes

    expect game.hand2 instanceof Hand
    .toBe yes


  it 'has an ordered list of ranks', ->
    expect Game.RANKS instanceof Array
      .toBe yes

  describe "#judge", () ->
    it 'correctly judges game', ->
      game1 = new Game('TH TS TC 2H 3S', 'TD JS QD 5C 2H')

      expect(game1.judge()).toBe 'player 1'

    it 'correctly judges game', ->
      game1 = new Game('TH TS TC 2H 3S', 'TH JH QH KH AH')

      expect(game1.judge()).toBe 'player 2'

    it 'correctly judges game', ->
      game1 = new Game('TS JS QS KS AS', 'TH JH QH KH AH')

      expect(game1.judge()).toBe 'tie'

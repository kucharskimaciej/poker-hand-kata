Hand = require('../Hand.coffee')
Rank = require('../Rank.coffee')

describe 'Ranks', () ->

  it 'returns high card', () ->
    hand = new Hand ('TH JS QD 5C 2H')

    expect Rank.high_card(hand.cards)
        .toBe 1211100502

  describe 'pair', ()  ->
    it 'returns undefined where there is no pair', () ->

      hand = new Hand ('TH JS QD 5C 2H')

      expect Rank.pair(hand.cards)
        .not.toBeDefined()

    it 'returns pair and sorted rest if pair present', () ->

      hand = new Hand ('TH TC QD 5C 2H')

      expect Rank.pair(hand.cards)
        .toBe 10120502

  describe "two pairs", () ->

    it 'returns undefined where there is less than 2 pairs', () ->

      hand = new Hand ('JH JS QD 5C 2H')

      expect Rank.two_pairs(hand.cards)
        .not.toBeDefined()

    it 'returns correct value when there are 2 pairs', ->
      hand = new Hand ('JH JS QD QC 2H')

      expect Rank.two_pairs(hand.cards)
          .toBe 121102

  describe "three of a kind", () ->
    it 'returns undefined where there is no three of a kind', () ->

      hand = new Hand ('JH JS QD 5C 2H')

      expect Rank.three_of_kind(hand.cards)
        .not.toBeDefined()

    it 'returns correct value when there are 2 pairs', ->
      hand = new Hand ('JH JS JD QC 2H')

      expect Rank.three_of_kind(hand.cards)
        .toBe 11

  describe "four of a kind", () ->
    it "returns undefined when there is no foak", () ->
      hand = new Hand ('JH JS JD 5C 2H')

      expect Rank.four_of_kind hand.cards
        .not.toBeDefined()

    it "returns correct value", () ->
      hand = new Hand ('JH JS JD JC 2H')

      expect Rank.four_of_kind hand.cards
        .toBe 11

  describe "full house", () ->
    it "returns undefined when thereis no three and pair", () ->
      hand = new Hand ('JH JS JD 5C 2H')

      expect Rank.full_house hand.cards
      .not.toBeDefined()

    it "returns correct value", () ->
      hand = new Hand ('JH JS JD 2C 2H')

      expect Rank.full_house hand.cards
      .toBe 11

  describe "strigt", () ->
    it "returns undefined when there is no straight", () ->
      hand = new Hand ('JH JS JD 5C 2H')

      expect Rank.straight hand.cards
      .not.toBeDefined()

    it "returns high card", () ->
      hand = new Hand ('6H 5S 4D 2C 3H')

      expect Rank.straight hand.cards
      .toBe 605040302

  describe "flush", () ->
    it "returns undefined when there is no flush", () ->
      hand = new Hand ('JH JS JD 5C 2H')

      expect Rank.flush hand.cards
      .not.toBeDefined()

    it "returns high card", () ->
      hand = new Hand ('6H JH 4H 2H 3H')

      expect Rank.flush hand.cards
      .toBe 1106040302

  describe "straigh flush", () ->
    it "returns undefined when there is no straigh flush", () ->
      hand = new Hand ('AH 3S 2D 5C 4H')

      expect Rank.straight_flush hand.cards
      .not.toBeDefined()

    it "returns high card", () ->
      hand = new Hand ('AH 3H 2H 5H 4H')

      expect Rank.straight_flush hand.cards
      .toBe 1405040302





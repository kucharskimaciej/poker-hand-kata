class Rank

  high_card: (cards) ->
    parseInt(cards.map((c) -> c.value ).join(''), 10)

  pair: (cards) ->
    pair = @get_common(cards, 2)[0]
    rest = cards.filter (card) ->
      pair isnt card.value

    pairValue = parseInt pair+@high_card(rest), 10

    pair and pairValue or undefined

  two_pairs: (cards) ->
    pairs = @get_common(cards, 2)

    rest = cards.filter((card) ->
      pairs.indexOf(card.value) is -1
    ).map((c) -> c.value)

    (rest.length is 1) and parseInt( pairs.join('')+ rest.join('') ) or undefined

  three_of_kind: (cards) ->
    three = @get_common(cards, 3)[0]

    parseInt(three, 10) or undefined

  four_of_kind: (cards) ->
    four = @get_common(cards, 4)[0]

    parseInt(four, 10) or undefined

  full_house: (cards) ->
    three = @get_common(cards, 3)[0]
    two = @get_common(cards, 2)

    (three and two.length) and parseInt(three, 10) or undefined

  straight: (cards) ->
    high_card = @high_card(cards) + ''

    (@match_straight(high_card)) and @high_card(cards) or undefined

  flush: (cards) ->
    is_flush = not cards.filter((c) -> c.color isnt cards[0].color).length

    is_flush and @high_card(cards) or undefined

  straight_flush: (cards) ->
    straight = @straight(cards)
    flush = @flush(cards)

    (straight and flush ) and flush or undefined

  match_straight: (cards) ->
    pattern = '1413121110090807060504030214'
    pattern_alt = '1405040302'

    pattern.indexOf(cards) isnt -1 or pattern_alt.indexOf(cards) isnt -1

  get_common: (cards, num) ->
    count = cards.reduce((counter, card) ->
      counter[card.value] = (counter[card.value] or 0) + 1

      return counter
    , {})

    Object.keys(count).filter (k) -> return count[k] is num



module.exports = new Rank
class Deck {
  constructor(cards) {
    this.cards = cards;
  }
  countCards() {
    return this.cards.length;
  }
  shuffleDeck() {
    this.cards.sort(function() { return 0.5 - Math.random() });
  }
}

module.exports = Deck;
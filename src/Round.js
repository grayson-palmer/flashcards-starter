const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turn = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck[this.turn];
  }
  takeTurn(answer) {
    const turn = new Turn(answer, this.returnCurrentCard());
    if (turn.giveFeedback() === 'Incorrect!') {
      this.incorrectGuesses.push(this.returnCurrentCard().id);
    }
    this.turn++;
    return turn.giveFeedback();
  }
  calculatePercentCorrect() {
    return parseInt(Math.round((this.deck.length - this.incorrectGuesses.length) / this.deck.length * 100));
  }
  endRound() {
    console.log(`** Round Over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    process.exit();
  }
}

module.exports = Round;
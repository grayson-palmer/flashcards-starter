const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turn = 0;
    this.incorrectGuesses = [];
    this.time = Date.now();
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
    const min = Math.floor(((Date.now() - this.time) / 1000) / 60);
    const sec = parseInt(((Date.now() - this.time) / 1000) % 60);
    console.log(`** Round Over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    console.log(`** Round Time! ** You took ${min} minutes ${sec} seconds to complete!`)
    // process.exit();
  }

}

module.exports = Round;
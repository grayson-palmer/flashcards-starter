class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }
  returnGuess() {
    return this.guess;
  }
  returnCard() {
    return this.card;
  }
  evaluateGuess() {
    if (this.guess !== this.card.correctAnswer) {
      return false;
    }
  }
  giveFeedback() {
    return (this.evaluateGuess() ? 'Correct!' : 'Incorrect!');
  }
}

module.exports = Turn;
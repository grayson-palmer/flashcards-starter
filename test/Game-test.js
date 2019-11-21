const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');

describe('Game', function() {
  
  it('should keep track of the current round', function() {
    const game = new Game();

    expect(game.currentRound).to.equal(null);
  })

  it('should be able to start the game', function() {
    const game = new Game();

    expect(game.currentRound).to.equal(null);
    game.gameStart();
    expect(game.currentRound).to.be.an.instanceOf(Round);
  })

});

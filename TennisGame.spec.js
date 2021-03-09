const { expect } = require("chai");
const TennisGame = require("./TennisGame");

describe("TennisGame", () => {
  let game;
  beforeEach(() => {
    game = new TennisGame("Player1", "Player2");
  });

  it("getNamedScore is a function", () => {
    expect(typeof game.getNamedScore).to.equal("function");
  });
  it("playerOneScore is a function", () => {
    expect(typeof game.playerOneScore).to.equal("function");
  });
  it("playerTwoScore is a function", () => {
    expect(typeof game.playerTwoScore).to.equal("function");
  });
  it("bulkScore is a function", () => {
    expect(typeof game.bulkScore).to.equal("function");
  });
  it("Starting score is 'Love,Love'", () => {
    expect(game.getNamedScore()).to.equal("Love,Love");
  });
  it("Player one score, return 'Fifteen,Love'", () => {
    game.playerOneScore();
    expect(game.getNamedScore()).to.equal("Fifteen,Love");
  });
  it("Player two scores 3 times, return 'Love,Fourty'", () => {
    game.playerTwoScore();
    game.playerTwoScore();
    game.playerTwoScore();
    expect(game.getNamedScore()).to.equal("Love,Fourty");
  });
  it("Player one scored 4 vs Player two scored 0, return 'Player1 Wins'", () => {
    game.bulkScore(4, 0);
    expect(game.getNamedScore()).to.equal("Player1 Wins");
  });
  it("Player one scored 6 vs Player two scored 8, return 'Player2 Wins'", () => {
    game.bulkScore(6, 8);
    expect(game.getNamedScore()).to.equal("Player2 Wins");
  });
  it("Player one scored 5 vs Player two scored 4, return 'Player1 Advantage'", () => {
    game.bulkScore(5, 4);
    expect(game.getNamedScore()).to.equal("Player1 Advantage");
  });
});

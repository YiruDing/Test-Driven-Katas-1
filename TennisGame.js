class TennisGame {
  constructor(player1Name, player2Name) {
    this.player1 = { name: player1Name, score: 0 };
    this.player2 = { name: player2Name, score: 0 };
    this.scoreMap = {
      0: "Love",
      1: "Fifteen",
      2: "Thirty",
      3: "Fourty",
    };
  }

  getNamedScore() {
    if (this.player1.score === this.player2.score && this.player1.score > 3) {
      return "Deuce";
    }
    if (this.player1.score > 3 || this.player2.score > 3) {
      let str1, str2;
      let scoreDiff = this.player1.score - this.player2.socre;
      if (scoreDiff === 1) {
        str1 = this.player1.name;
        str2 = "Advantage";
      } else if (scoreDiff === -1) {
        str1 = "Advantage";
        str2 = this.player2.name;
      } else if (scoreDiff > 1) {
        str1 = this.player1.name;
        str2 = "Wins";
      } else {
        str1 = this.player2.name;
        str2 = "Wins";
      }
      return `${str1} ${str2}`;
    }
    return `${this.scoreMap[this.player1.score]},${
      this.scoreMap[this.player2.score]
    }`;
  }

  playerOneScore() {
    this.player1.score += 1;
  }

  playerTwoScore() {
    this.player2.score += 1;
  }

  bulkScore(s1, s2) {
    this.player1.score = s1;
    this.player2.socre = s2;
  }
}

module.exports = TennisGame;

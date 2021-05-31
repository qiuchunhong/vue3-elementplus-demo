class ScorePanel {
  score = 0;
  level = 1;
  scoreELe = document.getElementById("score");
  levelELe = document.getElementById("level");
  maxScore: number;
  maxLevel: number;
  constructor(maxScore = 10, maxLevel = 10) {
    this.maxScore = maxScore;
    this.maxLevel = maxLevel;
  }
  // 加分方法
  addScore() {
    this.scoreELe!.innerHTML = ++this.score + "";
    if (this.score % this.maxScore === 0) {
      this.upLevel();
    }
  }
  // 升级方法
  upLevel() {
    if (this.level < this.maxLevel) {
      this.levelELe!.innerHTML = ++this.level + "";
    }
  }
}

export default ScorePanel;

// 定義計分板
class ScorePanel {
  // score 和 level 用來記錄分數和等級
  score: number = 0
  level: number = 1

  // 設置一個變數限制等級
  maxLevel: number

  // 設置一個變數表示多少分升級
  upScore: number

  // 分數和等級所在的元素，在構造函數中進行初始化
  scoreEle: HTMLElement
  levelEle: HTMLElement

  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreEle = document.getElementById('score')!
    this.levelEle = document.getElementById('level')!
    this.maxLevel = maxLevel
    this.upScore = upScore
  }

  // 設定一個加分的方法
  addScore() {
    // 分數增加
    this.scoreEle.innerHTML = ++this.score + ''

    // 判斷分數是多少
    if (this.score % this.upScore === 0) {
      this.levelUp()
    }
  }

  // 提升等級的方法
  levelUp() {
    // 等級提升
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + ''
    }
  }
}

export default ScorePanel;
import './style/index.less'

// 定義食物 class
class Food {
  element: HTMLElement

  constructor() {
    // 獲取頁面中的 food 元素並賦值給 element
    this.element = document.getElementById('food')!
  }

  // 定義一個獲取食物 X 軸座標的方法
  get X() {
    return this.element.offsetLeft
  }

  // 定義一個獲取食物 Y 軸座標的方法
  get Y() {
    return this.element.offsetTop
  }

  // 修改食物位置的方法
  change() {
    // 生成一個隨機的位置
    // 食物的位置最小是 0，最大是 290
    // 蛇移動一次就是一個 10px，所以要求食物的位置必須是整 10

    let top = Math.round(Math.random() * 29) * 10
    let left = Math.round(Math.random() * 29) * 10

    this.element.style.top = `${top}px`
    this.element.style.left = `${left}px`
  }
}

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



// const food = new Food()
// console.log(food.X, food.Y)
// food.change()
const scorePanel = new ScorePanel(100, 10)
scorePanel.addScore()
scorePanel.addScore()

for (let i = 0; i < 200; i++) {
  scorePanel.addScore()
}
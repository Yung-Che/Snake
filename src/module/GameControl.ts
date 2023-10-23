import Snake from "./Sneak";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;

  // 創建一個屬性來存儲蛇的移動方向
  direction: string = '';

  // 創建一個屬性用來記錄遊戲是否結束
  isLive = true;

  constructor() {
    this.snake = new Snake();
    this.scorePanel = new ScorePanel(10, 2);
    this.food = new Food();
    this.init();
  }

  // 遊戲初始化，調用後開始遊戲
  init() {
    // 綁定鍵盤按鍵按下的事件
    document.addEventListener('keydown', this.keydownHandler.bind(this));
    // 調用 run 方法，使蛇移動
    this.run();
  }

  // 定義一個鍵盤按下的函數
  keydownHandler(event: KeyboardEvent) {
    // 檢查鍵盤按下的值是否合法
    // 修改蛇的 direction 屬性
    this.direction = event.key;
  }

  // 蛇移動的方法
  run() {
    let X = this.snake.X;
    let Y = this.snake.Y;

    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        Y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        Y += 10;
        break;
      case "ArrowLeft":
      case "Left":
        X -= 10;
        break;
      case "ArrowRight":
      case "Right":
        X += 10;
        break;
    }

    // 檢查蛇是否吃到了食物
    this.checkEat(X, Y);


    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (error) {
      alert((error as Error).message + 'GAME OVER!');
      this.isLive = false;
    }


    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
  }

  // 定義一個方法，用來檢查蛇是否吃到了食物
  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      // 食物的位置要進行重置
      this.food.change();
      // 分數增加
      this.scorePanel.addScore();
      // 蛇要增加一節
      this.snake.addBody();
    }
  }

}

export default GameControl;
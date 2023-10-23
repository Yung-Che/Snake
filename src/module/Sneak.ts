class Snake {
  // 表示蛇頭的元素
  head: HTMLElement;

  // 蛇的身體（包括蛇頭）
  bodies: HTMLCollection;

  // 獲取蛇的容器
  element: HTMLElement;

  constructor() {
    this.element = document.getElementById('snake')!;
    this.head = document.querySelector('#snake > div') as HTMLElement;
    this.bodies = this.element.getElementsByTagName('div');
  }

  // 獲取蛇頭的 X 軸座標
  get X() {
    return this.head.offsetLeft;
  }

  // 獲取蛇頭的 Y 軸座標
  get Y() {
    return this.head.offsetTop;
  }

  // 設置蛇頭的 X 軸座標
  set X(value: number) {
    // 如果新值和舊值相同，則直接返回不再修改
    if (this.X === value) {
      return;
    }

    // X 的值的合法範圍 0-290 之間
    if (value < 0 || value > 290) {
      // 進入判斷說明蛇撞牆了，抛出一個異常
      throw new Error('蛇撞牆了！');
    }

    // 修改 X 值時，是在修改水平座標，蛇在左右移動，蛇在向左移動時，不能向右掉頭
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
      // 如果發生了掉頭，讓蛇向反方向繼續移動
      if (value > this.X) {
        // 如果新值 value 大於舊值 X，則說明蛇向右掉頭，此時發生掉頭，應該使蛇繼續向左移動
        value = this.X - 10;
      } else {
        // 向左掉頭
        value = this.X + 10;
      }
    }

    // 移動身體
    this.moveBody();

    this.head.style.left = value + 'px';

    // 檢查有沒有撞到自己
    this.checkHeadBody();
  }

  // 設置蛇頭的 Y 軸座標
  set Y(value: number) {
    // 如果新值和舊值相同，則直接返回不再修改
    if (this.Y === value) {
      return;
    }

    // 修改 Y 值時，是在修改水平座標，蛇在左右移動，蛇在向左移動時，不能向右掉頭
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      // 如果發生了掉頭，讓蛇向反方向繼續移動
      if (value > this.Y) {
        // 如果新值 value 大於舊值 Y，則說明蛇向下掉頭，此時發生掉頭，應該使蛇繼續向上移動
        value = this.Y - 10;
      } else {
        // 向上掉頭
        value = this.Y + 10;
      }
    }

    // Y 的值的合法範圍 0-290 之間
    if (value < 0 || value > 290) {
      // 進入判斷說明蛇撞牆了，抛出一個異常
      throw new Error('蛇撞牆了！');
    }

    // 移動身體
    this.moveBody();

    this.head.style.top = value + 'px';

    // 檢查有沒有撞到自己
    this.checkHeadBody();
  }

  // 蛇增加身體的方法
  addBody() {
    // 向 element 中添加一個 div
    this.element.insertAdjacentHTML('beforeend', '<div></div>');
  }

  // 蛇移動的方法
  moveBody() {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      // 獲取前一個身體的位置
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

      // 將值賦給當前身體
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';
    }
  }

  // 檢查蛇頭是否撞到身體的方法
  checkHeadBody() {
    for (let i = 1; i < this.bodies.length; i++) {
      let bd = this.bodies[i] as HTMLElement;
      if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        // 進入判斷說明蛇頭撞到了身體
        throw new Error('撞到自己了！');
      }
    }
  }

}

export default Snake;
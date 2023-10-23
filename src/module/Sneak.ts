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
    this.head.style.left = value + 'px';
  }

  // 設置蛇頭的 Y 軸座標
  set Y(value: number) {
    this.head.style.top = value + 'px';
  }

  // 蛇增加身體的方法
  addBody() {
    // 向 element 中添加一個 div
    this.element.insertAdjacentHTML('beforeend', '<div></div>');
  }
}

export default Snake;
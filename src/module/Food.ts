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

export default Food;
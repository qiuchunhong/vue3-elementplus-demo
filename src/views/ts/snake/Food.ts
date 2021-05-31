class Food {
  // 定义食物类
  element: HTMLElement;
  constructor() {
    this.element = document.getElementById("food")!;
  }
  // 获取食物的top值
  get X() {
    return this.element.offsetLeft;
  }
  // 获取食物的left值
  get Y() {
    return this.element.offsetTop;
  }
  // 设置食物的top值、left值
  setPosition() {
    // x、y的范围在0-290之间
    const left = Math.round(Math.random() * 29) * 10;
    const top = Math.round(Math.random() * 29) * 10;
    this.element.style.left = left + "px";
    this.element.style.top = top + "px";
  }
}

export default Food;

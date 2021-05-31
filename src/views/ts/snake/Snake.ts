class Snake {
  // 蛇的容器
  element: HTMLElement;
  // 蛇头元素
  head: HTMLElement;
  // 蛇的身体（包括蛇头）
  bodies: HTMLCollection;

  constructor() {
    this.element = document.getElementById("snake")!;
    this.head = document.querySelector("#snake > div") as HTMLElement;
    this.bodies = this.element.getElementsByTagName("div");
  }
  // 获取蛇头left值
  get X() {
    return this.head.offsetLeft;
  }
  // 设置蛇头left值
  set X(value: number) {
    // 如果新值跟旧值相同，则不修改
    if (this.X === value) {
      return;
    }
    // 撞墙判断
    if (value < 0 || value > 290) {
      throw Error("蛇撞墙了！");
    }
    /**
     * 防止调头，如果调头，让其不调头，继续往前
     * 条件：1、必须有第二节
     *      2、x轴调头 第二节值跟第一节值相同
     * 结果：如果本身向右走，向左调头(value < this.X) x+10
     *      如果本身向左走，向右调头 x-10
     */

    if (
      this.bodies[1] &&
      (this.bodies[1] as HTMLElement).offsetLeft === value
    ) {
      if (value < this.X) {
        value = this.X + 10;
      } else {
        value = this.X - 10;
      }
    }

    this.moveBody();
    this.head.style.left = value + "px";
  }
  // 获取蛇头top值
  get Y() {
    return this.head.offsetTop;
  }
  // 设置蛇头top值
  set Y(value: number) {
    // 如果新值跟旧值相同，则不修改
    if (this.Y === value) {
      return;
    }
    // 撞墙判断
    if (value < 0 || value > 290) {
      throw Error("蛇撞墙了！");
    }
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      if (value < this.Y) {
        value = this.Y + 10;
      } else {
        value = this.Y - 10;
      }
    }
    this.moveBody();
    this.head.style.top = value + "px";
    this.bodyHead();
  }
  // 给蛇增加身体
  addBody() {
    const node = document.createElement("div");
    this.element.appendChild(node);
    // this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }
  // 移动身体
  moveBody() {
    /**
     * 0 1 2 3
     * 第4节去第3节位置
     * 第3节去第2节位置
     * 第2节去第1节位置
     * 第一节往前
     */
    for (let i = this.bodies.length - 1; i > 0; i--) {
      const l = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      const t = (this.bodies[i - 1] as HTMLElement).offsetTop;
      (this.bodies[i] as HTMLElement).style.left = l + "px";
      (this.bodies[i] as HTMLElement).style.top = t + "px";
    }
  }
  bodyHead() {
    // 撞自身
    for (let i = 1; i < this.bodies.length; i++) {
      const body = this.bodies[i] as HTMLElement;
      if (body.offsetLeft === this.X && body.offsetTop == this.Y) {
        throw Error("撞了");
      }
    }
  }
}

export default Snake;

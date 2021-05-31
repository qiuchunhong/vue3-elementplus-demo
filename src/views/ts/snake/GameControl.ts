import Food from "./Food";
import Snake from "./Snake";
import ScorePanel from "./ScorePanel";

// 游戏控制器，控制其他所有类
class GameControl {
  // 定义3个属性
  // 食物
  food: Food;
  // 蛇
  snake: Snake;
  // 计分牌
  scorePanel: ScorePanel;

  // 创建一个属性，记录键盘方向（蛇的移动方向）
  direction = "Right";

  // 创建一个属性，记录蛇是否活着
  isLive = true;

  constructor() {
    this.food = new Food();
    this.food.setPosition();
    this.snake = new Snake();
    this.scorePanel = new ScorePanel();

    this.init();
  }
  init() {
    // 键盘控制
    document.addEventListener("keydown", this.keydownHandler.bind(this));
    this.run();
  }
  keydownHandler(event: KeyboardEvent) {
    // 保存键盘按键
    this.direction = event.key;
  }
  // 移动蛇头
  run() {
    // 根据键盘方向修改蛇的位置
    /**
     * 向上 top -
     * 向下 top +
     * 向左 left -
     * 向右 left +
     */
    // 获取蛇的位置
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

    // 检查蛇是否吃到了食物
    this.checkEatFood(X, Y);

    try {
      // 修改蛇的X/Y值
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (e) {
      alert(e.message + " GameOver");
      this.isLive = false;
    }

    // 开启一个定时调用  否则蛇只跑一下
    this.isLive &&
      setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
  }
  checkEatFood(x: number, y: number) {
    if (this.food.X === x && this.food.Y === y) {
      // 刷新食物位置
      this.food.setPosition();
      // 加分
      this.scorePanel.addScore();
      // 蛇增加一节
      this.snake.addBody();
    }
  }
}
export default GameControl;

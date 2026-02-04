// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";

class MyGame extends Game {
  private x: number = 100;
  private y: number = 200;
  private width: number = 50;
  private height: number = 50;

  init(): void {
    console.log("Game started!");
  }

  update(deltaTime: number): void {
    console.log("update:", deltaTime);

    this.x += 200 * deltaTime;
    if (this.x > 800) {
      this.x = -this.width;
    }

    this.width++;
  }

  render(ctx: CanvasRenderingContext2D): void {
    // Draw rectangle
    ctx.fillStyle = "#aaaaaa";

    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");

// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";

class MyGame extends Game {
  private x: number = 0;
  private y: number = 0;
  private x1: number = 0;
  private y1: number = 50;
  init(): void {
    console.log("Game started!");
  }

  update(deltaTime: number): void {
    this.x += 300 * deltaTime; // Move 100 pixels per second
    if (this.x > 800) {
      this.x = -100; // Reset position when it goes off screen
    }

    this.y1 += 200 * deltaTime; // Move 100 pixels per second
    if (this.y1 > 600) {
      this.y1 = -100; // Reset position when it goes off screen
    }
  }

  render(ctx: CanvasRenderingContext2D): void {
    // Draw rectangle

    ctx.fillStyle = "#66aaff";
    ctx.fillRect(this.x, this.y, 100, 100);

    ctx.fillStyle = "#66aaff";
    ctx.fillRect(this.x1, this.y1, 100, 100);
  }
}

const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");

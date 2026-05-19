// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";

class MyGame extends Game {
  private x: number = 0;
  private y: number = 0;

  init(): void {
    console.log("Game started!");
  }

  update(deltaTime: number): void {
    this.x += 300 * deltaTime; // Move 100 pixels per second
    if (this.x > 800) {
      this.x = -100; // Reset position when it goes off screen
    }
  }

  render(ctx: CanvasRenderingContext2D): void {
    // Draw rectangle

    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, 100, 100);
  }
}

const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");

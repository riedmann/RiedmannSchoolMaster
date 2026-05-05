// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
class MyGame extends Game {
  constructor() {
    super(...arguments);
    this.x = 0;
    this.y = 0;
    this.x1 = 0;
    this.y1 = 50;
  }
  init() {
    console.log("Game started!");
  }
  update(deltaTime) {
    this.x += 300 * deltaTime; // Move 100 pixels per second
    if (this.x > 800) {
      this.x = -100; // Reset position when it goes off screen
    }
    this.y1 += 200 * deltaTime; // Move 100 pixels per second
    if (this.y1 > 600) {
      this.y1 = -100; // Reset position when it goes off screen
    }
  }
  render(ctx) {
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

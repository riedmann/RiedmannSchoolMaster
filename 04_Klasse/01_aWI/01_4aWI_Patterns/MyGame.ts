// MyGame - Example implementation of Game interface
import { Actor } from "./Actor.js";
import { Circle } from "./Circle.js";
import { Game, GameFramework } from "./GameFramework.js";
import { Rectangle } from "./actors/Rectangle.js";

class MyGame extends Game {
  private actors: Actor[] = [];

  init(): void {
    this.actors.push(new Rectangle(100, 100, 50, 50));
    this.actors.push(new Rectangle(200, 150, 80, 80));
    this.actors.push(new Rectangle(300, 200, 120, 60));
    this.actors.push(new Circle(400, 300, 30));
    this.actors.push(new Circle(500, 350, 50));
  }

  update(deltaTime: number): void {
    this.actors.forEach((actor) => actor.move(deltaTime)); // Move all actors
  }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    this.actors.forEach((actor) => actor.render(ctx)); // Render all actors
  }
}

const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");

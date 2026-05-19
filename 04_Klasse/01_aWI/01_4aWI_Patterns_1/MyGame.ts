// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
import { Circle } from "./actors/Circle.js";
import { Rectangle } from "./actors/Rectangle.js";
import { Actor } from "./actors/Actor.js";

class MyGame extends Game {
  private actors: Actor[] = [];


  init(): void {
    console.log("Game started!");
    this.actors.push(new Circle(50, 100, 100));
    this.actors.push(new Circle(30, 200, 200));
    this.actors.push(new Circle(20, 300, 300));
    this.actors.push(new Rectangle(100, 50, 400, 100));
    this.actors.push(new Rectangle(150, 75, 500, 200));
  }

  update(deltaTime: number): void {
    this.actors.forEach(actor => actor.update(deltaTime));
  }

  render(ctx: CanvasRenderingContext2D): void {
    // Draw rectangle

    this.actors.forEach(actor => actor.render(ctx));
  }
}

const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");

// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
import { Rectangle } from "./actors/Rectangle.js";
import { Circle } from "./actors/Circle.js";
import { Actor } from "./actors/Actor.js";
import { SuperCircle } from "./actors/SuperCircle.js";
class MyGame extends Game {
  private actors: Actor[] = [];

  init(): void {
    this.actors.push(new SuperCircle(200, 200, 50));
  }

  update(deltaTime: number): void {
    // console.log("update:", deltaTime);
    this.actors.forEach((actor) => actor.move(deltaTime));
  }

  render(ctx: CanvasRenderingContext2D): void {
    this.actors.forEach((actor) => actor.render(ctx));
  }
}

const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");

// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
import { Rectangle } from "./actors/Rectangle.js"
import { Circle } from "./actors/Circle.js"
import { Actor } from "./actors/Actor.js";
import { RightRectangle } from "./actors/RightRectangle.js";

class MyGame extends Game {
  private actors: Actor[] = [];

  init(): void {
    console.log("Game started!");
    this.actors.push(new Rectangle(0, 100, 100, 50));
    this.actors.push(new Rectangle(0, 200, 150, 75));
    this.actors.push(new RightRectangle(0, 300, 200, 100));

  }


  update(deltaTime: number): void {
    // DRY
    for (const actor of this.actors) {
      actor.update(deltaTime);
    }
  }

  render(ctx: CanvasRenderingContext2D): void {
    // Draw rectangle
    for (const actor of this.actors) {
      actor.render(ctx);
    }
  }
}

const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");

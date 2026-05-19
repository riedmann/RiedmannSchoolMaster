// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
import { Rectangle } from "./actors/Rectangle.js";
import { Circle } from "./actors/Circle.js";
import { Actor } from "./actors/Actor.js";
import { Car } from "./actors/Car.js";
import { SinusMovement } from "./movements/SinusMovement.js";
import { MoveStrategy } from "./movements/MoveStrategy.js";
import { DiagonalMovement } from "./movements/DiagonalMovement.js";
class MyGame extends Game {
  private actors: Actor[] = [];

  init(): void {
    console.log("Game started!");
    const m1: MoveStrategy = new SinusMovement(100, 100, 50, 1); // Start at (100,100), amplitude 50, frequency 1
    const m2: MoveStrategy = new SinusMovement(200, 200, 30, 0.5); // Start at (200,200), amplitude 30, frequency 0.5
    const m3: MoveStrategy = new DiagonalMovement(300, 300, 40); // Start at (300,300), speed 40

    this.actors.push(new Rectangle(m1, 50, 50));
    this.actors.push(new Rectangle(m3, 200, 150));

    this.actors.push(new Circle(m2, 25));
  }

  update(deltaTime: number): void {
    this.actors.forEach((actor) => actor.update(deltaTime));
  }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    this.actors.forEach((actor) => actor.render(ctx));
  }
}

const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");

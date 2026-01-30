// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
import { Rectangle } from "./actors/Rectangle.js";
import { Circle } from "./actors/Circle.js";

// start using objects
class MyGame extends Game {
  private rectangles: Rectangle[] = [];
  private circles: Circle[] = [];

  init(): void {
    const r1: Rectangle = new Rectangle(20, 20, 60, 40);
    const r2: Rectangle = new Rectangle(100, 100, 20, 20);
    const r3: Rectangle = new Rectangle(200, 150, 100, 100);
    this.circles.push(
      new Circle(300, 300, 50),
      new Circle(400, 100),
      new Circle(500, 200, 30),
    );
    this.rectangles.push(r1, r2, r3);
  }

  update(deltaTime: number): void {
    this.rectangles.forEach((rect) => rect.update(deltaTime));
    this.circles.forEach((circle) => circle.update(deltaTime));
  }

  render(ctx: CanvasRenderingContext2D): void {
    this.rectangles.forEach((rect) => rect.render(ctx));
    this.circles.forEach((circle) => circle.render(ctx));
  }
}

const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");

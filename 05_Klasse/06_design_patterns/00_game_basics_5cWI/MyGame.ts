// MyGame - Example implementation of Game interface
import { Actor } from "./actors/Actor.js";
import { Car } from "./actors/Car.js";
import { Circle } from "./actors/Circle.js";
import { Game, GameFramework } from "./GameFramework.js";

import { MoveDown } from "./movements/MoveDown.js";
import { MoveRightStrategy } from "./movements/MoveRightStrategy.js";
import { MoveSinusStrategy } from "./movements/MoveSinusStrategy.js";
import { MoveStrategy } from "./movements/MoveStrategy.js";
import { Rect } from "./actors/Rect.js";
import { GEO } from "./actors/GEO.js";

class MyGame extends Game {
  private actors: Actor[] = [];

  init(): void {
    console.log("Game started!");

    const m1: MoveStrategy = new MoveDown(100, 0, 100);
    const m3: MoveStrategy = new MoveRightStrategy(0, 300, 200);
    const car: Car = new Car("#aa0000", new MoveSinusStrategy(200, 0, 150, 50));
    const c1: Circle = new Circle("#00aa11", m1);
    const c2: Circle = new Circle("#aa00aa", m3);
    const r1: Rect = new Rect("#00aaaa", new MoveRightStrategy(0, 300, 100));
    this.actors.push(c1, c2, car, r1);
    car.addInterested(r1);
    car.addInterested(c2);

    // Composition over inheritance: We can easily change the movement behavior of our actors by just changing their MoveStrategy without modifying the Actor classes.
    // One class does one thing: Actor is responsible for rendering and delegating movement to its MoveStrategy, while MoveStrategy is responsible for defining how the movement works. This separation of concerns makes our code more flexible and maintainable.
    // always code against interfaces, not implementations: By using the MoveStrategy interface, we can easily swap out different movement behaviors without changing the Actor classes. This allows us to add new movement patterns in the future without modifying existing code, adhering to the Open/Closed Principle.
    // Open Close Principle: By using the MoveStrategy interface, we can add new movement behaviors (like MoveSinusStrategy) without modifying existing code. This makes our code more extensible and reduces the risk of introducing bugs when adding new features.
  }

  update(deltaTime: number): void {
    this.actors.forEach((actor) => actor.move());
  }

  render(ctx: CanvasRenderingContext2D): void {
    this.actors.forEach((actor) => actor.render(ctx));
  }
}

const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");

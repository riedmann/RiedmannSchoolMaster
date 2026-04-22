import { Car } from "./actors/Car.js";
import { Circle } from "./actors/Circle.js";
import { Game, GameFramework } from "./GameFramework.js";
import { Rect } from "./actors/Rect.js";
import { MoveDown } from "./movements/MoveDown.js";
import { MoveRightStrategy } from "./movements/MoveRightStrategy.js";
import { MoveSinusStrategy } from "./movements/MoveSinusStrategy.js";
import { RectangleFactory } from "./factory/RectangleFactory.js";
class MyGame extends Game {
    constructor() {
        super(...arguments);
        this.actors = [];
        this.actualFactory = new RectangleFactory();
    }
    init() {
        console.log("Game started!");
        const m1 = new MoveDown(100, 0, 100);
        const m3 = new MoveRightStrategy(0, 300, 200);
        const car = new Car("#aa0000", new MoveSinusStrategy(200, 0, 150, 50));
        const c1 = new Circle("#00aa11", m1);
        const c2 = new Circle("#aa00aa", m3);
        const r1 = new Rect("#00aaaa", new MoveRightStrategy(0, 300, 100));
        const actors = this.actualFactory.createActors(50);
        this.actors.push(c1, c2, car, r1, ...actors);
        car.addInterested(r1);
        car.addInterested(c2);
        // Composition over inheritance: We can easily change the movement behavior of our actors by just changing their MoveStrategy without modifying the Actor classes.
        // One class does one thing: Actor is responsible for rendering and delegating movement to its MoveStrategy, while MoveStrategy is responsible for defining how the movement works. This separation of concerns makes our code more flexible and maintainable.
        // always code against interfaces, not implementations: By using the MoveStrategy interface, we can easily swap out different movement behaviors without changing the Actor classes. This allows us to add new movement patterns in the future without modifying existing code, adhering to the Open/Closed Principle.
        // Open Close Principle: By using the MoveStrategy interface, we can add new movement behaviors (like MoveSinusStrategy) without modifying existing code. This makes our code more extensible and reduces the risk of introducing bugs when adding new features.
    }
    update(deltaTime) {
        this.actors.forEach((actor) => actor.move());
    }
    render(ctx) {
        this.actors.forEach((actor) => actor.render(ctx));
    }
}
const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");

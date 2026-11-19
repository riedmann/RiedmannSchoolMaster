// MyGame - Example implementation of Game interface
import { Car } from "./actors/Car.js";
import { Circle } from "./actors/Circle.js";
import { Rectangle } from "./actors/Rectangle.js";
import { Game, GameFramework } from "./index.js";
import { LeftMovement } from "./movements/LeftMovement.js";
import { RightMovement } from "./movements/RightMovement.js";
// start using objects
class MyGame extends Game {
    constructor() {
        super(...arguments);
        this.actors = [];
    }
    init() {
        let circle = new Circle(10, 100, 10, new LeftMovement(10, 100));
        this.actors.push(circle);
        let c1 = new Car(new RightMovement(100, 200));
        let c2 = new Car(new LeftMovement(300, 300));
        let rect = new Rectangle(200, 200, new RightMovement(200, 200));
        this.actors.push(rect);
        this.actors.push(c2);
        this.actors.push(c1);
        circle.addObserver(c1);
        circle.addObserver(c2);
        circle.addObserver(rect);
    }
    update(deltaTime) {
        this.actors.forEach(actor => actor.update(deltaTime));
    }
    render(ctx) {
        ctx.clearRect(0, 0, 800, 600); // Clear the canvas
        this.actors.forEach(actor => actor.render(ctx));
    }
    onMouseClick(x, y) {
        console.log(`Mouse clicked at: (${x}, ${y})`);
    }
    onKeyDown(event) {
        console.log(`Key pressed: ${event.key}`);
    }
}
const game = new MyGame();
const framework = new GameFramework(game, 800, 600, "canvas");
framework.start();
console.log("test 1");

// MyGame - Example implementation of Game interface
import { Car } from "./actors/Car.js";
import { Rectangle } from "./actors/Rectangle.js";
import { Tree } from "./actors/Tree.js";
import { Game, GameFramework } from "./index.js";
import { LeftMovement } from "./movements/LeftMovement.js";
import { RightMovement } from "./movements/RightMovement.js";
import { SinusMovement } from "./movements/SinusMovement.js";
// start using objects
class MyGame extends Game {
    constructor() {
        super(...arguments);
        this.actors = [];
    }
    init() {
        this.actors.push(new Rectangle(10, 100, new LeftMovement(10, 100)));
        this.actors.push(new Tree(400, 300, new SinusMovement(400, 300)));
        this.actors.push(new Car(200, 200, new RightMovement(200, 200)));
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

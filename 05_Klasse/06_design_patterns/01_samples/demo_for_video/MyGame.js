// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
import { Rectangle } from "./actors/Rectangle.js";
import { Circle } from "./actors/Circle.js";
import { Tree } from "./actors/Tree.js";
import { RightMovement } from "./movements/RightMovement.js";
import { LeftMovement } from "./movements/LeftMovement.js";
// start using objects
class MyGame extends Game {
    constructor() {
        super(...arguments);
        this.actors = [];
    }
    init() {
        const r1 = new Rectangle(new RightMovement(20, 20, 60), 40, 60);
        const r2 = new Rectangle(new LeftMovement(100, 100, 20), 20, 20);
        const r3 = new Rectangle(new RightMovement(200, 150, 100), 100, 100);
        this.actors.push(new Circle(new RightMovement(100, 200, 50), 10), new Circle(new LeftMovement(150, 300, 20), 20));
        this.actors.push(r1, r2, r3);
        this.actors.push(new Tree(50, 250));
        this.actors.push(new Tree(100, 450));
    }
    update(deltaTime) {
        this.actors.forEach((actor) => actor.update(deltaTime));
    }
    render(ctx) {
        this.actors.forEach((actor) => actor.render(ctx));
    }
}
const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");

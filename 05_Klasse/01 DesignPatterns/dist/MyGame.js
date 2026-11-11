// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./index.js";
import { Rectangle } from "./actors/Rectangle.js";
import { Circle } from "./actors/Circle.js";
import { Tree } from "./actors/Tree.js";
// start using objects
class MyGame extends Game {
    constructor() {
        super(...arguments);
        this.actors = [];
    }
    init() {
        this.actors.push(new Rectangle(100, 100, 50, 50));
        this.actors.push(new Rectangle(200, 200, 50, 50));
        this.actors.push(new Rectangle(300, 300, 50, 50));
        this.actors.push(new Circle(140, 100, 25));
        this.actors.push(new Circle(200, 200, 25));
        this.actors.push(new Circle(300, 300, 25));
        this.actors.push(new Circle(400, 400, 25));
        this.actors.push(new Circle(500, 500, 25));
        this.actors.push(new Circle(600, 600, 25));
        this.actors.push(new Tree(700, 100));
    }
    update(deltaTime) {
        console.log("Delta Time" + deltaTime);
        this.actors.forEach(r => r.update(deltaTime));
    }
    render(ctx) {
        ctx.clearRect(0, 0, 800, 600); // Clear the canvas
        this.actors.forEach(r => r.render(ctx));
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
console.log("test");

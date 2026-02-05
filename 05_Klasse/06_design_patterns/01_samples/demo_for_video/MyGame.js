// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
import { Rectangle } from "./actors/Rectangle.js";
import { Circle } from "./actors/Circle.js";
import { Tree } from "./actors/Tree.js";
import { RightMovement } from "./movements/RightMovement.js";
import { LeftMovement } from "./movements/LeftMovement.js";
import { Homer } from "./actors/Homer.js";
// start using objects
class MyGame extends Game {
    constructor() {
        super(...arguments);
        this.actors = [];
        this.observers = [];
    }
    init() {
        const r1 = new Rectangle(new RightMovement(20, 20, 60), 40, 60);
        const r2 = new Rectangle(new LeftMovement(100, 100, 20), 20, 20);
        const r3 = new Rectangle(new RightMovement(200, 150, 100), 100, 100);
        const c1 = new Circle(new LeftMovement(150, 300, 20), 20);
        const c2 = new Circle(new RightMovement(400, 200, 30), 30);
        this.actors.push(c1, c2);
        this.actors.push(r1, r2, r3);
        const t1 = new Tree(500, 500, 150);
        this.actors.push(t1);
        this.actors.push(new Tree(100, 450));
        this.actors.push(new Homer(new RightMovement(300, 300, 30)));
        this.addObserver(c1);
        this.addObserver(c2);
        this.addObserver(r1);
        this.addObserver(t1);
    }
    update(deltaTime) {
        this.actors.forEach((actor) => actor.update(deltaTime));
    }
    render(ctx) {
        this.actors.forEach((actor) => actor.render(ctx));
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    notifyObservers(event, data) {
        this.observers.forEach((observer) => observer.inform(event, data));
    }
    onMouseClick(x, y) {
        console.log(`Mouse clicked at (${x}, ${y})`);
        this.notifyObservers("click", { x, y });
    }
}
const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");

// MyGame - Example implementation of Game interface
import { ActorFactory } from "./ActorFactory.js";
import { Game, GameFramework } from "./GameFramework.js";
import { GameStandings } from "./actors/GameStandings.js";
import { Circle } from "./actors/Circle.js";
import { Rectangle } from "./actors/Rectangle.js";
// start using objects
class MyGame extends Game {
    constructor() {
        super(...arguments);
        this.actors = [];
        this.observers = [];
    }
    init() {
        const acts = [];
        const factory = new ActorFactory(800, 600);
        acts.push(...factory.createRandomActors(10));
        this.actors.push(...acts);
        const s1 = GameStandings.createInstance();
        this.actors.push(s1);
        const c1 = new Circle(factory["createRandomMovement"](), 20, s1);
        const c2 = new Circle(factory["createRandomMovement"](), 30, s1);
        this.actors.push(c1);
        this.actors.push(c2);
        const r1 = new Rectangle(factory["createRandomMovement"](), 40, 50);
        this.actors.push(r1);
        this.addObserver(c1);
        this.addObserver(c2);
        this.addObserver(r1);
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

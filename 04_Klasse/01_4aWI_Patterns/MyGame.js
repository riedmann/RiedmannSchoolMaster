// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
import { SuperCircle } from "./actors/SuperCircle.js";
class MyGame extends Game {
    constructor() {
        super(...arguments);
        this.actors = [];
    }
    init() {
        this.actors.push(new SuperCircle(200, 200, 50));
    }
    update(deltaTime) {
        // console.log("update:", deltaTime);
        this.actors.forEach((actor) => actor.move(deltaTime));
    }
    render(ctx) {
        this.actors.forEach((actor) => actor.render(ctx));
    }
}
const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");

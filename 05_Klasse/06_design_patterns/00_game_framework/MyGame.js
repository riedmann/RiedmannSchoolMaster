// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
class MyGame extends Game {
    constructor() {
        super(...arguments);
        this.x = 100;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    init() {
        console.log("Game started!");
    }
    update(deltaTime) {
        console.log("update:", deltaTime);
        this.x += 200 * deltaTime;
        if (this.x > 800) {
            this.x = -this.width;
        }
        this.width++;
    }
    render(ctx) {
        // Draw rectangle
        ctx.fillStyle = "#aaaaaa";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");

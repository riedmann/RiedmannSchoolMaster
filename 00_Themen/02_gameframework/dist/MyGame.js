// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./index.js";
// start using objects
class MyGame extends Game {
    constructor() {
        super(...arguments);
        this.x = 0;
        this.y = 0;
    }
    init() {
    }
    update(deltaTime) {
        console.log("Delta Time" + deltaTime);
        this.x += deltaTime * 100;
    }
    render(ctx) {
        ctx.clearRect(0, 0, 800, 600); // Clear the canvas
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, 50, 50); // Draw a rectangle at the current position
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

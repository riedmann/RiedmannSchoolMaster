// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
// start using objects
class MyGame extends Game {
    constructor() {
        super(...arguments);
        this.x = 100;
        this.y = 100;
    }
    init() { }
    update(deltaTime) {
        this.x += 50 * deltaTime; // Move right at 50 pixels per second
        if (this.x > 800)
            this.x = 0; // Wrap around the screen
    }
    render(ctx) {
        ctx.clearRect(0, 0, 800, 600); // Clear the canvas
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, 50, 50); // Draw a blue square
    }
    onMouseClick(x, y) { }
}
const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");

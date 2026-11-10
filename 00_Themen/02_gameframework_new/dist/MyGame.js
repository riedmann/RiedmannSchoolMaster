// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
import { Rectangle } from "./actors/Rectangle.js";
// start using objects
class MyGame extends Game {
    constructor() {
        super(...arguments);
        this.x = 100;
        this.y = 100;
        this.rectangle = null;
    }
    init() {
        this.rectangle = new Rectangle(200, 200, 100, 100);
    }
    update(deltaTime) {
        this.x += 50 * deltaTime; // Move right at 50 pixels per second
        if (this.x > 800)
            this.x = 0; // Wrap around the screen
        this.rectangle?.update(deltaTime);
    }
    render(ctx) {
        ctx.clearRect(0, 0, 800, 600); // Clear the canvas
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, 50, 50); // Draw a blue square
        if (this.rectangle) {
            this.rectangle.render(ctx);
        }
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

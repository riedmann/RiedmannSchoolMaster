// MyGame - Example implementation of Game interface

import { Game, GameFramework } from "./GameFramework.js";
import { Rectangle } from "./actors/Rectangle.js";

// start using objects
class MyGame extends Game {
    private x: number = 100;
    private y: number = 100;
    private rectangle: Rectangle | null = null;

    init(): void {
        this.rectangle = new Rectangle(200, 200, 100, 100);
    }

    update(deltaTime: number): void {
        this.x += 50 * deltaTime; // Move right at 50 pixels per second
        if (this.x > 800) this.x = 0; // Wrap around the screen
        this.rectangle?.update(deltaTime);
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.clearRect(0, 0, 800, 600); // Clear the canvas
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, 50, 50); // Draw a blue square
        if (this.rectangle) {
            this.rectangle.render(ctx);
        }
    }

    onMouseClick(x: number, y: number): void {
        console.log(`Mouse clicked at: (${x}, ${y})`);
    }

    onKeyDown(event: KeyboardEvent): void {
        console.log(`Key pressed: ${event.key}`);
    }
}

const game = new MyGame();
const framework = new GameFramework(game, 800, 600, "canvas");
framework.start();
console.log("test");

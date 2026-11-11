// MyGame - Example implementation of Game interface

import { Game, GameFramework } from "./index.js";
import { Rectangle } from "./actors/Rectangle.ts";
import { Circle } from "./actors/Circle.ts";
import { Actor } from "./actors/Actor.ts";
import { Tree } from "./actors/Tree.ts";


// start using objects
class MyGame extends Game {
    private x: number = 0;
    private y: number = 0;

    init(): void {

    }

    update(deltaTime: number): void {
        console.log("Delta Time" + deltaTime);
        this.x += deltaTime * 100

    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.clearRect(0, 0, 800, 600); // Clear the canvas
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, 50, 50); // Draw a rectangle at the current position

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

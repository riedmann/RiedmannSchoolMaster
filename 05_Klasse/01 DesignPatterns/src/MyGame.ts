// MyGame - Example implementation of Game interface

import { Actor } from "./actors/Actor.ts";
import { Circle } from "./actors/Circle.ts";
import { Rectangle } from "./actors/Rectangle.ts";
import { Tree } from "./actors/Tree.ts";
import { Game, GameFramework } from "./index.js";
import { LeftCircle } from "./actors/LeftCircle.ts";


// start using objects
class MyGame extends Game {
    private actors: Actor[] = [];


    init(): void {
        this.actors.push(new Rectangle(100, 100, 50, 50));
        this.actors.push(new Circle(140, 100, 25));
        this.actors.push(new Tree(700, 100));
        this.actors.push(new LeftCircle(600, 100, 25));
    }

    update(deltaTime: number): void {
        console.log("Delta Time" + deltaTime);
        this.actors.forEach(r => r.update(deltaTime));

    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.clearRect(0, 0, 800, 600); // Clear the canvas
        this.actors.forEach(r => r.render(ctx));

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

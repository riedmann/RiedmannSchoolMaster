// MyGame - Example implementation of Game interface

import { Actor } from "./actors/Actor.ts";
import { Car } from "./actors/Car.ts";
import { Rectangle } from "./actors/Rectangle.ts";
import { Tree } from "./actors/Tree.ts";
import { Game, GameFramework } from "./index.ts";
import { LeftMovement } from "./movements/LeftMovement.ts";
import { RightMovement } from "./movements/RightMovement.ts";
import { SinusMovement } from "./movements/SinusMovement.ts";


// start using objects
class MyGame extends Game {
    private actors: Actor[] = [];


    init(): void {
        this.actors.push(new Rectangle(10, 100, new LeftMovement(10, 100)));
        this.actors.push(new Tree(400, 300, new SinusMovement(400, 300)));
        this.actors.push(new Car(200, 200, new RightMovement(200, 200)));


    }

    update(deltaTime: number): void {
        this.actors.forEach(actor => actor.update(deltaTime));
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.clearRect(0, 0, 800, 600); // Clear the canvas
        this.actors.forEach(actor => actor.render(ctx));

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
console.log("test 1");

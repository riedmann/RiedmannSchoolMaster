// MyGame - Example implementation of Game interface

import { Actor } from "./actors/Actor.ts";
import { Car } from "./actors/Car.ts";
import { Circle } from "./actors/Circle.ts";
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
        let circle: Circle = new Circle(10, 100, 10, new LeftMovement(10, 100));
        this.actors.push(circle);

        let c1: Car = new Car(new RightMovement(100, 200));
        let c2: Car = new Car(new LeftMovement(300, 300));
        let rect: Rectangle = new Rectangle(200, 200, new RightMovement(200, 200));
        this.actors.push(rect);

        this.actors.push(c2);
        this.actors.push(c1);


        circle.addObserver(c1);
        circle.addObserver(c2);
        circle.addObserver(rect);


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

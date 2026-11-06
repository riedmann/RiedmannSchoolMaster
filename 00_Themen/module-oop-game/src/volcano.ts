// Volcano - Example implementation of World interface
import { Actor } from "./actors/Actor.ts";
import { Circle } from "./actors/Circle.ts";
import { Rectangle } from "./actors/Rectangle.ts";
import { InputManager } from "./timanfaya/InputManager.ts";
import { Key } from "./timanfaya/Key.ts";
import { Timanfaya } from "./timanfaya/Timanfaya.ts";
import { Universe } from "./timanfaya/Universe.ts";

class Volcano extends Universe {
    private actors: Actor[] = [];

    init(input: InputManager): void {
        // Create actors and add them to the list
        this.actors.push(new Rectangle(50, 50, 80, 80, 500));
        this.actors.push(new Circle(0, 100, 40, 200));

        for (const key of Object.values(Key)) {
            input.onJustPressed(key, () => console.log(`pressed: ${key}`));
            input.onReleased(key, () => console.log(`released: ${key}`));
        }
    }

    update(deltaTime: number): void {
        for (const actor of this.actors) {
            actor.move(deltaTime);
        }
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        for (const actor of this.actors) {
            actor.render(ctx);
        }
    }
}

const volcano = new Volcano();
const framework = new Timanfaya(volcano, 800, 600);
framework.start();

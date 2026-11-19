import { Actor } from "./Actor";
import { Movement } from "../movements/Movement.ts";
import { BaseActor } from "./BaseActor.ts";
import { Observer } from "../observer/Observer.tsx";

export class Rectangle extends BaseActor implements Observer {

    public inform() {
        console.log("Rectangle is informed");
    }

    constructor(private x: number, private y: number, movement: Movement) {
        super(movement);
    }

    // No need to override update as BaseActor already handles it

    public render(ctx: CanvasRenderingContext2D): void {
        console.log("in render" + this.x);

        ctx.fillStyle = "black"; // Set the fill color
        ctx.fillRect(this.movement.getX(), this.movement.getY(), 50, 50); // Fill the canvas with the color

    }
}
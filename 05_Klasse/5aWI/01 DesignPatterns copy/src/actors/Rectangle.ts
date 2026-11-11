import { Actor } from "./Actor";
import { Movement } from "../movements/Movement.ts";
import { BaseActor } from "./BaseActor.ts";

export class Rectangle extends BaseActor {

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
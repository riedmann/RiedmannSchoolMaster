import { Movement } from "../movements/Movement.ts";
import { Actor } from "./Actor";
import { BaseActor } from "./BaseActor.ts";


export class Circle extends BaseActor {


    constructor(protected x: number, protected y: number, protected radius: number, movement: Movement) {
        super(movement);
    }



    public render(ctx: CanvasRenderingContext2D): void {


        ctx.fillStyle = "black"; // Set the fill color
        ctx.beginPath();
        ctx.arc(this.movement.getX(), this.movement.getY(), this.radius, 0, Math.PI * 2); // Draw a circle with radius 25
        ctx.fill(); // Fill the circle with the color

    }
}
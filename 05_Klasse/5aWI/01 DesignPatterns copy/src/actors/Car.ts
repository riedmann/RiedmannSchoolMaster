import { BaseActor } from "./BaseActor.ts";
import { Movement } from "../movements/Movement.ts";

export class Car extends BaseActor {

    constructor(private x: number, private y: number, movement: Movement) {
        super(movement);
    }

    public render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.movement.getX(), this.movement.getY(), 100, 50);
    }
}
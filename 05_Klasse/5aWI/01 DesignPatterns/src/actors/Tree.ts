import { Actor } from "./Actor.ts";
import { Movement } from "../movements/Movement.ts";
import { BaseActor } from "./BaseActor.ts";
export class Tree extends BaseActor {

    constructor(private x: number, private y: number, movement: Movement) {
        super(movement);
    }

    // No need to override update as BaseActor already handles it

    public render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "green";
        ctx.fillRect(this.movement.getX(), this.movement.getY(), 50, 100);
    }
}


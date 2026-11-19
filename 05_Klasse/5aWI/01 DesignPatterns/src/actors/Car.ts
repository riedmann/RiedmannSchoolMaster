import { BaseActor } from "./BaseActor.ts";
import { Movement } from "../movements/Movement.ts";
import { Observer } from "../observer/Observer.tsx";

export class Car extends BaseActor implements Observer {

    constructor(movement: Movement) {
        super(movement);
    }

    public inform() {
        console.log("Circle is left");

    }

    public render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "orange";
        ctx.fillRect(this.movement.getX(), this.movement.getY(), 100, 50);
    }
}
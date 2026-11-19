import { BaseActor } from "./BaseActor.js";
export class Car extends BaseActor {
    constructor(movement) {
        super(movement);
    }
    inform() {
        console.log("Circle is left");
    }
    render(ctx) {
        ctx.fillStyle = "orange";
        ctx.fillRect(this.movement.getX(), this.movement.getY(), 100, 50);
    }
}

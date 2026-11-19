import { BaseActor } from "./BaseActor.js";
export class Car extends BaseActor {
    constructor(x, y, movement) {
        super(movement);
        this.x = x;
        this.y = y;
    }
    render(ctx) {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.movement.getX(), this.movement.getY(), 100, 50);
    }
}

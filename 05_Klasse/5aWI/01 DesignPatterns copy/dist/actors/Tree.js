import { BaseActor } from "./BaseActor.js";
export class Tree extends BaseActor {
    constructor(x, y, movement) {
        super(movement);
        this.x = x;
        this.y = y;
    }
    // No need to override update as BaseActor already handles it
    render(ctx) {
        ctx.fillStyle = "green";
        ctx.fillRect(this.movement.getX(), this.movement.getY(), 50, 100);
    }
}

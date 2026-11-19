import { BaseActor } from "./BaseActor.js";
export class Rectangle extends BaseActor {
    constructor(x, y, movement) {
        super(movement);
        this.x = x;
        this.y = y;
    }
    // No need to override update as BaseActor already handles it
    render(ctx) {
        console.log("in render" + this.x);
        ctx.fillStyle = "black"; // Set the fill color
        ctx.fillRect(this.movement.getX(), this.movement.getY(), 50, 50); // Fill the canvas with the color
    }
}

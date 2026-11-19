import { BaseActor } from "./BaseActor.js";
export class Circle extends BaseActor {
    constructor(x, y, radius, movement) {
        super(movement);
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    render(ctx) {
        ctx.fillStyle = "black"; // Set the fill color
        ctx.beginPath();
        ctx.arc(this.movement.getX(), this.movement.getY(), this.radius, 0, Math.PI * 2); // Draw a circle with radius 25
        ctx.fill(); // Fill the circle with the color
    }
}

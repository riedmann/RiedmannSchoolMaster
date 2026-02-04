import { AbstractActor } from "./AbstractActor.js";
export class Circle extends AbstractActor {
    constructor(movement, radius) {
        super(movement);
        this.movement = movement;
        this.radius = 1;
        if (radius !== undefined) {
            this.radius = radius;
        }
    }
    render(ctx) {
        console.log("in circle");
        ctx.fillStyle = "#FF66aa";
        ctx.beginPath();
        ctx.arc(this.movement.getX(), this.movement.getY(), this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}

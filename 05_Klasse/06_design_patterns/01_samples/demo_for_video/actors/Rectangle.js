import { AbstractActor } from "./AbstractActor.js";
export class Rectangle extends AbstractActor {
    constructor(movement, width, height) {
        super(movement);
        this.movement = movement;
        this.width = width;
        this.height = height;
    }
    render(ctx) {
        ctx.fillStyle = "#FF66aa";
        ctx.fillRect(this.movement.getX(), this.movement.getY(), this.width, this.height);
    }
}

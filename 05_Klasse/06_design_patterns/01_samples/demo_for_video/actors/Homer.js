import { AbstractActor } from "./AbstractActor.js";
export class Homer extends AbstractActor {
    constructor(movement) {
        super(movement);
        this.movement = movement;
    }
    render(ctx) {
        ctx.fillStyle = "#FFFF00";
        ctx.beginPath();
        ctx.arc(this.movement.getX(), this.movement.getY(), 20, 0, Math.PI * 2);
        ctx.fill();
        // eyes
        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.arc(this.movement.getX() - 7, this.movement.getY() - 5, 5, 0, Math.PI * 2);
        ctx.arc(this.movement.getX() + 7, this.movement.getY() - 5, 5, 0, Math.PI * 2);
        ctx.fill();
        // mouth
        ctx.strokeStyle = "#000000";
        ctx.beginPath();
        ctx.arc(this.movement.getX(), this.movement.getY() + 5, 10, 0, Math.PI);
        ctx.stroke();
    }
}

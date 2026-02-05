import { AbstractActor } from "./AbstractActor.js";
export class Circle extends AbstractActor {
    constructor(movement, radius) {
        super(movement);
        this.movement = movement;
        this.radius = 1;
        this.color = "#FF66aa";
        if (radius !== undefined) {
            this.radius = radius;
        }
    }
    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.movement.getX(), this.movement.getY(), this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
    inform(event, data) {
        console.log("i am a cicle" + event + " data" + data);
        if (event === "click") {
            // change color on click
            this.color = this.color === "#FF66aa" ? "#66aaff" : "#FF66aa";
        }
    }
}

import { GEO } from "./GEO.js";
export class Circle extends GEO {
    constructor(color, movement) {
        super(movement);
        this.color = color;
        this.movement = movement;
    }
    inform() {
        console.log("circle informed");
    }
    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.movement.getX(), this.movement.getY(), 50, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "white";
        ctx.fillText("Circle", this.movement.getX() + 10, this.movement.getY() + 30);
    }
    targetReached() {
        console.log("Car info");
    }
}

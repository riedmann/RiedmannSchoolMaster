import { GEO } from "./GEO.js";
export class Rect extends GEO {
    constructor(color, movement) {
        super(movement);
        this.color = color;
        this.movement = movement;
    }
    inform() {
        console.log("rect informed");
    }
    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.movement.getX(), this.movement.getY(), 100, 50);
        ctx.fillStyle = "white";
        ctx.fillText("Rect", this.movement.getX() + 10, this.movement.getY() + 30);
    }
    targetReached() {
        console.log("Car info");
    }
}

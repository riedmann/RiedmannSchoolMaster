import { BaseActor } from "./BaseActor.js";
export class Circle extends BaseActor {
    constructor(x, y, radius, movement) {
        super(movement);
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.observers = [];
        this.sentMessage = false;
    }
    update(delta) {
        this.movement.update(delta);
        if (!this.sentMessage && this.movement.getX() < 50) {
            for (let observer of this.observers) {
                observer.inform();
            }
            this.sentMessage = true;
        }
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    render(ctx) {
        ctx.fillStyle = "black"; // Set the fill color
        ctx.beginPath();
        ctx.arc(this.movement.getX(), this.movement.getY(), this.radius, 0, Math.PI * 2); // Draw a circle with radius 25
        ctx.fill(); // Fill the circle with the color
    }
}

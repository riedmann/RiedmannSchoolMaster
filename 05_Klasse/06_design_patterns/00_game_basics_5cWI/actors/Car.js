import { GEO } from "./GEO.js";
export class Car extends GEO {
    constructor(color, movement) {
        super(movement);
        this.color = color;
        this.movement = movement;
        this.interested = [];
    }
    notifyObservers() {
        if (this.movement.getX() > 400) {
            this.interested.forEach((observer) => observer.inform());
        }
    }
    addInterested(observer) {
        this.interested.push(observer);
    }
    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.movement.getX(), this.movement.getY(), 100, 50);
        ctx.fillStyle = "white";
        ctx.fillText("Car", this.movement.getX() + 10, this.movement.getY() + 30);
    }
    move() {
        super.move();
        this.notifyObservers();
    }
}

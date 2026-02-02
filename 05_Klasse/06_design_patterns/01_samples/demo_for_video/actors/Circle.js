export class Circle {
    constructor(movement, radius) {
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
    update(deltaTime) {
        this.movement.update(deltaTime, 10);
    }
}

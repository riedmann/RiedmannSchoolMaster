export class Circle {
    constructor(movement, radius) {
        this.movement = movement;
        this.radius = radius;
    }
    render(ctx) {
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(this.movement.getPosition().x, this.movement.getPosition().y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
    update(deltaTime) {
        this.movement.update(deltaTime);
    }
}

export class Rectangle {
    constructor(movement, width, height) {
        this.movement = movement;
        this.width = width;
        this.height = height;
    }
    render(ctx) {
        ctx.fillStyle = "#FF66aa";
        ctx.fillRect(this.movement.getX(), this.movement.getY(), this.width, this.height);
    }
    update(deltaTime) {
        this.movement.update(deltaTime, 10);
    }
}

export class Rectangle {
    constructor(movement, width, height) {
        this.movement = movement;
        this.width = width;
        this.height = height;
    }
    render(ctx) {
        ctx.fillStyle = "blue";
        const position = this.movement.getPosition();
        ctx.fillRect(position.x, position.y, this.width, this.height);
    }
    update(deltaTime) {
        this.movement.update(deltaTime);
    }
}

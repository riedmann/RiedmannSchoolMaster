export class Rectangle {
    constructor(width, height, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }
    update(deltaTime) {
        this.x += 100 * deltaTime; // Move 100 pixels per second
        this.y += 50 * deltaTime; // Move 100 pixels per second
    }
    render(ctx) {
        ctx.fillStyle = "#66aaff";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

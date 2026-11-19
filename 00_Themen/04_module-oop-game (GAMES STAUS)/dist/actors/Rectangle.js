export class Rectangle {
    constructor(x, y, width, height, speedX) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speedX = speedX;
    }
    render(ctx) {
        ctx.fillStyle = "#66aaff";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    move(deltaTime) {
        this.x += deltaTime * this.speedX;
        this.y += deltaTime * 100; // Move 100 pixels per second
    }
}

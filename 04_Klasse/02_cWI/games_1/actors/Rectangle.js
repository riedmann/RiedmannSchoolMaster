export class Rectangle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    update(deltaTime) {
        this.x -= 300 * deltaTime; // Move 100 pixels per second
        if (this.x < -100) {
            this.x = 800; // Reset position when it goes off screen
        }
    }
    render(ctx) {
        ctx.fillStyle = "#aabbff";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

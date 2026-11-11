export class Rectangle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    render(ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    update(deltaTime) {
        this.x += 100 * deltaTime; // Move right at 100 pixels per second
        if (this.x > 800)
            this.x = 0; // Wrap around the screen
    }
}

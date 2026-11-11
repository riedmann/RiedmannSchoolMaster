export class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    render(ctx) {
        console.log(`Rendering circle at (${this.x}, ${this.y})`);
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
    update(deltaTime) {
        this.x += 100 * deltaTime; // Move right at 100 pixels per second
        if (this.x > 800)
            this.x = 0; // Wrap around the screen
    }
    jump() { }
}

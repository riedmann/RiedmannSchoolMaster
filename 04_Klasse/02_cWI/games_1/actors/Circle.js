export class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    update(deltaTime) {
        this.x -= 300 * deltaTime; // Move 100 pixels per second
        this.y += 200 * deltaTime; // Move 100 pixels per second    
        if (this.x + this.radius < 0) {
            this.x = 800 + this.radius; // Reset position when it goes off screen
        }
        if (this.y - this.radius > 600) {
            this.y = -this.radius; // Reset position when it goes off screen
        }
    }
    render(ctx) {
        ctx.fillStyle = "#ffaaaa";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}

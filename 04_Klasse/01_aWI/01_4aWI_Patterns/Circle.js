export class Circle {
    constructor(x, y, radius, color = "blue") {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
    move(delta) {
        this.x += delta * 1100; // Move to the right at a speed of 0.1 pixels per millisecond
    }
}

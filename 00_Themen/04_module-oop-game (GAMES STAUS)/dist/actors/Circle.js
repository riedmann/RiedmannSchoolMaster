export class Circle {
    constructor(x, y, radius, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
        this.baseY = y;
    }
    render(ctx) {
        ctx.fillStyle = "#ff6600";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
    move(deltaTime) {
        this.x += deltaTime * this.speed;
        this.y = this.baseY + 50 * Math.sin(this.x / 50); // amplitude 50 px, wavelength ≈ 314 px
    }
}

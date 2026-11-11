import { Actor } from "./Actor";

export class Circle implements Actor {
    x: number;
    y: number;
    radius: number;

    constructor(x: number, y: number, radius: number) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    public render(ctx: CanvasRenderingContext2D): void {
        console.log(`Rendering circle at (${this.x}, ${this.y})`);
        ctx.fillStyle = "blue"
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }

    public update(deltaTime: number): void {
        this.x += 100 * deltaTime; // Move right at 100 pixels per second
        if (this.x > 800) this.x = 0; // Wrap around the screen
    }

    public jump() { }
}
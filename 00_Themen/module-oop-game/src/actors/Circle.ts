import { Actor } from "./Actor.ts";

export class Circle implements Actor {
    private readonly baseY: number;

    constructor(
        public x: number,
        public y: number,
        public radius: number,
        public speed: number, // pixels per second
    ) {
        this.baseY = y;
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "#ff6600";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }

    move(deltaTime: number): void {
        this.x += deltaTime * this.speed;
        this.y = this.baseY + 50 * Math.sin(this.x / 50); // amplitude 50 px, wavelength ≈ 314 px
    }
}

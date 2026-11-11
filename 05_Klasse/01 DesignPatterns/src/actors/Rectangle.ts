import { Actor } from "./Actor";

export class Rectangle implements Actor {
    private x: number;
    private y: number;
    private width: number;
    private height: number;

    constructor(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    public render(ctx: CanvasRenderingContext2D): void {

        ctx.fillStyle = "red"
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    public update(deltaTime: number): void {
        this.x += 100 * deltaTime; // Move right at 100 pixels per second
        if (this.x > 800) this.x = 0; // Wrap around the screen
    }
}
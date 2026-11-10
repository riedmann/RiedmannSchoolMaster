import { Actor } from "./Actor";
import { BaseShape, Shape } from "../Shape";

export class Rectangle extends BaseShape implements Shape {
    private x: number;
    private y: number;
    private width: number;
    private height: number;

    constructor(x: number, y: number, width: number, height: number) {
        const bounds = { x: x, y: y, width: width, height: height };
        super(bounds);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.bounds = { x: this.x, y: this.y, width: this.width, height: this.height };
    }

    // Removed constructor as it is now defined above with super() call

    update(deltaTime: number): void {
        // Example update logic (move to the right)
        this.x += 100 * deltaTime;
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "#66aaff";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

import { Actor } from "./Actor.js";
export class Rectangle implements Actor {
    constructor(public x: number, public y: number, public width: number, public height: number) {
    }

    update(deltaTime: number): void {
        this.x -= 300 * deltaTime; // Move 100 pixels per second
        if (this.x < -100) {
            this.x = 800; // Reset position when it goes off screen
        }
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "#aabbff";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
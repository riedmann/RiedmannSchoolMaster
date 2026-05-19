import { Actor } from "./Actor.js";

export class Circle implements Actor {
    constructor(public x: number, public y: number, public radius: number) {
    }

    update(deltaTime: number): void {
        this.x -= 300 * deltaTime; // Move 100 pixels per second
        this.y += 200 * deltaTime; // Move 100 pixels per second    
        if (this.x + this.radius < 0) {
            this.x = 800 + this.radius; // Reset position when it goes off screen
        }

        if (this.y - this.radius > 600) {
            this.y = -this.radius; // Reset position when it goes off screen
        }
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "#ffaaaa";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}
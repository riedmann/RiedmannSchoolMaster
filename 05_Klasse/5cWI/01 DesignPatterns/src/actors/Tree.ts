import { Actor } from "./Actor.ts";
export class Tree implements Actor {
    x: number;
    y: number;



    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    update(deltaTime: number): void {
        // Trees might not move, but you could add logic here if needed
    }
    render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, 50, 100); // Simple representation of a tree
    }

}
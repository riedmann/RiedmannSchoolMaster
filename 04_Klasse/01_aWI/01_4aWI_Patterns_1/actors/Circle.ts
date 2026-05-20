import { MoveStrategy } from "../movement/MoveStrategy";
import { Actor } from "./Actor";
export class Circle implements Actor {
    constructor(private radius: number, private movement: MoveStrategy) { }

    setRadius(radius: number): void {
        // if radius is valid
        this.radius = radius;
    }

    update(deltaTime: number): void {
        this.movement.update(deltaTime);

    }

    render(ctx: CanvasRenderingContext2D): void {
        const position = this.movement.getPosition();
        ctx.beginPath();
        ctx.arc(position.x, position.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#ff6666";
        ctx.fill();
    }
}


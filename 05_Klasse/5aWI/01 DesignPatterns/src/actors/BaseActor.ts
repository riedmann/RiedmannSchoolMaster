import { Movement } from "../movements/Movement.ts";
import { Actor } from "./Actor.ts";

export class BaseActor implements Actor {
    constructor(protected movement: Movement) { }
    update(delta: number): void {
        this.movement.update(delta);
    }

    render(ctx: CanvasRenderingContext2D): void {
        // Default render logic (can be overridden by subclasses)
    }
}
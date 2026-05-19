import { MoveStrategy } from "./MoveStrategy.js";
export class DiagonalMovement implements MoveStrategy {
    private time: number = 0;
    constructor(private x: number,
        private y: number,
        private speed: number, // pixels per second
    ) { }

    update(deltaTime: number): void {
        this.x += this.speed * deltaTime;
        this.y += this.speed * deltaTime;
    }

    getPosition(): { x: number; y: number } {
        return {
            x: this.x,
            y: this.y
        };
    }
}
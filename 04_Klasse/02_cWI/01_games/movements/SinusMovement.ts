import { MoveStrategy } from "./MoveStrategy.js";
export class SinusMovement implements MoveStrategy {
    private time: number = 0;
    constructor(private x: number, private y: number, private amplitude: number, private frequency: number) {
    }

    update(deltaTime: number): void {
        this.time += deltaTime;
        this.x += 100 * deltaTime; // Move 100 pixels per second
        this.y = this.y + this.amplitude * Math.sin(this.frequency * this.time);
    }

    getPosition(): { x: number, y: number } {
        return { x: this.x, y: this.y };
    }

}
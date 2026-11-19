import { Movement } from "./Movement.ts";

export class SinusMovement implements Movement {
    private x: number;
    private y: number;
    private amplitude: number;
    private frequency: number;

    constructor(x: number, y: number, amplitude: number = 50, frequency: number = 1) {
        this.x = x;
        this.y = y;
        this.amplitude = amplitude;
        this.frequency = frequency;
    }

    public update(delta: number): void {
        this.x += delta * 100;
        this.y = this.amplitude * Math.sin(this.frequency * this.x) + this.y;
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }
}
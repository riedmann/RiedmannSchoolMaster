export class SinusMovement {
    constructor(x, y, amplitude, frequency) {
        this.x = x;
        this.y = y;
        this.amplitude = amplitude;
        this.frequency = frequency;
        this.time = 0;
    }
    update(deltaTime) {
        this.time += deltaTime;
        this.x += 100 * deltaTime; // Move 100 pixels per second
        this.y = this.y + this.amplitude * Math.sin(this.frequency * this.time);
    }
    getPosition() {
        return { x: this.x, y: this.y };
    }
}

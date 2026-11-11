export class SinusMovement {
    constructor(x, y, amplitude = 50, frequency = 1) {
        this.x = x;
        this.y = y;
        this.amplitude = amplitude;
        this.frequency = frequency;
    }
    update(delta) {
        this.x += delta * 100;
        this.y = this.amplitude * Math.sin(this.frequency * this.x) + this.y;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
}

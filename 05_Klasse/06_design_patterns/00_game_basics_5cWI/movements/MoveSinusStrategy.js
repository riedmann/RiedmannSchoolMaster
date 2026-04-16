export class MoveSinusStrategy {
    constructor(x, y, speed, amplitude) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.amplitude = amplitude;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y + Math.sin(this.x * 0.01) * this.amplitude; // Sinusoidal movement
    }
    move() {
        this.x += this.speed * 0.016; // Move based on speed (assuming 60 FPS)
        if (this.x > 600) {
            this.x = -100; // Reset position when it goes off screen
        }
    }
}

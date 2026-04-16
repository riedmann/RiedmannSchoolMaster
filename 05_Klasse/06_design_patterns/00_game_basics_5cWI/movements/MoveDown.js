export class MoveDown {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    move() {
        this.x += this.speed * 0.016; // Move based on speed (assuming 60 FPS)
        if (this.x > 600) {
            this.x = -100; // Reset position when it goes off screen
        }
    }
}

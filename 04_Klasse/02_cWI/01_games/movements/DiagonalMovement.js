export class DiagonalMovement {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.time = 0;
    }
    update(deltaTime) {
        this.x += this.speed * deltaTime;
        this.y += this.speed * deltaTime;
    }
    getPosition() {
        return {
            x: this.x,
            y: this.y
        };
    }
}

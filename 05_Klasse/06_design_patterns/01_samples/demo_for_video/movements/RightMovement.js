export class RightMovement {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
    }
    update(deltaTime, x) {
        this.x += this.speed * deltaTime;
        if (this.x > 800) {
            this.x = 0;
        }
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
}

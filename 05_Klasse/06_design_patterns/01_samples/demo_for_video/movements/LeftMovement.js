export class LeftMovement {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
    }
    update(deltaTime, x) {
        this.x -= this.speed * deltaTime;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
}

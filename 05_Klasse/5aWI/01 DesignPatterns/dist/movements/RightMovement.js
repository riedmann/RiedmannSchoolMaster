export class RightMovement {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = Math.random() * 200 + 20;
    }
    update(delta) {
        this.x += delta * this.speed;
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

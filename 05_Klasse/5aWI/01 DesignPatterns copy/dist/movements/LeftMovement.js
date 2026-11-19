export class LeftMovement {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = Math.random() * 200 + 20;
    }
    update(delta) {
        this.x -= delta * this.speed;
        if (this.x < 0) {
            this.x = 800;
        }
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
}

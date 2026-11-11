export class RightMovement {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    update(delta) {
        this.x += delta * 400;
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

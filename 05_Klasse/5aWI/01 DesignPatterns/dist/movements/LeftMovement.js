export class LeftMovement {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    update(delta) {
        this.x -= delta * 400;
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

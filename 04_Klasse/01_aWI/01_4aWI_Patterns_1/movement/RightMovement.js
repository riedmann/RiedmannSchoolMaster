export class RightMovement {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    update(deltaTime) {
        this.x += 100 * deltaTime; // Move 100 pixels per second to the right
    }
    getPosition() {
        return { x: this.x, y: this.y };
    }
}

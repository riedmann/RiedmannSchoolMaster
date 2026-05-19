import { Rectangle } from "./Rectangle.js";
export class RightRectangle extends Rectangle {
    constructor(x, y, width, height) {
        super(x, y, width, height);
    }
    update(deltaTime) {
        this.x += 300 * deltaTime; // Move 100 pixels per second
    }
}

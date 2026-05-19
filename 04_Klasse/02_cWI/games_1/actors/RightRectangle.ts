import { Rectangle } from "./Rectangle.js";

export class RightRectangle extends Rectangle {
    constructor(x: number, y: number, width: number, height: number) {
        super(x, y, width, height);
    }

    update(deltaTime: number): void {
        this.x += 300 * deltaTime; // Move 100 pixels per second
    }
}
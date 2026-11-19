import { Circle } from "./Circle.js";
export class LeftCircle extends Circle {
    update(delta) {
        this.x -= delta * 400;
        if (this.x < 0) {
            this.x = 800;
        }
    }
}

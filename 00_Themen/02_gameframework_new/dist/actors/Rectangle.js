import { BaseShape } from "../Shape";
export class Rectangle extends BaseShape {
    constructor(x, y, width, height) {
        const bounds = { x: x, y: y, width: width, height: height };
        super(bounds);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.bounds = { x: this.x, y: this.y, width: this.width, height: this.height };
    }
    // Removed constructor as it is now defined above with super() call
    update(deltaTime) {
        // Example update logic (move to the right)
        this.x += 100 * deltaTime;
    }
    render(ctx) {
        ctx.fillStyle = "#66aaff";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

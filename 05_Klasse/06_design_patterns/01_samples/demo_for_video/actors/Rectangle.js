export class Rectangle {
    constructor(x, y, width, height) {
        this.width = 40;
        this.height = 40;
        this.x = x;
        this.y = y;
        if (width !== undefined) {
            this.width = width;
        }
        if (height !== undefined) {
            this.height = height;
        }
    }
    render(ctx) {
        ctx.fillStyle = "#FF66aa";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    update(deltaTime) {
        this.x += 200 * deltaTime;
    }
}

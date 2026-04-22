export class Star {
    constructor(name, x, y) {
        this.name = name;
        this.x = x;
        this.y = y;
    }
    move() { }
    render(ctx) {
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.arc(this.x, this.y, 30, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "black";
        ctx.fillText(this.name, this.x + 10, this.y + 20);
    }
}

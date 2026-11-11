export class Tree {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    update(deltaTime) {
        // Trees might not move, but you could add logic here if needed
    }
    render(ctx) {
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, 50, 100); // Simple representation of a tree
    }
}

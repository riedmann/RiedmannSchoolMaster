export class Tree {
    constructor(x, y, size) {
        this.size = 100;
        this.x = x;
        this.y = y;
        if (size !== undefined) {
            this.size = size;
        }
    }
    render(ctx) {
        const trunkWidth = this.size * 0.2;
        const trunkHeight = this.size * 0.4;
        const crownRadius = this.size * 0.4;
        // Draw trunk
        ctx.fillStyle = "#8B4513";
        ctx.fillRect(this.x - trunkWidth / 2, this.y - trunkHeight, trunkWidth, trunkHeight);
        // Draw crown (three overlapping circles for a fluffy tree effect)
        ctx.fillStyle = "#228B22";
        // Bottom crown circle
        ctx.beginPath();
        ctx.arc(this.x, this.y - trunkHeight, crownRadius, 0, Math.PI * 2);
        ctx.fill();
        // Left crown circle
        ctx.beginPath();
        ctx.arc(this.x - crownRadius * 0.6, this.y - trunkHeight - crownRadius * 0.3, crownRadius * 0.8, 0, Math.PI * 2);
        ctx.fill();
        // Right crown circle
        ctx.beginPath();
        ctx.arc(this.x + crownRadius * 0.6, this.y - trunkHeight - crownRadius * 0.3, crownRadius * 0.8, 0, Math.PI * 2);
        ctx.fill();
        // Top crown circle
        ctx.beginPath();
        ctx.arc(this.x, this.y - trunkHeight - crownRadius * 0.6, crownRadius * 0.9, 0, Math.PI * 2);
        ctx.fill();
    }
    update(deltaTime) {
        // Trees don't move
    }
}

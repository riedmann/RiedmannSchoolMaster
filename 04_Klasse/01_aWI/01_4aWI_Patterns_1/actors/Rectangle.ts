export class Rectangle {
    constructor(private width: number, private height: number, private x: number, private y: number) {   }  

    update(deltaTime: number): void {
        this.x += 100 * deltaTime;  // Move 100 pixels per second
        this.y += 50 * deltaTime;  // Move 100 pixels per second
    }   

    render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "#66aaff";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }   
}
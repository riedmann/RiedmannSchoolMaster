export class Circle{
    constructor(private radius: number,private x: number, private y: number) {   }

    setRadius(radius: number): void {
        // if radius is valid
        this.radius = radius;
    }

    update(deltaTime: number): void {
        this.x += 100 * deltaTime; // Move 100 pixels per second
        this.y += 100 * deltaTime; // Move 100 pixels per second
    }  

    render(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#ff6666";
        ctx.fill();
    }
}

const circle:Circle = new Circle(50, 100, 100);
circle.setRadius(75);
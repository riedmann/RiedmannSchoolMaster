export class Circle {
  private x: number;
  private y: number;
  private radius: number = 40;

  constructor(x: number, y: number, radius?: number) {
    this.x = x;
    this.y = y;
    if (radius !== undefined) {
      this.radius = radius;
    }
  }

  render(ctx: CanvasRenderingContext2D): void {
    console.log("in circle");

    ctx.fillStyle = "#FF66aa";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  update(deltaTime: number): void {
    this.y += 200 * deltaTime;
  }
}

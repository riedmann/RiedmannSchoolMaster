export class Rectangle {
  private x: number;
  private y: number;
  private width: number = 40;
  private height: number = 40;

  constructor(x: number, y: number, width?: number, height?: number) {
    this.x = x;
    this.y = y;
    if (width !== undefined) {
      this.width = width;
    }
    if (height !== undefined) {
      this.height = height;
    }
  }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "#FF66aa";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update(deltaTime: number): void {
    this.x += 200 * deltaTime;
  }
}

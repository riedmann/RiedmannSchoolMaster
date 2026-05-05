import { Actor } from "./Actor";

export class Rectangle implements Actor {
  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number,
    public color: string = "red",
  ) {}

  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  move(deltaX: number): void {
    this.x++;
  }
}

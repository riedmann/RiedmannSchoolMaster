import { Actor } from "./Actor";

export class Circle implements Actor {
  constructor(
    public x: number,
    public y: number,
    public radius: number,
    public color: string = "blue",
  ) {}

  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  move(delta: number): void {
    this.x += delta * 1100; // Move to the right at a speed of 0.1 pixels per millisecond
  }
}

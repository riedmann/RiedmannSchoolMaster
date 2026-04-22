import { Actor } from "./Actor.js";

export class Star implements Actor {
  constructor(
    public name: string,
    public x: number,
    public y: number,
  ) {}
  move(): void {}
  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(this.x, this.y, 30, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.fillText(this.name, this.x + 10, this.y + 20);
  }
}

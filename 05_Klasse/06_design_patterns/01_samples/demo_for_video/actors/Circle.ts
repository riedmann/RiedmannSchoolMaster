import { Actor } from "./Actor.js";
import { MoveStrategy } from "../movements/MoveStrategy.js";

export class Circle implements Actor {
  private radius: number = 1;

  constructor(
    private movement: MoveStrategy,
    radius?: number,
  ) {
    if (radius !== undefined) {
      this.radius = radius;
    }
  }

  render(ctx: CanvasRenderingContext2D): void {
    console.log("in circle");

    ctx.fillStyle = "#FF66aa";
    ctx.beginPath();
    ctx.arc(
      this.movement.getX(),
      this.movement.getY(),
      this.radius,
      0,
      Math.PI * 2,
    );
    ctx.fill();
  }

  update(deltaTime: number): void {
    this.movement.update(deltaTime, 10);
  }
}

import { MoveStrategy } from "../movements/MoveStrategy.js";
import { Actor } from "./Actor.js";
export class Rectangle implements Actor {
  constructor(
    private movement: MoveStrategy,
    private width: number,
    private height: number,
  ) {}

  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "#FF66aa";
    ctx.fillRect(
      this.movement.getX(),
      this.movement.getY(),
      this.width,
      this.height,
    );
  }

  update(deltaTime: number): void {
    this.movement.update(deltaTime, 10);
  }
}

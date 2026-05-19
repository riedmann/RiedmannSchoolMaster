import { Actor } from "./Actor.js";
import { MoveStrategy } from "./../movements/MoveStrategy.js";
export class Circle implements Actor {
  constructor(
    private movement: MoveStrategy,
    private radius: number,
  ) { }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(this.movement.getPosition().x, this.movement.getPosition().y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  update(deltaTime: number): void {
    this.movement.update(deltaTime);
  }
}

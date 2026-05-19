import { Actor } from "./Actor.js";
import { MoveStrategy } from "../movements/MoveStrategy.js";

export class Rectangle implements Actor {

  constructor(
    private movement: MoveStrategy,
    private width: number,
    private height: number,
  ) { }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "blue";
    const position = this.movement.getPosition();
    ctx.fillRect(position.x, position.y, this.width, this.height);
  }

  update(deltaTime: number): void {
    this.movement.update(deltaTime);

  }
}

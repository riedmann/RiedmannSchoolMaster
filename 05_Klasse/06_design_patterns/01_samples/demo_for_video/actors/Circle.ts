import { AbstractActor } from "./AbstractActor.js";
import { MoveStrategy } from "../movements/MoveStrategy.js";

export class Circle extends AbstractActor {
  private radius: number = 1;

  constructor(
    protected movement: MoveStrategy,
    radius?: number,
  ) {
    super(movement);
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
}

import { MoveStrategy } from "../movements/MoveStrategy.js";
import { Observer } from "../observers/Observer.js";
import { GEO } from "./GEO.js";

export class Circle extends GEO implements Observer {
  constructor(
    public color: string,
    public movement: MoveStrategy,
  ) {
    super(movement);
  }

  inform(): void {
    console.log("circle informed");
  }

  public render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.movement.getX(), this.movement.getY(), 50, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "white";
    ctx.fillText(
      "Circle",
      this.movement.getX() + 10,
      this.movement.getY() + 30,
    );
  }

  targetReached(): void {
    console.log("Car info");
  }
}

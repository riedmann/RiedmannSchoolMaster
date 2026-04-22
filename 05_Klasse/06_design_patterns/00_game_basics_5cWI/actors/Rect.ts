import { MoveStrategy } from "../movements/MoveStrategy.js";
import { Observer } from "../../observer/Observer.js";
import { GEO } from "./GEO.js";
export class Rect extends GEO implements Observer {
  constructor(
    public color: string,

    public movement: MoveStrategy,
  ) {
    super(movement);
  }
  inform(): void {
    console.log("rect informed");
  }

  public render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.movement.getX(), this.movement.getY(), 100, 50);
    ctx.fillStyle = "white";
    ctx.fillText("Rect", this.movement.getX() + 10, this.movement.getY() + 30);
  }

  targetReached(): void {
    console.log("Car info");
  }
}

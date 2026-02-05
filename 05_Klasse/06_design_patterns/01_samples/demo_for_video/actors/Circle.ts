import { AbstractActor } from "./AbstractActor.js";
import { MoveStrategy } from "../movements/MoveStrategy.js";
import { Observer } from "../observer/Observer.js";

export class Circle extends AbstractActor implements Observer {
  private radius: number = 1;
  private color: string = "#FF66aa";

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
    ctx.fillStyle = this.color;
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

  inform(event: string, data?: any): void {
    console.log("i am a cicle" + event + " data" + data);
    if (event === "click") {
      // change color on click
      this.color = this.color === "#FF66aa" ? "#66aaff" : "#FF66aa";
    }
  }
}

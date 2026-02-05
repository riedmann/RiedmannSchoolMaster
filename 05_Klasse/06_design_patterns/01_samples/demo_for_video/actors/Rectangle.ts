import { MoveStrategy } from "../movements/MoveStrategy.js";
import { Actor } from "./Actor.js";
import { AbstractActor } from "./AbstractActor.js";
import { Observer } from "../observer/Observer.js";
import { GameStandings } from "./GameStandings.js";

export class Rectangle extends AbstractActor implements Observer {
  private score: GameStandings = GameStandings.createInstance();
  constructor(
    protected movement: MoveStrategy,
    private width: number,
    private height: number,
  ) {
    super(movement);
  }
  inform(event: string, data?: any): void {
    this.width += 5;
    this.height += 5;
    this.score.increaseScore(10);
  }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "#FF66aa";
    ctx.fillRect(
      this.movement.getX(),
      this.movement.getY(),
      this.width,
      this.height,
    );
  }
}

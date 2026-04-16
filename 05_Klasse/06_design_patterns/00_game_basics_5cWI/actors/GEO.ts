import { Actor } from "./Actor.js";
import { MoveStrategy } from "../movements/MoveStrategy.js";

export abstract class GEO implements Actor {
  constructor(public movement: MoveStrategy) {}

  public move(): void {
    this.movement.move();
  }

  public abstract render(ctx: CanvasRenderingContext2D): void;
}

import { Actor } from "./Actor";
import { MoveStrategy } from "../movements/MoveStrategy";
export abstract class AbstractActor implements Actor {
  abstract render(ctx: CanvasRenderingContext2D): void;

  constructor(protected movement: MoveStrategy) {}
  update(deltaTime: number): void {
    this.movement.update(deltaTime, 10);
  }
}

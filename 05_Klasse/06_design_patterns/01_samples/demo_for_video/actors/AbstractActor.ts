import { MoveStrategy } from "../movements/MoveStrategy.js";
export abstract class AbstractActor {
  constructor(protected movement: MoveStrategy) {}

  update(deltaTime: number): void {
    this.movement.update(deltaTime, 10);
  }
}

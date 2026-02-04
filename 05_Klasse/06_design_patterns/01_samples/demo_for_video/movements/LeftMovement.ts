import { MoveStrategy } from "./MoveStrategy.js";
export class LeftMovement implements MoveStrategy {
  constructor(
    private x: number,
    private y: number,
    private speed: number,
  ) {}
  update(deltaTime: number, x: number) {
    this.x -= this.speed * deltaTime;
    if (this.x < 0) {
      this.x = 800;
    }
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }
}

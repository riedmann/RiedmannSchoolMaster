import { MoveStrategy } from "./MoveStrategy.js";
export class MoveRightStrategy implements MoveStrategy {
  private x: number;
  private y: number;
  private speed: number;

  constructor(x: number, y: number, speed: number) {
    this.x = x;
    this.y = y;
    this.speed = speed;
  }

  public getX(): number {
    return this.x;
  }

  public getY(): number {
    return this.y;
  }

  public move(): void {
    this.x += this.speed * 0.016; // Move based on speed (assuming 60 FPS)
    if (this.x > 600) {
      this.x = -100; // Reset position when it goes off screen
    }
  }
}

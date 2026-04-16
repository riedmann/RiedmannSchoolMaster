import { MoveStrategy } from "./MoveStrategy.js";
export class MoveSinusStrategy implements MoveStrategy {
  private x: number;
  private y: number;
  private speed: number;
  private amplitude: number;

  constructor(x: number, y: number, speed: number, amplitude: number) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.amplitude = amplitude;
  }

  public getX(): number {
    return this.x;
  }

  public getY(): number {
    return this.y + Math.sin(this.x * 0.01) * this.amplitude; // Sinusoidal movement
  }

  public move(): void {
    this.x += this.speed * 0.016; // Move based on speed (assuming 60 FPS)
    if (this.x > 600) {
      this.x = -100; // Reset position when it goes off screen
    }
  }
}

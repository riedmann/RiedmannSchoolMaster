import { MoveStrategy } from "../movements/MoveStrategy.js";
import { Observable } from "../observers/Observable.js";
import { Observer } from "../observers/Observer.js";
import { GEO } from "./GEO.js";

export class Car extends GEO implements Observable {
  private interested: Observer[] = [];

  constructor(
    public color: string,
    public movement: MoveStrategy,
  ) {
    super(movement);
  }
  notifyObservers(): void {
    if (this.movement.getX() > 400) {
      this.interested.forEach((observer) => observer.inform());
    }
  }

  public addInterested(observer: Observer): void {
    this.interested.push(observer);
  }

  public render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.movement.getX(), this.movement.getY(), 100, 50);
    ctx.fillStyle = "white";
    ctx.fillText("Car", this.movement.getX() + 10, this.movement.getY() + 30);
  }

  public move(): void {
    super.move();
    this.notifyObservers();
  }
}

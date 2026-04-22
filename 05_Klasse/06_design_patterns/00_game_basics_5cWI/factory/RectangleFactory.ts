import { Actor } from "../actors/Actor.js";
import { Rect } from "../actors/Rect.js";
import { MoveRightStrategy } from "../movements/MoveRightStrategy.js";
import { ActorFactory } from "./ActorFactory.js";

export class RectangleFactory implements ActorFactory {
  private static readonly COLORS = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33F5",
    "#F5FF33",
    "#33FFF5",
    "#FF8C33",
    "#8C33FF",
    "#33FF8C",
    "#FF3333",
  ];

  public createActors(count: number): Actor[] {
    const actors: Actor[] = [];

    for (let i = 0; i < count; i++) {
      const color = this.getRandomColor();
      const x = this.getRandomPosition();
      const y = this.getRandomPosition();
      const speed = this.getRandomSpeed();

      const movement = new MoveRightStrategy(x, y, speed);
      const rect = new Rect(color, movement);

      actors.push(rect);
    }

    return actors;
  }

  private getRandomColor(): string {
    return RectangleFactory.COLORS[
      Math.floor(Math.random() * RectangleFactory.COLORS.length)
    ];
  }

  private getRandomPosition(): number {
    // Generate random position between 400 and 600
    return Math.floor(Math.random() * (600 - 400 + 1)) + 400;
  }

  private getRandomSpeed(): number {
    // Generate random speed between 50 and 200
    return Math.floor(Math.random() * (200 - 50 + 1)) + 50;
  }
}

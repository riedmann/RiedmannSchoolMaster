export interface Bounds {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Shape {
  bounds: Bounds;
  intersects(other: Shape): boolean;
}

export abstract class BaseShape implements Shape {
  constructor(public bounds: Bounds) {}

  /**
   * Check whether the bounding rectangles overlap. Touching edges do not count.
   * Bounds must have positive width and height.
   */
  intersects(other: Shape): boolean {
    const a = this.bounds;
    const b = other.bounds;

    return (
      a.x < b.x + b.width &&
      a.x + a.width > b.x &&
      a.y < b.y + b.height &&
      a.y + a.height > b.y
    );
  }
}

export class Rectangle extends BaseShape {
  constructor(x: number, y: number, width: number, height: number) {
    super({ x, y, width, height });
  }
}

export interface Actor {
  move(): void;
  render(ctx: CanvasRenderingContext2D): void;
}

export abstract class A1 {
  move(): void {}
  abstract render(ctx: CanvasRenderingContext2D): void;
}

class Tree extends A1 {
  render(ctx: CanvasRenderingContext2D): void {
    throw new Error("Method not implemented.");
  }
}

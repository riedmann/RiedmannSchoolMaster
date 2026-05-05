import { Actor } from "../actors/Actor.js";

/**
 * Base Decorator class that wraps an Actor
 * Delegates all calls to the wrapped actor by default
 */
export abstract class ActorDecorator implements Actor {
  constructor(protected wrappedActor: Actor) {}

  render(ctx: CanvasRenderingContext2D): void {
    this.wrappedActor.render(ctx);
  }

  move(delta: number): void {
    this.wrappedActor.move(delta);
  }
}

import { ActorDecorator } from "./ActorDecorator.js";
import { Actor } from "../actors/Actor.js";

/**
 * Concrete Decorator that adds text to any actor
 */
export class TextDecorator extends ActorDecorator {
  constructor(
    wrappedActor: Actor,
    private text: string,
    private offsetX: number = 0,
    private offsetY: number = -20,
    private font: string = "16px Arial",
    private color: string = "black"
  ) {
    super(wrappedActor);
  }

  render(ctx: CanvasRenderingContext2D): void {
    // First render the wrapped actor
    super.render(ctx);

    // Then add the text decoration
    ctx.save();
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.textAlign = "center";
    ctx.fillText(this.text, this.getX() + this.offsetX, this.getY() + this.offsetY);
    ctx.restore();
  }

  /**
   * Helper method to get the X position of the wrapped actor
   * Assumes the actor has an x property (works with Circle, Rectangle, etc.)
   */
  private getX(): number {
    return (this.wrappedActor as any).x || 0;
  }

  /**
   * Helper method to get the Y position of the wrapped actor
   * Assumes the actor has a y property (works with Circle, Rectangle, etc.)
   */
  private getY(): number {
    return (this.wrappedActor as any).y || 0;
  }

  /**
   * Update the text dynamically
   */
  setText(newText: string): void {
    this.text = newText;
  }
}

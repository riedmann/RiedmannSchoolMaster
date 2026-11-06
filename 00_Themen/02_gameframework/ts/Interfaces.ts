/**
 * Framework-internal interfaces.
 * These are used by the engine to interact with actors.
 * User-facing interfaces (e.g. Actor) should extend these.
 */

/** An object the engine can update each frame. */
export interface Updatable {
    move(deltaTime: number): void;
}

/** An object the engine can render each frame. */
export interface Renderable {
    render(ctx: CanvasRenderingContext2D): void;
}

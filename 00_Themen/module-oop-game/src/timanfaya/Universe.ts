import { Camera, StaticCamera } from "./Camera.ts";
import { InputManager } from "./InputManager.ts";

/**
 * Abstract base class for all games.
 * Extend this class and implement init(), update(), and render().
 */
export abstract class Universe {
    /**
     * The active camera strategy. Set via constructor, defaults to StaticCamera.
     * Accessed by the engine each frame — do not call begin/end manually.
     */
    camera: Camera;

    constructor(camera: Camera = new StaticCamera()) {
        this.camera = camera;
    }

    /**
     * Called once when the game starts.
     * Use this to subscribe to input events and set up initial state.
     * @param input - The framework's input manager for subscribing to key events
     */
    abstract init(input: InputManager): void;

    /**
     * Called every frame. Update positions, logic, etc.
     * @param deltaTime - Seconds elapsed since the last frame (~0.016 at 60 fps)
     * @param input - The framework's input manager (available for per-frame polling if needed)
     */
    abstract update(deltaTime: number, input: InputManager): void;

    /**
     * Called every frame after update(). Draw world-space content using ctx.
     * The camera transform is already applied by the engine — draw at world coordinates.
     * @param ctx - The canvas 2D rendering context
     */
    abstract render(ctx: CanvasRenderingContext2D): void;

    /**
     * Optional. Called after render(), with the camera transform removed.
     * Use this for HUD elements (score, lives) that should stay fixed on screen.
     * @param ctx - The canvas 2D rendering context
     */
    renderHUD?(ctx: CanvasRenderingContext2D): void;
}

export { Camera, StaticCamera };
export type { InputManager };

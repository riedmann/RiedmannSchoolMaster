import { Key } from "./Key.js";
/**
 * Manages keyboard input via a subscription model.
 * The engine creates one instance and injects it into the game each frame.
 * Game code never touches DOM events directly.
 *
 * Usage (in Universe.init):
 *   input.onJustPressed(Key.Space, () => player.jump());
 *   input.onPressed(Key.ArrowRight, () => player.startMoveRight());
 *   input.onReleased(Key.ArrowRight, () => player.stopMoveRight());
 */
export class InputManager {
    constructor() {
        this.held = new Set();
        this.justPressed = new Set();
        this.justReleased = new Set();
        this.justPressedCallbacks = new Map();
        this.pressedCallbacks = new Map();
        this.releasedCallbacks = new Map();
        const validKeys = new Set(Object.values(Key));
        window.addEventListener("keydown", (e) => {
            const key = e.code;
            if (validKeys.has(key) && !this.held.has(key)) {
                this.held.add(key);
                this.justPressed.add(key);
            }
        });
        window.addEventListener("keyup", (e) => {
            const key = e.code;
            if (validKeys.has(key)) {
                this.held.delete(key);
                this.justReleased.add(key);
            }
        });
    }
    /** Subscribe to a key being pressed down (fires once per keypress). */
    onJustPressed(key, cb) {
        if (!this.justPressedCallbacks.has(key)) {
            this.justPressedCallbacks.set(key, new Set());
        }
        this.justPressedCallbacks.get(key).add(cb);
    }
    /** Subscribe to a key being held down (fires every frame while held). */
    onPressed(key, cb) {
        if (!this.pressedCallbacks.has(key)) {
            this.pressedCallbacks.set(key, new Set());
        }
        this.pressedCallbacks.get(key).add(cb);
    }
    /** Subscribe to a key being released (fires once per release). */
    onReleased(key, cb) {
        if (!this.releasedCallbacks.has(key)) {
            this.releasedCallbacks.set(key, new Set());
        }
        this.releasedCallbacks.get(key).add(cb);
    }
    /**
     * Called by the engine at the start of each frame.
     * Fires all due callbacks: justPressed, held, and released.
     */
    dispatchEvents() {
        for (const key of this.justPressed) {
            this.justPressedCallbacks.get(key)?.forEach((cb) => cb());
        }
        for (const key of this.held) {
            this.pressedCallbacks.get(key)?.forEach((cb) => cb());
        }
        for (const key of this.justReleased) {
            this.releasedCallbacks.get(key)?.forEach((cb) => cb());
        }
    }
    /**
     * Called by the engine at the end of each frame.
     * Flushes single-frame state so justPressed/Released fire only once.
     */
    endFrame() {
        this.justPressed.clear();
        this.justReleased.clear();
    }
}

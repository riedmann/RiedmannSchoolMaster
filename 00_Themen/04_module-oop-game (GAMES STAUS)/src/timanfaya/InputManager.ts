import { Key } from "./Key.ts";

type KeyCallback = () => void;

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
    private held: Set<Key> = new Set();
    private justPressed: Set<Key> = new Set();
    private justReleased: Set<Key> = new Set();

    private justPressedCallbacks: Map<Key, Set<KeyCallback>> = new Map();
    private pressedCallbacks: Map<Key, Set<KeyCallback>> = new Map();
    private releasedCallbacks: Map<Key, Set<KeyCallback>> = new Map();

    constructor() {
        const validKeys = new Set<string>(Object.values(Key));

        window.addEventListener("keydown", (e) => {
            const key = e.code;
            if (validKeys.has(key) && !this.held.has(key as Key)) {
                this.held.add(key as Key);
                this.justPressed.add(key as Key);
            }
        });

        window.addEventListener("keyup", (e) => {
            const key = e.code;
            if (validKeys.has(key)) {
                this.held.delete(key as Key);
                this.justReleased.add(key as Key);
            }
        });
    }

    /** Subscribe to a key being pressed down (fires once per keypress). */
    onJustPressed(key: Key, cb: KeyCallback): void {
        if (!this.justPressedCallbacks.has(key)) {
            this.justPressedCallbacks.set(key, new Set());
        }
        this.justPressedCallbacks.get(key)!.add(cb);
    }

    /** Subscribe to a key being held down (fires every frame while held). */
    onPressed(key: Key, cb: KeyCallback): void {
        if (!this.pressedCallbacks.has(key)) {
            this.pressedCallbacks.set(key, new Set());
        }
        this.pressedCallbacks.get(key)!.add(cb);
    }

    /** Subscribe to a key being released (fires once per release). */
    onReleased(key: Key, cb: KeyCallback): void {
        if (!this.releasedCallbacks.has(key)) {
            this.releasedCallbacks.set(key, new Set());
        }
        this.releasedCallbacks.get(key)!.add(cb);
    }

    /**
     * Called by the engine at the start of each frame.
     * Fires all due callbacks: justPressed, held, and released.
     */
    dispatchEvents(): void {
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
    endFrame(): void {
        this.justPressed.clear();
        this.justReleased.clear();
    }
}

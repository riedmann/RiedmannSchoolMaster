import { Renderable, Updatable } from "./Interfaces.ts";

/**
 * Abstract base class for actors that need physics (velocity, gravity, jumping).
 * Extend this instead of implementing Actor directly when the actor should move
 * under gravity and respond to physics forces.
 *
 * The game is responsible for setting onGround each frame based on collision.
 *
 * Usage:
 *   class Player extends PhysicsActor {
 *       render(ctx) { ... }
 *   }
 */
export abstract class PhysicsActor implements Updatable, Renderable {
    public vx: number = 0;
    public vy: number = 0;
    public onGround: boolean = false;

    constructor(
        public x: number,
        public y: number,
        public readonly gravity: number = 980,
    ) {}

    abstract render(ctx: CanvasRenderingContext2D): void;

    /**
     * Integrates gravity and velocity into position.
     * Call this once per frame from Universe.update().
     */
    move(deltaTime: number): void {
        this.vy += this.gravity * deltaTime;
        this.x += this.vx * deltaTime;
        this.y += this.vy * deltaTime;
    }

    /**
     * Applies an upward impulse. Only fires when the actor is on the ground,
     * preventing mid-air double jumps.
     * @param speed - Upward velocity in px/s (positive value)
     */
    jump(speed: number): void {
        if (this.onGround) {
            this.vy = -speed;
            this.onGround = false;
        }
    }

    /** Begin moving right at the given speed (px/s). */
    startMoveRight(speed: number = 200): void {
        this.vx = speed;
    }

    /** Begin moving left at the given speed (px/s). */
    startMoveLeft(speed: number = 200): void {
        this.vx = -speed;
    }

    /** Stop horizontal movement. */
    stopMoveHorizontal(): void {
        this.vx = 0;
    }
}

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
export class PhysicsActor {
    constructor(x, y, gravity = 980) {
        this.x = x;
        this.y = y;
        this.gravity = gravity;
        this.vx = 0;
        this.vy = 0;
        this.onGround = false;
    }
    /**
     * Integrates gravity and velocity into position.
     * Call this once per frame from Universe.update().
     */
    move(deltaTime) {
        this.vy += this.gravity * deltaTime;
        this.x += this.vx * deltaTime;
        this.y += this.vy * deltaTime;
    }
    /**
     * Applies an upward impulse. Only fires when the actor is on the ground,
     * preventing mid-air double jumps.
     * @param speed - Upward velocity in px/s (positive value)
     */
    jump(speed) {
        if (this.onGround) {
            this.vy = -speed;
            this.onGround = false;
        }
    }
    /** Begin moving right at the given speed (px/s). */
    startMoveRight(speed = 200) {
        this.vx = speed;
    }
    /** Begin moving left at the given speed (px/s). */
    startMoveLeft(speed = 200) {
        this.vx = -speed;
    }
    /** Stop horizontal movement. */
    stopMoveHorizontal() {
        this.vx = 0;
    }
}

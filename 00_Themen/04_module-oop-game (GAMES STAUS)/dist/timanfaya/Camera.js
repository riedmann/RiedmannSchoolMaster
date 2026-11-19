/**
 * No-op camera. World coordinates equal screen coordinates.
 * Default camera for games where the entire world fits on screen.
 */
export class StaticCamera {
    update() { }
    begin(ctx) {
        ctx.save();
    }
    end(ctx) {
        ctx.restore();
    }
}
/**
 * Follows a target object, keeping it centered on screen.
 * The world appears to scroll while the target stays fixed at screen center.
 */
export class FollowCamera {
    constructor(target, screenWidth, screenHeight) {
        this.target = target;
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.x = 0;
        this.y = 0;
    }
    update() {
        this.x = this.target.x;
        this.y = this.target.y;
    }
    begin(ctx) {
        ctx.save();
        ctx.translate(-this.x + this.screenWidth / 2, -this.y + this.screenHeight / 2);
    }
    end(ctx) {
        ctx.restore();
    }
}
/**
 * Smoothly interpolates toward the target (cinematic follow).
 * @param lerpFactor - How quickly the camera catches up (0–1, higher = snappier).
 */
export class LerpCamera {
    constructor(target, screenWidth, screenHeight, lerpFactor = 0.1) {
        this.target = target;
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.lerpFactor = lerpFactor;
        this.x = 0;
        this.y = 0;
        this.x = target.x;
        this.y = target.y;
    }
    update() {
        this.x += (this.target.x - this.x) * this.lerpFactor;
        this.y += (this.target.y - this.y) * this.lerpFactor;
    }
    begin(ctx) {
        ctx.save();
        ctx.translate(-this.x + this.screenWidth / 2, -this.y + this.screenHeight / 2);
    }
    end(ctx) {
        ctx.restore();
    }
}
/**
 * Follows the target but clamps to world boundaries so the camera
 * never shows outside the world area.
 */
export class BoundedCamera {
    constructor(target, screenWidth, screenHeight, worldWidth, worldHeight) {
        this.target = target;
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.worldWidth = worldWidth;
        this.worldHeight = worldHeight;
        this.x = 0;
        this.y = 0;
    }
    update() {
        const halfW = this.screenWidth / 2;
        const halfH = this.screenHeight / 2;
        this.x = Math.max(halfW, Math.min(this.target.x, this.worldWidth - halfW));
        this.y = Math.max(halfH, Math.min(this.target.y, this.worldHeight - halfH));
    }
    begin(ctx) {
        ctx.save();
        ctx.translate(-this.x + this.screenWidth / 2, -this.y + this.screenHeight / 2);
    }
    end(ctx) {
        ctx.restore();
    }
}

/**
 * Strategy interface for cameras.
 * All actors render at world coordinates. The camera applies a canvas transform
 * so that world-space drawing is automatically offset to screen space.
 *
 * Usage in Universe.render():
 *   // The engine calls begin/end around render() automatically.
 *   // Just draw actors at their world x/y — no conversion needed.
 */
export interface Camera {
    /** Recompute the camera position. Called by the engine once per frame before render. */
    update(): void;

    /**
     * Save canvas state and apply the camera transform.
     * Called by the engine before Universe.render().
     */
    begin(ctx: CanvasRenderingContext2D): void;

    /**
     * Restore canvas state, removing the camera transform.
     * Called by the engine after Universe.render(), before renderHUD().
     */
    end(ctx: CanvasRenderingContext2D): void;
}

/**
 * No-op camera. World coordinates equal screen coordinates.
 * Default camera for games where the entire world fits on screen.
 */
export class StaticCamera implements Camera {
    update(): void {}

    begin(ctx: CanvasRenderingContext2D): void {
        ctx.save();
    }

    end(ctx: CanvasRenderingContext2D): void {
        ctx.restore();
    }
}

/**
 * Follows a target object, keeping it centered on screen.
 * The world appears to scroll while the target stays fixed at screen center.
 */
export class FollowCamera implements Camera {
    private x: number = 0;
    private y: number = 0;

    constructor(
        private target: { x: number; y: number },
        private screenWidth: number,
        private screenHeight: number,
    ) {}

    update(): void {
        this.x = this.target.x;
        this.y = this.target.y;
    }

    begin(ctx: CanvasRenderingContext2D): void {
        ctx.save();
        ctx.translate(-this.x + this.screenWidth / 2, -this.y + this.screenHeight / 2);
    }

    end(ctx: CanvasRenderingContext2D): void {
        ctx.restore();
    }
}

/**
 * Smoothly interpolates toward the target (cinematic follow).
 * @param lerpFactor - How quickly the camera catches up (0–1, higher = snappier).
 */
export class LerpCamera implements Camera {
    private x: number = 0;
    private y: number = 0;

    constructor(
        private target: { x: number; y: number },
        private screenWidth: number,
        private screenHeight: number,
        private lerpFactor: number = 0.1,
    ) {
        this.x = target.x;
        this.y = target.y;
    }

    update(): void {
        this.x += (this.target.x - this.x) * this.lerpFactor;
        this.y += (this.target.y - this.y) * this.lerpFactor;
    }

    begin(ctx: CanvasRenderingContext2D): void {
        ctx.save();
        ctx.translate(-this.x + this.screenWidth / 2, -this.y + this.screenHeight / 2);
    }

    end(ctx: CanvasRenderingContext2D): void {
        ctx.restore();
    }
}

/**
 * Follows the target but clamps to world boundaries so the camera
 * never shows outside the world area.
 */
export class BoundedCamera implements Camera {
    private x: number = 0;
    private y: number = 0;

    constructor(
        private target: { x: number; y: number },
        private screenWidth: number,
        private screenHeight: number,
        private worldWidth: number,
        private worldHeight: number,
    ) {}

    update(): void {
        const halfW = this.screenWidth / 2;
        const halfH = this.screenHeight / 2;

        this.x = Math.max(halfW, Math.min(this.target.x, this.worldWidth - halfW));
        this.y = Math.max(halfH, Math.min(this.target.y, this.worldHeight - halfH));
    }

    begin(ctx: CanvasRenderingContext2D): void {
        ctx.save();
        ctx.translate(-this.x + this.screenWidth / 2, -this.y + this.screenHeight / 2);
    }

    end(ctx: CanvasRenderingContext2D): void {
        ctx.restore();
    }
}

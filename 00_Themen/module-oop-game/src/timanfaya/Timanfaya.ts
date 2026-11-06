import { InputManager } from "./InputManager.ts";
import { Universe } from "./Universe.ts";

/**
 * An object that can be added to the scene independently of the Universe class.
 */
export interface TimanfayaObject {
    x: number;
    y: number;
    width: number;
    height: number;
    update?: (deltaTime: number) => void;
    render?: (ctx: CanvasRenderingContext2D) => void;
}

/**
 * Core framework class. Manages the canvas, game loop, and scene objects.
 *
 * Usage:
 *   const framework = new Timanfaya(game, 800, 600);
 *   framework.start();
 */
export class Timanfaya {
    private universe: Universe;
    private width: number;
    private height: number;
    private gameObjects: TimanfayaObject[] = [];
    private running: boolean = false;
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private lastFrameTime: number = 0;
    private input: InputManager = new InputManager();

    constructor(
        universe: Universe,
        width: number = 800,
        height: number = 600,
        canvasId: string = "canvas",
    ) {
        if (!(universe instanceof Universe)) {
            throw new Error("game must be an instance of Game");
        }

        this.universe = universe;
        this.width = width;
        this.height = height;

        const existing = document.getElementById(canvasId) as HTMLCanvasElement | null;

        if (existing) {
            this.canvas = existing;
        } else {
            this.canvas = document.createElement("canvas");
            this.canvas.id = canvasId;
            document.body.appendChild(this.canvas);
        }
        this.canvas.width = width;
        this.canvas.height = height;

        const context = this.canvas.getContext("2d");
        if (!context) {
            throw new Error("Could not get 2D context from canvas");
        }
        this.ctx = context;
    }

    /** Add an object to the scene. It will be updated and rendered automatically. */
    addObject(obj: TimanfayaObject): void {
        this.gameObjects.push(obj);
    }

    /** Remove an object from the scene. */
    removeObject(obj: TimanfayaObject): void {
        const index = this.gameObjects.indexOf(obj);
        if (index > -1) {
            this.gameObjects.splice(index, 1);
        }
    }

    /** Clear the canvas with a background color (default white). */
    clearCanvas(color: string = "#ffffff"): void {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    /** Draw a filled rectangle. */
    drawRect(x: number, y: number, width: number, height: number, color: string = "#000000"): void {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, width, height);
    }

    /** Draw a filled circle. */
    drawCircle(x: number, y: number, radius: number, color: string = "#000000"): void {
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI * 2);
        this.ctx.fill();
    }

    /** Draw text on the canvas. */
    drawText(
        text: string,
        x: number,
        y: number,
        color: string = "#000000",
        fontSize: number = 16,
    ): void {
        this.ctx.fillStyle = color;
        this.ctx.font = `${fontSize}px Arial`;
        this.ctx.fillText(text, x, y);
    }

    /** Start the game loop. */
    start(): void {
        if (this.running) return;
        this.running = true;
        this.universe.init(this.input);
        requestAnimationFrame((time) => this.gameLoop(time));
    }

    /** Stop the game loop. */
    stop(): void {
        this.running = false;
    }

    private gameLoop(currentTime: number): void {
        if (this.lastFrameTime === 0) {
            this.lastFrameTime = currentTime;
        }

        const deltaTime = (currentTime - this.lastFrameTime) / 1000;
        this.lastFrameTime = currentTime;

        // Input
        this.input.dispatchEvents();

        // Update
        this.universe.update(deltaTime, this.input);
        for (const obj of this.gameObjects) {
            obj.update?.(deltaTime);
        }

        // Render — camera wraps the world-space draw calls
        this.clearCanvas();
        for (const obj of this.gameObjects) {
            obj.render?.(this.ctx);
        }
        this.universe.camera.update();
        this.universe.camera.begin(this.ctx);
        this.universe.render(this.ctx);
        this.universe.camera.end(this.ctx);
        this.universe.renderHUD?.(this.ctx);

        // End of frame
        this.input.endFrame();

        if (this.running) {
            requestAnimationFrame((time) => this.gameLoop(time));
        }
    }
}

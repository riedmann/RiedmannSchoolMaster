import { StaticCamera } from "./Camera.js";
/**
 * Abstract base class for all games.
 * Extend this class and implement init(), update(), and render().
 */
export class Universe {
    constructor(camera = new StaticCamera()) {
        this.camera = camera;
    }
}
export { StaticCamera };

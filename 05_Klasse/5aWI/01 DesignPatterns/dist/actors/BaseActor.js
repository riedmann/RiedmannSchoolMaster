export class BaseActor {
    constructor(movement) {
        this.movement = movement;
    }
    update(delta) {
        this.movement.update(delta);
    }
    render(ctx) {
        // Default render logic (can be overridden by subclasses)
    }
}

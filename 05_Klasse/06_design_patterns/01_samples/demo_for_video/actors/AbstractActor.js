export class AbstractActor {
    constructor(movement) {
        this.movement = movement;
    }
    update(deltaTime) {
        this.movement.update(deltaTime, 10);
    }
}

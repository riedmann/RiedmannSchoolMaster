interface Actor {
    move(): void;
}

class Circle implements Actor {
    private moveStrategy: MoveStrtegy;

    constructor(moveStrtegy: MoveStrtegy) {
        this.moveStrategy = moveStrtegy;
    }

    move(): void {
        console.log("Circle is moving");
    }
}

interface MoveStrtegy {
    move(actor: Actor): void;
}

class MoveLeft implements MoveStrtegy {
    move(actor: Actor): void {
        console.log("Moving left");
        actor.move();
    }
}
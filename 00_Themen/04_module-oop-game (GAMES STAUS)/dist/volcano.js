import { Circle } from "./actors/Circle.js";
import { Rectangle } from "./actors/Rectangle.js";
import { Key } from "./timanfaya/Key.js";
import { Timanfaya } from "./timanfaya/Timanfaya.js";
import { Universe } from "./timanfaya/Universe.js";
class Volcano extends Universe {
    constructor() {
        super(...arguments);
        this.actors = [];
    }
    init(input) {
        // Create actors and add them to the list
        this.actors.push(new Rectangle(50, 50, 80, 80, 500));
        this.actors.push(new Circle(0, 100, 40, 200));
        for (const key of Object.values(Key)) {
            input.onJustPressed(key, () => console.log(`pressed: ${key}`));
            input.onReleased(key, () => console.log(`released: ${key}`));
        }
    }
    update(deltaTime) {
        for (const actor of this.actors) {
            actor.move(deltaTime);
        }
    }
    render(ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        for (const actor of this.actors) {
            actor.render(ctx);
        }
    }
}
const volcano = new Volcano();
const framework = new Timanfaya(volcano, 800, 600);
framework.start();

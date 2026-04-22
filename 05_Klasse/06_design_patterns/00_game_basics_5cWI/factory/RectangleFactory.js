import { Rect } from "../actors/Rect.js";
import { MoveRightStrategy } from "../movements/MoveRightStrategy.js";
export class RectangleFactory {
    createActors(count) {
        const actors = [];
        for (let i = 0; i < count; i++) {
            const color = this.getRandomColor();
            const x = this.getRandomPosition();
            const y = this.getRandomPosition();
            const speed = this.getRandomSpeed();
            const movement = new MoveRightStrategy(x, y, speed);
            const rect = new Rect(color, movement);
            actors.push(rect);
        }
        return actors;
    }
    getRandomColor() {
        return RectangleFactory.COLORS[Math.floor(Math.random() * RectangleFactory.COLORS.length)];
    }
    getRandomPosition() {
        // Generate random position between 400 and 600
        return Math.floor(Math.random() * (600 - 400 + 1)) + 400;
    }
    getRandomSpeed() {
        // Generate random speed between 50 and 200
        return Math.floor(Math.random() * (200 - 50 + 1)) + 50;
    }
}
RectangleFactory.COLORS = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33F5",
    "#F5FF33",
    "#33FFF5",
    "#FF8C33",
    "#8C33FF",
    "#33FF8C",
    "#FF3333",
];

import { Movement } from "../movements/Movement.ts";
import { Observer } from "../observer/Observer.ts";
import { Actor } from "./Actor";
import { BaseActor } from "./BaseActor.ts";
import { Car } from "./Car.ts";


export class Circle extends BaseActor {
    private observers: Observer[] = [];

    private sentMessage = false;

    constructor(protected x: number, protected y: number, protected radius: number, movement: Movement) {
        super(movement);
    }

    update(delta: number): void {
        this.movement.update(delta);
        if (!this.sentMessage && this.movement.getX() < 50) {
            for (let observer of this.observers) {
                observer.inform();
            }
            this.sentMessage = true;
        }
    }

    public addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    public render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "black"; // Set the fill color
        ctx.beginPath();
        ctx.arc(this.movement.getX(), this.movement.getY(), this.radius, 0, Math.PI * 2); // Draw a circle with radius 25
        ctx.fill(); // Fill the circle with the color

    }
}
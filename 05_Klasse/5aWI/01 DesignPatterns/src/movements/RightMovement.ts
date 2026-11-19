export class RightMovement {
    private speed: number = Math.random() * 200 + 20;
    constructor(private x: number, private y: number) { }
    public update(delta: number): void {
        this.x += delta * this.speed;
        if (this.x > 800) {
            this.x = 0;
        }
    }
    getX(): number {
        return this.x;
    }
    getY(): number {
        return this.y;
    }
}
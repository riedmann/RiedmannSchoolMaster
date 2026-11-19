export class LeftMovement {
    constructor(private x: number, private y: number) { }
    public update(delta: number): void {
        this.x -= delta * 400;
        if (this.x < 0) {
            this.x = 800;
        }
    }
    getX(): number {
        return this.x;
    }
    getY(): number {
        return this.y;
    }
}
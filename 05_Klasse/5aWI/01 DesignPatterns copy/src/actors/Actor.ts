export interface Actor {
    update(delta: number): void;
    render(ctx: CanvasRenderingContext2D): void;
}
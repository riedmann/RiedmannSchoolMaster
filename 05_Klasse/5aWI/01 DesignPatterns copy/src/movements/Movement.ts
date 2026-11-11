export interface Movement {
    update(delta: number): void;
    getX(): number;
    getY(): number;
}
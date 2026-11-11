export class BaseShape {
    constructor(bounds) {
        this.bounds = bounds;
    }
    /**
     * Check whether the bounding rectangles overlap. Touching edges do not count.
     * Bounds must have positive width and height.
     */
    intersects(other) {
        const a = this.bounds;
        const b = other.bounds;
        return (a.x < b.x + b.width &&
            a.x + a.width > b.x &&
            a.y < b.y + b.height &&
            a.y + a.height > b.y);
    }
}
export class Rectangle extends BaseShape {
    constructor(x, y, width, height) {
        super({ x, y, width, height });
    }
}

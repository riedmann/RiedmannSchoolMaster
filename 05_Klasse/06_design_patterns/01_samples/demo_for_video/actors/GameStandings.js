export class GameStandings {
    constructor(x, y, score) {
        this.x = x;
        this.y = y;
        this.score = score;
    }
    static createInstance() {
        if (this.instance !== null) {
            return this.instance;
        }
        this.instance = new GameStandings(10, 30, 0);
        return this.instance;
    }
    render(ctx) {
        ctx.fillStyle = "black";
        ctx.font = "20px Arial";
        ctx.fillText(`Score: ${this.score}`, this.x, this.y);
    }
    update(deltaTime) { }
    increaseScore(amount) {
        this.score += amount;
    }
}
GameStandings.instance = null;

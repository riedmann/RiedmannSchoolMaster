// MyGame - Example implementation of Game interface

class MyGame extends Game {
  x = 0;
  y = 0;
  width = 100;
  init() {
    console.log("Game started!");
  }

  update(deltaTime) {
    this.x++;
    this.y++;
    this.width++;
  }

  render(ctx) {
    ctx.fillStyle = "#FF66aa";
    ctx.fillRect(this.x, this.y, this.width, 50);
  }
}

const game = new MyGame();

const framework = new GameFramework(game, 800, 600);
framework.start();

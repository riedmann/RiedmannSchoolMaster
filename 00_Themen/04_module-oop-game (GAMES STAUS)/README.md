# Game Framework

A simple 2D browser game framework based on the HTML Canvas API.

## Project structure

```
src/
  actors/
    Actor.ts          ← Actor interface
    Circle.ts
    Rectangle.ts
  timanfaya/
    Camera.ts
    InputManager.ts
    Interfaces.ts
    Key.ts
    PhysicsActor.ts
    Timanfaya.ts
    Universe.ts
  volcano.ts          ← example game
model/                ← UML diagrams (PlantUML sources + SVGs)
dist/                 ← compiled output (generated)
volcano.html
package.json
tsconfig.json
```

---

## Development – auto-compile on save

Instead of running `tsc` manually after every change, use **watch mode** so
TypeScript recompiles automatically whenever you save a `.ts` file.

```bash
npm run dev
```

Stop the watcher with `Ctrl+C`.

---

## Actors

Actors are individual game objects. Every actor implements the `Actor`
interface:

```ts
interface Actor {
    render(ctx: CanvasRenderingContext2D): void; // draw the actor
    move(delta: number): void; // update position (delta = seconds since last frame)
}
```

### Available actors

| Class       | File                      | What it does                                                                                        |
| ----------- | ------------------------- | --------------------------------------------------------------------------------------------------- |
| `Rectangle` | `src/actors/Rectangle.ts` | Light-blue (`#66aaff`) filled rectangle, moves diagonally (`speedX` px/s on x, 100 px/s on y)       |
| `Circle`    | `src/actors/Circle.ts`    | Orange (`#ff6600`) filled circle, moves along a sine wave (`speed` px/s on x, amplitude 50 px on y) |

### Using actors in your game

Store actors in an array, update them in `update()`, and draw them in
`render()`:

```ts
import { Universe } from "./timanfaya/Universe.ts";
import { InputManager } from "./timanfaya/InputManager.ts";
import { Actor } from "./actors/Actor.ts";
import { Rectangle } from "./actors/Rectangle.ts";
import { Circle } from "./actors/Circle.ts";

class MyGame extends Universe {
    private actors: Actor[] = [];

    init(input: InputManager): void {
        this.actors.push(new Rectangle(50, 50, 80, 80, 500));
        this.actors.push(new Circle(0, 100, 40, 200));
    }

    update(deltaTime: number, input: InputManager): void {
        for (const actor of this.actors) {
            actor.move(deltaTime);
        }
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        for (const actor of this.actors) {
            actor.render(ctx);
        }
    }
}
```

> Place your game file inside `src/` so that imports like
> `./timanfaya/Universe.ts` resolve correctly.

### Creating your own actor

Implement the `Actor` interface in a new class:

```ts
import { Actor } from "./actors/Actor.ts"; // path relative to your file inside src/

class Star implements Actor {
    constructor(
        public x: number,
        public y: number,
        public size: number,
    ) {}

    move(delta: number): void {
        this.y += delta * 80; // fall downward at 80 px/s
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}
```

Or extend an existing actor to reuse its behaviour:

```ts
import { Circle } from "./actors/Circle.ts"; // path relative to your file inside src/

class BouncingCircle extends Circle {
    private speedY: number = 1;

    move(delta: number): void {
        super.move(delta); // keep the horizontal movement from Circle
        this.y += this.speedY * 150 * delta;
        if (this.y > 550 || this.y < 0) this.speedY *= -1; // bounce
    }
}
```

---

## How it works

The framework manages the **game loop** — a cycle that runs ~60 times per second
and does two things every frame:

1. **Update** — advance the game state (move objects, check collisions, …)
2. **Render** — draw everything to the canvas

```
start()
  └── init()                      ← called once at startup
  └── loop every frame:
        update(deltaTime)           ← update universe state
        obj.update(deltaTime)       ← update each addObject() object
        clearCanvas()               ← framework clears canvas to white
        obj.render(ctx)             ← render each addObject() object
        universe.render(ctx)        ← render universe (drawn on top)
```

`deltaTime` is the time in seconds since the last frame (usually ~0.016 s at 60
fps). Use it to make movement frame-rate independent:

```ts
// moves 100 pixels per second, regardless of frame rate
this.x += 100 * deltaTime;
```

---

## Creating a game

Extend the abstract `Universe` class and implement the three methods:

```ts
import { Universe } from "./timanfaya/Universe.ts";
import { Timanfaya } from "./timanfaya/Timanfaya.ts";
import { InputManager } from "./timanfaya/InputManager.ts";

class MyGame extends Universe {
    private x = 0;

    init(input: InputManager): void {
        // called once before the loop starts
        // subscribe to input events and set up initial state here
    }

    update(deltaTime: number, input: InputManager): void {
        // called every frame — move things, handle logic
        this.x += 100 * deltaTime;
    }

    render(ctx: CanvasRenderingContext2D): void {
        // called every frame — draw things using ctx
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, 50, 50, 50);
    }
}

const game = new MyGame();
// Timanfaya(universe, width?, height?, canvasId?)
// canvasId: id of an existing <canvas> element; a new one is created if omitted
const framework = new Timanfaya(game, 800, 600);
framework.start();
```

### `Timanfaya` constructor

```ts
new Timanfaya(universe: Universe, width?: number, height?: number, canvasId?: string)
```

| Parameter  | Default        | Description                                                                          |
| ---------- | -------------- | ------------------------------------------------------------------------------------ |
| `universe` | —              | Your `Universe` subclass instance                                                    |
| `width`    | `800`          | Canvas width in pixels                                                               |
| `height`   | `600`          | Canvas height in pixels                                                              |
| `canvasId` | `"gameCanvas"` | Id of an existing `<canvas>` element; a new one is appended to `<body>` if not found |

### `Timanfaya` helper methods

`Timanfaya` exposes convenience methods you can call from within `render()` (via
the framework instance):

| Method                                    | Description                                      |
| ----------------------------------------- | ------------------------------------------------ |
| `clearCanvas(color?)`                     | Fill the canvas with a color (default `#ffffff`) |
| `drawRect(x, y, w, h, color?)`            | Draw a filled rectangle                          |
| `drawCircle(x, y, radius, color?)`        | Draw a filled circle                             |
| `drawText(text, x, y, color?, fontSize?)` | Draw text                                        |
| `addObject(obj)`                          | Add a `TimanfayaObject` to the scene             |
| `removeObject(obj)`                       | Remove a `TimanfayaObject` from the scene        |
| `start()`                                 | Start the game loop                              |
| `stop()`                                  | Stop the game loop                               |

### `TimanfayaObject` interface

Objects added via `addObject()` must implement `TimanfayaObject`. The `update`
and `render` callbacks are both **optional** — omit either if not needed:

```ts
import { TimanfayaObject } from "./timanfaya/Timanfaya.ts";

interface TimanfayaObject {
    x: number;
    y: number;
    width: number;
    height: number;
    update?: (deltaTime: number) => void; // optional
    render?: (ctx: CanvasRenderingContext2D) => void; // optional
}
```

Example usage:

```ts
const myObj: TimanfayaObject = {
    x: 100,
    y: 100,
    width: 50,
    height: 50,
    update(deltaTime) {
        this.x += 50 * deltaTime;
    },
    render(ctx) {
        ctx.fillStyle = "purple";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    },
};
framework.addObject(myObj);
```

> **Render order per frame:** `clearCanvas()` (white) → `addObject` objects →
> `universe.render()`. Objects added via `addObject()` are drawn _before_ the
> universe renders, so if `universe.render()` calls `ctx.clearRect()`, those
> objects will be cleared. Either skip `clearRect` in your universe, or use
> `addObject` objects only as a complement to your universe's own rendering.

---

## Using `ctx` — the Canvas Drawing API

`ctx` is a
[`CanvasRenderingContext2D`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D).
It is the object you use to draw everything inside `render()`.

### Coordinate system

The top-left corner of the canvas is `(0, 0)`. X grows to the right, Y grows
downward.

```
(0,0) ──── x ────►
  │
  y
  │
  ▼
```

### Clearing the canvas

Always clear the canvas at the start of `render()`, otherwise old frames stack
up:

```ts
ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
```

---

### Drawing rectangles

```ts
ctx.fillStyle = "red";
ctx.fillRect(x, y, width, height); // filled rectangle

ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.strokeRect(x, y, width, height); // outline only
```

---

### Drawing circles (and arcs)

`Timanfaya` provides a `drawCircle` helper, or you can draw directly on `ctx`:

```ts
// via Timanfaya helper
framework.drawCircle(x, y, radius, "green");

// directly on ctx
ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(x, y, radius, 0, Math.PI * 2); // full circle
ctx.fill();
```

| Parameter     | Meaning                 |
| ------------- | ----------------------- |
| `x, y`        | Center of the circle    |
| `radius`      | Radius in pixels        |
| `0`           | Start angle (radians)   |
| `Math.PI * 2` | End angle = full circle |

---

### Drawing text

```ts
ctx.fillStyle = "white";
ctx.font = "20px Arial";
ctx.fillText("Score: 0", x, y);
```

`x, y` is the **baseline** of the text (bottom-left of the first character).

---

### Colors

Colors can be set as:

```ts
ctx.fillStyle = "red"; // named color
ctx.fillStyle = "#ff0000"; // hex
ctx.fillStyle = "rgb(255,0,0)"; // rgb
ctx.fillStyle = "rgba(255,0,0,0.5)"; // with transparency
```

---

### Drawing lines / custom shapes

```ts
ctx.strokeStyle = "white";
ctx.lineWidth = 3;
ctx.beginPath();
ctx.moveTo(x1, y1); // start point
ctx.lineTo(x2, y2); // next point
ctx.lineTo(x3, y3); // ...
ctx.closePath(); // connect back to start
ctx.stroke(); // draw the outline
// or ctx.fill() to fill the shape
```

---

### Saving and restoring state

If you change `fillStyle`, `font`, transformations, etc., and want to undo those
changes afterwards, wrap your drawing code in `save()` / `restore()`:

```ts
ctx.save();
ctx.fillStyle = "red";
ctx.rotate(0.5);
ctx.fillRect(0, 0, 50, 50);
ctx.restore(); // fillStyle and rotation are reset
```

---

### Transformations

```ts
ctx.translate(x, y); // move the origin
ctx.rotate(angleInRadians); // rotate (use Math.PI / 180 to convert degrees)
ctx.scale(sx, sy); // scale (1 = normal, 2 = double size)
```

Always wrap transformations in `save()` / `restore()`.

---

## Quick reference

| What               | Code                                                                  |
| ------------------ | --------------------------------------------------------------------- |
| Clear canvas       | `ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)`            |
| Filled rectangle   | `ctx.fillStyle = "red"; ctx.fillRect(x, y, w, h)`                     |
| Outlined rectangle | `ctx.strokeStyle = "black"; ctx.strokeRect(x, y, w, h)`               |
| Circle             | `ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI*2); ctx.fill()`         |
| Text               | `ctx.font = "16px Arial"; ctx.fillText("hello", x, y)`                |
| Line               | `ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke()` |
| Save/restore state | `ctx.save(); ... ctx.restore()`                                       |

Full API reference:
https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

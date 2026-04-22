import { Observer } from "./Observer.js";

export class Star implements Observer {
  constructor(public name: string) {}

  inform(): void {
    console.log(`Star ${this.name}: I heard the car honking! ✨`);
    // hide youeawl
  }

  blink(): void {
    console.log(`Star ${this.name} is blinking! ✨✨`);
  }
}

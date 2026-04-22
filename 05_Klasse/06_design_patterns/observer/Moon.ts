import { Observer } from "./Observer.js";

export class Moon implements Observer {
  constructor(public name: string) {}

  inform(): void {
    console.log(`Moon ${this.name}: The car is honking! 🌙`);
  }
}

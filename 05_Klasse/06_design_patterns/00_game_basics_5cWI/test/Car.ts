import { Vehicle } from "./Vehicle";

export class Car implements Vehicle {
  constructor(public color: string) {}
  drive(): void {
    console.log("i am a car driving");
  }

  printColor(): void {
    console.log(`my color is ${this.color}`);
  }
}

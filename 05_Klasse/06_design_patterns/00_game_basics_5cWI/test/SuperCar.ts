import { Car } from "./Car";

export class SuperCar extends Car {
  constructor(
    public ps: number,
    public color: string,
  ) {
    super(color);
  }

  drive(): void {
    console.log("i am a super car driving");
  }

  printColor(): void {
    console.log(`ps ${this.ps}`);
    console.log("father" + this.color);
  }
}

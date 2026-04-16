import { SuperCar } from "./SuperCar";

export class MegaCar extends SuperCar {
  constructor(
    public ps: number,
    public color: string,
    public style: string = "sport",
  ) {
    super(ps, color);
  }

  drive(): void {
    console.log("i am a mega car driving");
    console.log(this.color);
    console.log(this.ps);
  }
}

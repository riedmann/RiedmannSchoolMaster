import { Product } from "./Product";

export class TV implements Product {
  constructor(
    private title: string,
    private price: number,
  ) {}

  getPrice(): number {
    return this.price;
  }

  getTitle(): string {
    return this.title;
  }

  watch() {
    console.log("Watching TV!");
  }
}

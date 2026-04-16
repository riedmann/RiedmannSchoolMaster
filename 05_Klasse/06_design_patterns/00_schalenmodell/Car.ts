import { Product } from "./Product";

export class Car implements Product {
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

  drive() {
    console.log("Vroom vroom!");
  }
}

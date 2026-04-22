import { Observer } from "./Observer";

export class Car {
  private observers: Observer[] = [];
  constructor(public brand: string) {}

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  notifyObservers(): void {
    this.observers.forEach((observer) => observer.inform());
  }

  drive(): void {
    this.notifyObservers();
  }
}

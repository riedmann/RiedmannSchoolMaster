import { PaymentStrategy } from "./PaymentStrategy";

export class PaymentContext {
  private strategy: PaymentStrategy;

  constructor(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  public pay(amount: number): void {
    this.strategy.pay(amount);
  }
}

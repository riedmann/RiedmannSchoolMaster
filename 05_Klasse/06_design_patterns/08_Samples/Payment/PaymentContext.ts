import { PaymentStrategy } from "./PaymentStrategy";

/**
 * PaymentContext
 * Verwaltet die aktuelle Zahlungsstrategie und delegiert Zahlungen
 */
export class PaymentContext {
  private strategy: PaymentStrategy;

  constructor(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  /**
   * Setzt eine neue Zahlungsstrategie zur Laufzeit
   */
  setStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
    console.log("\n✅ Zahlungsart wurde geändert\n");
  }

  /**
   * Führt die Zahlung mit der aktuellen Strategie durch
   */
  executePayment(amount: number): void {
    this.strategy.pay(amount);
  }
}

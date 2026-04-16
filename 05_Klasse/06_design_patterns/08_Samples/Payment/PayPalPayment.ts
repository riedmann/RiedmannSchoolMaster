import { PaymentStrategy } from "./PaymentStrategy";

/**
 * Konkrete Strategie: PayPal-Zahlung
 */
export class PayPalPayment implements PaymentStrategy {
  private email: string;
  private password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  pay(amount: number): void {
    console.log(`🅿️  PayPal-Zahlung über ${amount.toFixed(2)} EUR`);
    console.log(`   Account: ${this.email}`);
    console.log(`   Verbindung zu PayPal wird hergestellt...`);
    console.log(`   Zahlung erfolgreich durchgeführt!`);
  }
}

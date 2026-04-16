import { PaymentStrategy } from "./PaymentStrategy";

/**
 * Konkrete Strategie: Kreditkartenzahlung
 */
export class CreditCardPayment implements PaymentStrategy {
  private cardNumber: string;
  private cardHolder: string;
  private cvv: string;
  private expiryDate: string;

  constructor(
    cardNumber: string,
    cardHolder: string,
    cvv: string,
    expiryDate: string,
  ) {
    this.cardNumber = cardNumber;
    this.cardHolder = cardHolder;
    this.cvv = cvv;
    this.expiryDate = expiryDate;
  }

  pay(amount: number): void {
    console.log(`💳 Kreditkartenzahlung über ${amount.toFixed(2)} EUR`);
    console.log(`   Karteninhaber: ${this.cardHolder}`);
    console.log(`   Kartennummer: **** **** **** ${this.cardNumber.slice(-4)}`);
    console.log(`   Zahlung erfolgreich durchgeführt!`);
  }
}

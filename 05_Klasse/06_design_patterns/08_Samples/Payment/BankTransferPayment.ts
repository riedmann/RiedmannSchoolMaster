import { PaymentStrategy } from "./PaymentStrategy";

/**
 * Konkrete Strategie: Banküberweisung
 */
export class BankTransferPayment implements PaymentStrategy {
  private accountNumber: string;
  private bankCode: string;
  private accountHolder: string;

  constructor(accountNumber: string, bankCode: string, accountHolder: string) {
    this.accountNumber = accountNumber;
    this.bankCode = bankCode;
    this.accountHolder = accountHolder;
  }

  pay(amount: number): void {
    console.log(`🏦 Banküberweisung über ${amount.toFixed(2)} EUR`);
    console.log(`   Kontoinhaber: ${this.accountHolder}`);
    console.log(`   IBAN: ${this.accountNumber}`);
    console.log(`   BIC: ${this.bankCode}`);
    console.log(`   Überweisung wird bearbeitet...`);
    console.log(`   Zahlung erfolgt in 1-2 Werktagen!`);
  }
}

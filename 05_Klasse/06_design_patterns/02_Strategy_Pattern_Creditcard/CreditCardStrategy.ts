import { PaymentStrategy } from "./PaymentStrategy";

export class CreditCardStrategy implements PaymentStrategy {
  private cardNumber: string;
  private cardHolderName: string;
  private expirationDate: string;
  private cvv: string;

  constructor(
    cardNumber: string,
    cardHolderName: string,
    expirationDate: string,
    cvv: string,
  ) {
    this.cardNumber = cardNumber;
    this.cardHolderName = cardHolderName;
    this.expirationDate = expirationDate;
    this.cvv = cvv;
  }

  public pay(amount: number): void {
    console.log(
      `Paying ${amount} using Credit Card ending with ${this.cardNumber.slice(
        -4,
      )}`,
    );
  }
}

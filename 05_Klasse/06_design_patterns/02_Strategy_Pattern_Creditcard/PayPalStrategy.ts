import { PaymentStrategy } from "./PaymentStrategy";

export class PayPalStrategy implements PaymentStrategy {
  private email: string = "";
  private password: string = "";

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  public pay(amount: number): void {
    console.log(`Paying ${amount} using PayPal account ${this.email}`);
  }
}

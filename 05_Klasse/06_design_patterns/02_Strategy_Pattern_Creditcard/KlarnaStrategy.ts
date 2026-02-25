import { PaymentStrategy } from "./PaymentStrategy";

export class KlarnaStrategy implements PaymentStrategy {
  private email: string = "";
  private password: string = "";

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  public pay(amount: number): void {
    console.log(`Paying ${amount} using Klarna account ${this.email}`);
  }
}

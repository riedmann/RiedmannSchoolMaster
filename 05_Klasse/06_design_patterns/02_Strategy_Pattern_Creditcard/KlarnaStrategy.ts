import { PaymentStrategy } from "./PaymentStrategy";

export class KlarnaStrategy implements PaymentStrategy {
  private readonly email: string;
  private readonly password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  public pay(amount: number): void {
    console.log(`Paying ${amount} using Klarna account ${this.email}`);
  }
}

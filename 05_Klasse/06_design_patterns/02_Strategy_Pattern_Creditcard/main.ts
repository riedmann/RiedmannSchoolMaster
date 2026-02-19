import { CreditCardStrategy } from "./CreditCardStrategy";
import { PaymentContext } from "./PaymentContext";
import { PaymentStrategy } from "./PaymentStrategy";
import { PayPalStrategy } from "./PayPalStrategy";

const strategy: PaymentStrategy = new PayPalStrategy(
  "example@example.com",
  "password123",
);
const strategy2: PaymentStrategy = new CreditCardStrategy(
  "1234 5678 9012 3456",
  "John Doe",
  "12/25",
  "123",
);
const context = new PaymentContext(strategy);

context.pay(100); // Paying 100 using PayPal account
context.setStrategy(strategy2);
context.pay(200); // Paying 200 using Credit Card ending with 3456

context.setStrategy(strategy);
context.pay(50); // Paying 50 using PayPal account

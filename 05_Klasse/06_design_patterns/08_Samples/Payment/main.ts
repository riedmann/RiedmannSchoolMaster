import { PaymentContext } from "./PaymentContext";
import { CreditCardPayment } from "./CreditCardPayment";
import { PayPalPayment } from "./PayPalPayment";
import { BankTransferPayment } from "./BankTransferPayment";

/**
 * Demo: Online-Shop mit verschiedenen Zahlungsarten
 */
function main() {
  console.log("=== Online-Shop Zahlungssystem ===\n");

  // Warenkorb-Betrag
  const amount = 149.99;

  // Erstelle Zahlungsstrategien
  const creditCard = new CreditCardPayment(
    "1234567890123456",
    "Max Mustermann",
    "123",
    "12/26",
  );

  const paypal = new PayPalPayment(
    "max.mustermann@example.com",
    "securePassword123",
  );

  const bankTransfer = new BankTransferPayment(
    "DE89370400440532013000",
    "COBADEFFXXX",
    "Max Mustermann",
  );

  // Erstelle Kontext mit initialer Strategie (Kreditkarte)
  const paymentContext = new PaymentContext(creditCard);

  // Zahlung 1: Mit Kreditkarte
  console.log("--- Bestellung 1 ---");
  paymentContext.executePayment(amount);

  // Zahlung 2: Wechsel zu PayPal
  console.log("\n--- Bestellung 2 ---");
  paymentContext.setStrategy(paypal);
  paymentContext.executePayment(79.5);

  // Zahlung 3: Wechsel zu Banküberweisung
  console.log("\n--- Bestellung 3 ---");
  paymentContext.setStrategy(bankTransfer);
  paymentContext.executePayment(299.0);

  // Demonstration der Open/Closed Principle:
  // Neue Zahlungsarten können hinzugefügt werden
  console.log("\n=== Erweiterbarkeit ===");
  console.log("✓ Neue Zahlungsarten (z.B. Apple Pay, Klarna) können");
  console.log("  durch Implementierung von PaymentStrategy hinzugefügt werden");
  console.log("✓ Bestehender Code muss nicht geändert werden");
  console.log("✓ PaymentContext bleibt unverändert");
}

main();

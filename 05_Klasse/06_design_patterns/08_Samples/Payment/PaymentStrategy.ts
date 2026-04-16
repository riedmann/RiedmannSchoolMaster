/**
 * PaymentStrategy Interface
 * Definiert die gemeinsame Schnittstelle für alle Zahlungsarten
 */
export interface PaymentStrategy {
  pay(amount: number): void;
}

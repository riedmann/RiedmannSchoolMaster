# Payment Strategy Pattern

## Überblick
Dieses Projekt demonstriert das **Strategy Pattern** anhand eines Online-Shop-Zahlungssystems.

## Design Pattern: Strategy Pattern

### Zweck
Das Strategy Pattern ermöglicht es, verschiedene Algorithmen (hier: Zahlungsarten) zu kapseln und zur Laufzeit austauschbar zu machen.

### Vorteile
- ✅ **Open/Closed Principle**: Neue Zahlungsarten können ohne Änderung bestehenden Codes hinzugefügt werden
- ✅ **Austauschbarkeit**: Zahlungsart kann zur Laufzeit gewechselt werden
- ✅ **Trennung von Verantwortlichkeiten**: Jede Zahlungsart ist eigenständig implementiert
- ✅ **Einfache Erweiterung**: Neue Strategien implementieren einfach das Interface

## Struktur

### Interface
- **PaymentStrategy**: Gemeinsame Schnittstelle für alle Zahlungsarten

### Konkrete Strategien
- **CreditCardPayment**: Kreditkartenzahlung
- **PayPalPayment**: PayPal-Zahlung
- **BankTransferPayment**: Banküberweisung

### Kontext
- **PaymentContext**: Verwaltet die aktuelle Zahlungsstrategie

## Ausführen

```bash
# TypeScript kompilieren und ausführen
tsc main.ts --target ES2015 --module commonjs
node main.js
```

## UML-Diagramm
Siehe `payment-strategy.puml` für das vollständige Klassendiagramm.

## Erweiterung
Um eine neue Zahlungsart hinzuzufügen (z.B. Apple Pay):

1. Erstelle neue Klasse `ApplePayPayment`
2. Implementiere das Interface `PaymentStrategy`
3. Implementiere die `pay(amount: number)` Methode
4. Nutze die neue Strategie im `PaymentContext`

**Kein bestehender Code muss angepasst werden!** ✅

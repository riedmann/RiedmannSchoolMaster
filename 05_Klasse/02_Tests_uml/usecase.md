# Teststellung: UML-Use Case Diagramm

## Ausgangssituation
Ein Unternehmen betreibt ein Lagerverwaltungssystem zur Abwicklung von Lieferungen, Transferaufträgen und Lagerbewegungen.  
Das System soll die Prozesse aus Sicht der Benutzer modellieren.

## Aufgabenstellung
Erstellen Sie ein UML-Use Case Diagramm, das die wichtigsten Anwendungsfälle, Akteure und deren Beziehungen korrekt darstellt.

---

## 1. Akteure
- **Kunde** – kann Bestellungen aufgeben und Lieferstatus abfragen  
- **Mitarbeiter** – kann Lieferungen und Transferaufträge bearbeiten, Lagerbestände prüfen  
- **Lagerverwaltungssystem** – automatisches System, das Lagerbestände aktualisiert  

---

## 2. Anwendungsfälle (Use Cases)
- **Bestellung aufgeben** – Kunde kann eine neue Lieferung anfordern  
- **Lieferstatus prüfen** – Kunde kann den Status seiner Lieferung einsehen  
- **Lieferung erfassen** – Mitarbeiter erfasst eingehende Lieferung  
- **Transferauftrag erstellen** – Mitarbeiter erstellt einen Transferauftrag für eine Lieferung  
- **Lagerbestand prüfen** – Mitarbeiter prüft aktuelle Bestände im Lager  
- **Positionen verwalten** – Mitarbeiter kann Positionen zu Lieferungen und Transferaufträgen hinzufügen oder ändern  
- **Automatische Bestandsaktualisierung** – Lagerverwaltungssystem passt Lagerbestände bei Lieferung oder Transferauftrag automatisch an  

---

## 3. Beziehungen
- Verwenden Sie **Include-Beziehungen**, wenn ein Use Case immer als Teil eines anderen ausgeführt wird.  
- Verwenden Sie **Extend-Beziehungen**, wenn ein Use Case optional oder unter bestimmten Bedingungen ausgeführt wird.  
- Zeigen Sie **Akteur-Use Case-Beziehungen** mit Linienverbindungen.  

---

## 4. Zusatzanforderungen
- Nutzen Sie **Klarheit und Lesbarkeit**, indem Akteure und Use Cases logisch gruppiert werden  
- Beschriften Sie Beziehungen korrekt (Include / Extend)  
- Methoden oder detaillierte Schritte müssen **nicht** modelliert werden  

---

## Ergebnis
Abzugeben ist ein vollständiges UML-Use Case Diagramm, das:  
- alle Akteure enthält  
- alle Use Cases zeigt  
- die Beziehungen zwischen Akteuren und Use Cases korrekt darstellt  
- Include- und Extend-Beziehungen richtig verwendet

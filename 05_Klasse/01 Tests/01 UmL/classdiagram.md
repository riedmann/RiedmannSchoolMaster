# Teststellung: UML-Klassendiagramm (Has-A / Is-A)

## Ausgangssituation
Ein Unternehmen betreibt ein Lagerverwaltungssystem zur Abwicklung von Lieferungen und Transferaufträgen.  
Das System soll objektorientiert modelliert werden.

## Aufgabenstellung
Erstellen Sie ein UML-Klassendiagramm, das die unten beschriebenen Klassen, Attribute und Beziehungen korrekt darstellt.

---

## 1. Klassen

**Person**  
- kundennummer  
- name  
- adresse  

**Kunde**  
- kundentyp  

**Mitarbeiter**  
- personalnummer  
- abteilung  

**Lieferung**  
- liefernummer  
- lieferdatum  
- gesamtgewicht  

**Transferauftrag**  
- auftragsnummer  
- erstellungsdatum  
- status  

**Position**  
- positionsnummer  
- materialnummer  
- menge  
- einheit  

**Lager**  
- lagernummer  
- standort  

---

## 2. Is-A-Beziehungen (Vererbung)
- Kunde **ist eine** Person  
- Mitarbeiter **ist eine** Person  

*(Is-A-Beziehung mit Generalisierung darstellen)*

---

## 3. Has-A-Beziehungen
- Eine Lieferung hat **genau einen** Kunden  
- Eine Lieferung besteht aus **mindestens einer** Position  
- Ein Transferauftrag gehört zu **genau einer** Lieferung  
- Ein Transferauftrag besteht aus **einer oder mehreren** Positionen  
- Ein Transferauftrag wird von **einem** Mitarbeiter bearbeitet  
- Ein Lager verwaltet **mehrere** Transferaufträge  

---

## 4. Kardinalitäten
- Ergänzen Sie alle Beziehungen mit korrekten Multiplizitäten, z. B.:  
  - `1`  
  - `0..1`  
  - `1..*`  
  - `0..*`  

---

## 5. Zusatzanforderungen
- Verwenden Sie **Komposition**, wenn Objekte ohne ihr übergeordnetes Objekt nicht existieren können.  
- Verwenden Sie **Aggregation**, wenn Objekte unabhängig existieren können.  
- Verwenden Sie **Generalisierung** für Is-A-Beziehungen.  
- Methoden müssen **nicht** modelliert werden.

---

## Ergebnis
Abzugeben ist ein vollständiges UML-Klassendiagramm, das:  
- alle Klassen enthält  
- alle Attribute zeigt  
- Has-A- und Is-A-Beziehungen korrekt darstellt  
- Kardinalitäten richtig verwendet

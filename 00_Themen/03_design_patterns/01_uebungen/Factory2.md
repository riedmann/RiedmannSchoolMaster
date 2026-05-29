# 📋 Teststoff-Vorgabe: Advanced React & TypeScript Architecture

---

## 1. React Core & State Management

### 1.1 useState & State-Handling
* **Asynchrones Verhalten:** Verständnis von Zustandsänderungen und dem automatischen Zusammenfassen von Renderschritten (Batching).
* **Funktionale Updates:** Korrekte Verwendung von `setCount(prev => prev + 1)`, um Race Conditions bei schnellen, aufeinanderfolgenden Zustandsänderungen zu verhindern.
* **State-Lifting:** Strategien, um Zustand in die nächste gemeinsame Elternkomponente auszulagern (Single Source of Truth).

### 1.2 useEffect & Lifecycle-Management
* **Der Render-Zyklus:** Wann triggert ein Effekt und wann wird er übersprungen (Steuerung über das Dependency Array)?
* **Cleanup-Funktion:** Korrektes Löschen von Event-Listenern, Timern oder Subscriptions zur Vermeidung von Memory Leaks beim Unmounten einer Komponente.
* **Infinite Loops:** Erkennen und Beheben von unendlichen Render-Schleifen, die durch instabile Referenzen im Dependency Array entstehen.

---

## 2. TypeScript Integration & JSX

### 2.1 Typisierung von Komponenten (Props & Parameters)
* **Schnittstellen-Definition:** Explizite Definition von Component-Schnittstellen mittels `interface` oder `type`.
* **Optionale Parameter:** Umgang mit optionalen Props und das Setzen von Standardwerten via ES6-Destructuring im Funktionskopf.
* **Component Children:** Korrekte Typisierung der speziellen Prop `children` unter Verwendung von `React.ReactNode`.

### 2.2 Event-Handling
* **Synthetische Events:** Zusammenspiel zwischen dem nativen DOM-Event-System und dem synthetischen Event-Wrapper von React.
* **Typsichere Event-Handler:** Explizite Typisierung von Callbacks (z. B. `React.ChangeEvent<HTMLInputElement>` für Eingabefelder oder `React.FormEvent` für Formular-Absendungen).

---

## 3. Software Design Patterns in React

### 3.1 Strategy Pattern
* **Konzept:** Dynamisches Austauschen von Algorithmen oder Verhaltensweisen zur Laufzeit, ohne die aufrufende Klasse zu verändern.
* **React-Umsetzung:** Übergabe von austauschbarer Rendering-, Filter- oder Validierungslogik als Prop an eine generische Komponente.
* *Prüfungsrelevantes Beispiel:* Eine universelle Tabellenkomponente, die je nach übergebener Strategie-Funktion unterschiedliche Sortieralgorithmen ausführt.

### 3.2 Observer Pattern
* **Konzept:** Ein zentrales Subjekt (Subject) verwaltet eine Liste von Beobachtern (Observern) und benachrichtigt diese automatisch über Zustandsänderungen.
* **React-Umsetzung:** Das Fundament modernen State-Managements. Realisiert durch Custom Hooks, die auf externe Datenquellen hören, oder über die native Context API (`useContext`).
* *Prüfungsrelevantes Beispiel:* Ein globaler Theme- oder Authentifizierungs-Provider, bei dem die Änderung des zentralen Zustands sofort alle konsumierenden UI-Komponenten neu rendert.

### 3.3 Singleton Pattern
* **Konzept:** Sicherstellen, dass von einer Klasse systemweit nur eine einzige Instanz existiert und ein globaler Zugriffspunkt auf diese bereitgestellt wird.
* **React-Umsetzung:** In TypeScript meist über ES-Module gelöst (Direkter Export einer Objekt-Instanz). Wichtig ist das Verständnis, dass Singletons außerhalb des React-Komponenten-Lebenszyklus leben.
* *Prüfungsrelevantes Beispiel:* Ein zentraler API-Client (z. B. eine konfigurierte Axios-Instanz) oder ein globaler In-Memory-Logging-Dienst.

### 3.4 Factory Pattern
* **Konzept:** Eine Methode oder Klasse zur Erstellung von Objekten, bei der die genaue Ausprägung (konkrete Klasse) erst zur Laufzeit basierend auf Parametern bestimmt wird.
* **React-Umsetzung:** Dynamische Instanziierung und Darstellung von UI-Komponenten basierend auf Konfigurationsdaten oder API-Antworten.
* *Prüfungsrelevantes Beispiel:* Eine Formular-Factory, die ein JSON-Schema einliest und basierend auf der Typ-Eigenschaft (`type: "text" | "select" | "checkbox"`) die jeweils passende UI-Eingabekomponente generiert.

---

## 🛠️ Erwartete praktische Fertigkeiten (Prüfungsmodus)

Die Studierenden müssen im praktischen Teil in der Lage sein:
1. Einen fehlerhaften `useEffect`-Hook (z. B. mit fehlendem Cleanup oder Infinite-Loop) im Code-Review zu identifizieren und zu korrigieren.
2. Ein dynamisches UI-Problem (z. B. ein Dashboard mit verschiedenen Widget-Typen) mittels des **Factory Patterns** in sauberem TSX umzusetzen.
3. Eingabe-Events typsicher zu verarbeiten, ohne das `any`-Keyword zu verwenden.
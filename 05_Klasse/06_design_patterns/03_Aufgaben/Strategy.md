
# ✈️ Design Patterns – Strategy Pattern  
## Assignment: Aircraft Flight Strategy System

---

## 📘 Scenario

Different aircraft can operate in different flight modes depending on the situation.

Examples of flight modes:

- NormalFlight
- EcoFlight
- SportFlight
- EmergencyFlight

Each flight mode calculates:

- Current speed
- Fuel consumption rate
- Engine power usage

The flight behavior should be changeable **at runtime** without modifying the aircraft class.

---

## 🎯 Objective

Design a **UML class diagram** using the **Strategy Pattern** to model dynamic flight behavior.

Aircraft must be able to switch flight strategies during runtime.

---

## 🧩 Functional Requirements

### 1️⃣ Strategy Interface

Create an interface:

**FlightStrategy**

Methods:

- `calculateSpeed(): double`
- `calculateFuelConsumption(): double`
- `calculateEnginePower(): double`

---

### 2️⃣ Concrete Strategies

Implement:

- NormalFlight
- EcoFlight
- SportFlight
- EmergencyFlight

Each strategy must:

- Implement FlightStrategy
- Provide different calculation behavior

Example:
- EcoFlight → lower speed, minimal fuel consumption  
- SportFlight → high speed, high fuel usage  
- EmergencyFlight → maximum engine power  

---

### 3️⃣ Context Class

Create a class:

**Aircraft**

Attributes:

- currentAltitude: double
- currentFuelLevel: double
- strategy: FlightStrategy

Methods:

- `setStrategy(strategy: FlightStrategy): void`
- `performFlight(): void`  
  (delegates calculations to strategy)
- `getCurrentSpeed(): double`

Aircraft must delegate flight-related calculations to the current strategy.

---

## 📐 UML Requirements

Your class diagram must:

- Show the Strategy interface
- Show all concrete strategies
- Show the Aircraft class as Context
- Show aggregation or composition between Aircraft and FlightStrategy
- Use correct UML notation
- Clearly show runtime replaceability of strategies

---

## 🚫 Restrictions

- No if/else or switch statements inside Aircraft to determine flight mode
- No hard-coded behavior in Aircraft
- Aircraft must depend only on the FlightStrategy interface

---



## 📝 Evaluation Criteria

- Correct application of Strategy Pattern
- Proper UML notation
- Clear separation of Context and Strategy
- Low coupling
- Runtime flexibility

---

**Deliverable:**

A complete UML class diagram and a short explanation (5–10 sentences) describing how the Strategy Pattern is applied.
"""

output_file = "/mnt/data/strategy-pattern-aircraft-assignment.md"

pypandoc.convert_text(
    content,
    "md",
    format="md",
    outputfile=output_file,
    extra_args=["--standalone"]
)

output_file


# 🏭 Design Patterns – Factory Pattern  
## Assignment: Aircraft Production System

---

## 📘 Scenario

An aircraft manufacturer produces different types of airplanes for different purposes.

The company currently builds:

- PassengerPlane
- CargoPlane
- MilitaryJet

Each aircraft type:

- Has a maximum speed
- Has a maximum range
- Has a specific engine type
- Implements a common method: `fly()`

The system should allow creation of aircraft objects **without directly using constructors in client code**.

---

## 🎯 Objective

Design a **UML class diagram** using the **Factory Pattern** to create aircraft objects.

Client code must not instantiate concrete aircraft classes directly.

---

## 🧩 Functional Requirements

### 1️⃣ Aircraft Interface

Create an interface:

**Aircraft**

Methods:

- `fly(): void`
- `getMaxSpeed(): double`
- `getRange(): double`
- `getEngineType(): String`

---

### 2️⃣ Concrete Aircraft Types

Implement:

- PassengerPlane
- CargoPlane
- MilitaryJet

Each class must:

- Implement Aircraft
- Provide specific attribute values
- Implement fly() differently

---

### 3️⃣ Factory

Create a class:

**AircraftFactory**

Method:

- `createAircraft(type: String): Aircraft`

Depending on the type parameter, the factory returns:

- PassengerPlane
- CargoPlane
- MilitaryJet

If an invalid type is provided, the factory should throw an exception.

---

## 📐 UML Requirements

Your class diagram must:

- Show the Aircraft interface
- Show concrete implementations
- Show the Factory class
- Use correct UML notation
- Clearly show dependency relationships
- Ensure client depends only on Aircraft and AircraftFactory

---

## 🚫 Restrictions

- Client must NOT use `new PassengerPlane()` directly
- Object creation logic must be centralized in the factory
- No duplicated creation logic

---



## 📝 Evaluation Criteria

- Correct application of Factory Pattern
- Proper UML notation
- Clean separation of responsibilities
- Low coupling
- Extensible design

---

**Deliverable:**

A complete UML class diagram and a short written explanation (5–10 sentences) describing how the Factory Pattern is applied.
"""

output_file = "/mnt/data/factory-pattern-assignment.md"

pypandoc.convert_text(
    content,
    "md",
    format="md",
    outputfile=output_file,
    extra_args=["--standalone"]
)

output_file

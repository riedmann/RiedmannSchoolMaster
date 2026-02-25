# 🛫 Design Patterns – Observer Pattern  
## Assignment: Aircraft Monitoring System

---

## 📘 Scenario

A modern passenger aircraft continuously monitors its flight status.  
Different onboard and external systems must react automatically whenever the aircraft's state changes.

The aircraft tracks the following data:

- Altitude (double)
- Speed (double)
- Fuel Level (double)
- Landing Gear Deployed (boolean)

Whenever one of these values changes, all registered systems must be notified automatically.

---

## 🎯 Objective

Design a **UML class diagram** that models this system using the **Observer Pattern**.

---

## 🧩 Functional Requirements

### 1️⃣ Central Object (Subject)

**Aircraft**

Responsibilities:

- Stores current flight data
- Allows modification of flight data
- Notifies all registered observers when data changes
- Observers can register and unregister themselves

---

### 2️⃣ Observing Systems (Observers)

The following systems must observe the Aircraft:

1. **CockpitDisplay**
   - Displays current flight values

2. **AutopilotSystem**
   - Reacts to altitude or speed changes
   - Example: activates warning below minimum altitude

3. **GroundControl**
   - Gets notified in case of critical fuel level

4. **BlackBoxRecorder**
   - Logs every change of aircraft state

All observers must automatically receive updates when the Aircraft changes.

---

## 🏗 Technical Requirements

You must apply the **Observer Pattern** correctly.

Your UML diagram must include:

---

### Interfaces

#### Subject
- `attach(observer: Observer): void`
- `detach(observer: Observer): void`
- `notify(): void`

#### Observer
- `update(): void`

---

### Concrete Classes

- Aircraft (implements Subject)
- CockpitDisplay (implements Observer)
- AutopilotSystem (implements Observer)
- GroundControl (implements Observer)
- BlackBoxRecorder (implements Observer)

---

## 📐 UML Requirements

Your class diagram must:

- Clearly show interfaces
- Show realization relationships
- Show aggregation between Subject and Observers
- Include relevant attributes and methods
- Use correct UML notation

---

## 📊 Aircraft Attributes

Aircraft must contain:

- `altitude: double`
- `speed: double`
- `fuelLevel: double`
- `landingGearDeployed: boolean`
- `observers: List<Observer>`

Each setter method must call `notify()`.

---

## ⭐ Optional Advanced Task

Extend the design so that:

- Observers can subscribe only to specific events  
  (e.g., only fuel changes or only altitude changes)

Questions to consider:

- Would you use Push or Pull model?
- Would you introduce an Event class?
- How would you model selective notifications in UML?

---

## 📝 Evaluation Criteria

- Correct implementation of Observer Pattern
- Proper UML notation
- Clean separation of interfaces and concrete classes
- Meaningful method signatures
- Extensibility of the design

---

**Deliverable:**  
A complete UML class diagram (digital or hand-drawn, clean and readable).
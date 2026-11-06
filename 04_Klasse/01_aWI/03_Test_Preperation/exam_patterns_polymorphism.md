# Exam: Design Patterns, Polymorphism & Interfaces

**Name:** _________________________  
**Date:** 23. Juni 2026  
**Time:** 60 minutes  
**Points:** 100

---

## Question 1: Strategy Pattern (30 Points)

### Task Description
You are developing a game with different character types (Warrior, Mage, Archer). Each character can attack enemies, but they use different attack behaviors:
- Warrior: Uses melee attacks with sword (high damage, close range)
- Mage: Casts magic spells (medium damage, long range, uses mana)
- Archer: Shoots arrows (medium damage, medium range, requires arrows)

Requirements:
- Characters should be able to change their attack behavior during the game (e.g., a Warrior picks up a magic staff and can now cast spells)
- New attack types should be easy to add without modifying existing character classes
- The attack behavior should be independent from the character class itself

### Your Task (30 Points)

a) **(20 Points)** Draw a complete UML class diagram using the **Strategy Pattern** to solve this problem. Your diagram must include:
   - All necessary classes and interfaces
   - Relationships between classes (use appropriate UML notation)
   - Important methods and attributes
   - Proper naming conventions

b) **(10 Points)** Explain in 2-3 sentences why the Strategy Pattern is the appropriate choice for this scenario.

---

## Question 2: Polymorphism (40 Points)

### Given Class Hierarchy

```java
class Vehicle {
    protected String brand;
    
    public Vehicle(String brand) {
        this.brand = brand;
    }
    
    public void start() {
        System.out.println("Vehicle starting");
    }
    
    public void stop() {
        System.out.println("Vehicle stopping");
    }
    
    public String getBrand() {
        return brand;
    }
}

class Car extends Vehicle {
    private int numberOfDoors;
    
    public Car(String brand, int doors) {
        super(brand);
        this.numberOfDoors = doors;
    }
    
    @Override
    public void start() {
        System.out.println("Car engine starting");
    }
    
    public void openTrunk() {
        System.out.println("Trunk opening");
    }
    
    public int getNumberOfDoors() {
        return numberOfDoors;
    }
}

class Motorcycle extends Vehicle {
    private boolean hasSidecar;
    
    public Motorcycle(String brand, boolean sidecar) {
        super(brand);
        this.hasSidecar = sidecar;
    }
    
    @Override
    public void start() {
        System.out.println("Motorcycle engine revving");
    }
    
    public void wheelie() {
        System.out.println("Performing wheelie");
    }
}
```

### Questions

a) **(5 Points)** Draw a simple UML class diagram showing the hierarchy of Vehicle, Car, and Motorcycle.

b) **(15 Points)** Consider the following code:
```java
Vehicle v1 = new Car("BMW", 4);
Vehicle v2 = new Motorcycle("Harley", false);
Car c1 = new Car("Audi", 2);
```

Fill in the table:

| Code Statement | Compiles? (Yes/No) | Executes? (Yes/No) | Which object's method is called? | Output/Explanation |
|----------------|--------------------|--------------------|-----------------------------------|---------------------|
| `v1.start();` | | | | |
| `v1.getBrand();` | | | | |
| `v1.openTrunk();` | | | | |
| `v2.start();` | | | | |
| `v2.wheelie();` | | | | |
| `c1.openTrunk();` | | | | |
| `((Car)v1).openTrunk();` | | | | |

c) **(10 Points)** Explain the following concepts with examples from the code above:
   - **Method Overriding** (5 Points)

d) **(10 Points)** What is the difference between:
```java
Vehicle v = new Car("Tesla", 4);
```
and
```java
Car c = new Car("Tesla", 4);
```
Which methods can be called on `v` and which on `c`? Why?

---

## Question 3: Interfaces (30 Points)

a) **(15 Points)** What is an interface in object-oriented programming? Your answer should include:
  

b) **(15 Points)** Given the following interface:
```java
interface Chargeable {
    void charge();
    int getBatteryLevel();
    void setBatteryLevel(int level);
}
```

Write a class `ElectricCar` that:
- Extends the `Vehicle` class from Question 2
- Implements the `Chargeable` interface

---


**Good Luck!**

---


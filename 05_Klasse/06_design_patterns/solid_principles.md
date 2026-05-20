# SOLID Principles

SOLID is an acronym for five object-oriented design principles that help developers write maintainable, scalable, and robust software.

---

## S — Single Responsibility Principle (SRP)

> **A class should have only one reason to change.**

Every class or module should be responsible for exactly one piece of functionality. If a class handles multiple concerns, a change in one concern may unintentionally break another.

### Bad Example
```typescript
class UserService {
    saveUser(user: User): void { /* saves to DB */ }
    sendWelcomeEmail(user: User): void { /* sends email */ }
    generateReport(user: User): string { /* builds report */ }
}
```
This class handles persistence, email sending, and reporting — three separate responsibilities.

### Good Example
```typescript
class UserRepository {
    save(user: User): void { /* saves to DB */ }
}

class EmailService {
    sendWelcomeEmail(user: User): void { /* sends email */ }
}

class UserReportService {
    generateReport(user: User): string { /* builds report */ }
}
```

---

## O — Open/Closed Principle (OCP)

> **Software entities should be open for extension, but closed for modification.**

You should be able to add new behavior without changing existing, tested code. This is typically achieved through abstraction and inheritance or composition.

### Bad Example
```typescript
class DiscountCalculator {
    calculate(customerType: string, price: number): number {
        if (customerType === "regular") return price * 0.9;
        if (customerType === "vip") return price * 0.7;
        return price; // adding a new type requires modifying this class
    }
}
```

### Good Example
```typescript
interface DiscountStrategy {
    apply(price: number): number;
}

class RegularDiscount implements DiscountStrategy {
    apply(price: number): number { return price * 0.9; }
}

class VipDiscount implements DiscountStrategy {
    apply(price: number): number { return price * 0.7; }
}

class DiscountCalculator {
    calculate(strategy: DiscountStrategy, price: number): number {
        return strategy.apply(price); // extend by adding new strategies, not modifying this
    }
}
```

---

## L — Liskov Substitution Principle (LSP)

> **Objects of a subclass should be replaceable with objects of the superclass without breaking the application.**

A subclass must honor the contract of its parent class. If a subclass changes or removes expected behavior, it violates LSP.

### Bad Example
```typescript
class Bird {
    fly(): void { console.log("Flying"); }
}

class Penguin extends Bird {
    fly(): void {
        throw new Error("Penguins can't fly!"); // breaks the contract
    }
}
```

### Good Example
```typescript
class Bird {
    move(): void { console.log("Moving"); }
}

class FlyingBird extends Bird {
    fly(): void { console.log("Flying"); }
}

class Penguin extends Bird {
    move(): void { console.log("Swimming"); }
}
```
Subclasses now only extend behavior they can actually support.

---

## I — Interface Segregation Principle (ISP)

> **A class should not be forced to implement interfaces it does not use.**

Large, fat interfaces should be split into smaller, more specific ones so that classes only need to know about the methods relevant to them.

### Bad Example
```typescript
interface Worker {
    work(): void;
    eat(): void;
    sleep(): void;
}

class Robot implements Worker {
    work(): void { console.log("Working"); }
    eat(): void { throw new Error("Robots don't eat"); }  // forced to implement
    sleep(): void { throw new Error("Robots don't sleep"); }
}
```

### Good Example
```typescript
interface Workable {
    work(): void;
}

interface Feedable {
    eat(): void;
}

interface Restable {
    sleep(): void;
}

class Human implements Workable, Feedable, Restable {
    work(): void { console.log("Working"); }
    eat(): void { console.log("Eating"); }
    sleep(): void { console.log("Sleeping"); }
}

class Robot implements Workable {
    work(): void { console.log("Working"); }
}
```

---

## D — Dependency Inversion Principle (DIP)

> **High-level modules should not depend on low-level modules. Both should depend on abstractions.**

Instead of hard-coding dependencies (concrete classes), depend on interfaces or abstract classes. This decouples modules and makes the system easier to test and extend.

### Bad Example
```typescript
class MySQLDatabase {
    save(data: string): void { console.log("Saving to MySQL: " + data); }
}

class UserService {
    private db = new MySQLDatabase(); // tightly coupled to MySQL

    saveUser(name: string): void {
        this.db.save(name);
    }
}
```

### Good Example
```typescript
interface Database {
    save(data: string): void;
}

class MySQLDatabase implements Database {
    save(data: string): void { console.log("Saving to MySQL: " + data); }
}

class InMemoryDatabase implements Database {
    save(data: string): void { console.log("Saving in memory: " + data); }
}

class UserService {
    constructor(private db: Database) {} // depends on abstraction

    saveUser(name: string): void {
        this.db.save(name);
    }
}

// Usage
const service = new UserService(new MySQLDatabase());
// or swap easily:
const testService = new UserService(new InMemoryDatabase());
```

---

## Summary Table

| Letter | Principle                     | Core Idea                                              |
|--------|-------------------------------|--------------------------------------------------------|
| **S**  | Single Responsibility         | One class = one reason to change                       |
| **O**  | Open/Closed                   | Extend behavior without modifying existing code        |
| **L**  | Liskov Substitution           | Subclasses must be usable in place of their parent     |
| **I**  | Interface Segregation         | Many small interfaces > one large interface            |
| **D**  | Dependency Inversion          | Depend on abstractions, not concrete implementations   |

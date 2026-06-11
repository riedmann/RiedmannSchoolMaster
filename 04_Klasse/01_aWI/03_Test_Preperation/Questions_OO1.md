# Object-Oriented Programming: Comprehensive Review

## Section 1: Access Modifiers (Public & Private)
1. **Concept:** Explain the core difference between `public` and `private` access modifiers. Why is it generally considered bad practice to make all instance variables `public`?
2. **Encapsulation:** How do `private` variables contribute to the principle of Encapsulation? Give a concrete example.
3. **Method Visibility:** In what scenario would you make a method `private` instead of `public`? Give an example of a "helper" method.

## Section 2: Constructors
4. **Default Constructors:** If you do not explicitly write a constructor for a class, what happens when you try to instantiate it? 
5. **Overloading:** Is it possible to have more than one constructor in a single class? If so, what is this called and what rule must be followed?
6. **Private Constructors:** Can a constructor be marked as `private`? If yes, provide a real-world scenario or design pattern where this would be necessary.
7. **The `this` Keyword:** Explain how the `this` keyword is used inside a constructor. Provide a brief code snippet demonstrating its use.

## Section 3: Getters and Setters
8. **Purpose:** If a setter method simply takes a parameter and assigns it to a private variable, how is it any better than just making the variable `public`? 
9. **Validation:** Write a Java setter method for a `private int percentage` variable that ensures the value can never be set below 0 or above 100.
10. **Read-Only:** How can you use getters and setters to make a class property "read-only" to the outside world?

## Section 4: Instance Variables vs. Local Variables
11. **Scope and Lifetime:** Compare the lifespan of an instance variable to that of a local variable. When is each created, and when is each destroyed?
12. **Default Values:** What happens if you declare an instance variable `int count;` but never initialize it? What happens if you do the same with a local variable inside a method?
13. **Memory Allocation:** In terms of memory (Stack vs. Heap), where do local variables live, and where do instance variables live?
14. **Variable Shadowing:** What is "variable shadowing" in the context of instance and local variables? How is it resolved in code?

## Section 5: IS-A and HAS-A Relationships
15. **Definitions:** Define the difference between an "IS-A" relationship and a "HAS-A" relationship in object-oriented design. Which OOP concept implements each?
16. **Scenario A:** Consider a `Smartphone` and a `Battery`. Does this represent an IS-A or a HAS-A relationship? How would you structure this in code?
17. **Scenario B:** Consider a `Manager` and an `Employee`. Does this represent an IS-A or a HAS-A relationship? How would you structure this in code?

## Section 6: Interfaces vs. Abstract Classes
18. **Multiple Inheritance:** How does Java handle a situation where a class needs to inherit behaviors from multiple sources? How do Interfaces play a role in this?
19. **Abstract Methods vs. Concrete Methods:** Can an abstract class contain fully implemented (concrete) methods? Can an interface? (Assume Java 8+).
20. **Design Choice:** You are building a simulation with `Dog`, `Bird`, and `Airplane` classes. You want to group `Bird` and `Airplane` together because they can fly. Should `Flyable` be an Abstract Class or an Interface? Justify your answer.
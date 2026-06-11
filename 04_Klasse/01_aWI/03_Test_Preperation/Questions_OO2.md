# Object-Oriented Programming: The Basics

## Section 1: Classes and Objects
1. **Core Concept:** Explain the fundamental difference between a Class and an Object. 
2. **Analogy:** Provide a real-world analogy to describe the relationship between a Class and an Object (e.g., a blueprint and a house).
3. **Instantiation:** What does it mean to "instantiate" a class? What keyword is typically used in languages like Java or C++ to achieve this?
4. **Multiple Instances:** Can you create more than one object from a single class? If so, do these objects share the exact same memory location?

## Section 2: Instance Variables (State)
5. **Definition:** What is an instance variable, and how does it define the "state" of an object?
6. **Independence:** If you have two `Dog` objects, `dog1` and `dog2`, and you change the `name` instance variable of `dog1`, does it affect `dog2`? Why or why not?
7. **Data Types:** Can an instance variable be an object of another class, or is it restricted to primitive data types (like `int`, `boolean`, `double`)?
8. **Accessing State:** In a well-designed OOP system, should external classes modify an object's instance variables directly? If not, what is the preferred alternative?

## Section 3: Methods (Behavior)
9. **Definition:** What is a method, and how does it relate to the "behavior" of an object?
10. **Return Types:** What is the difference between a method with a `void` return type and a method that returns a specific data type like an `int` or `String`?
11. **Parameters:** What is the purpose of method parameters (or arguments)? Give an example of a situation where a method would need parameters to function correctly.
12. **Invocation:** What is the standard dot-notation syntax for calling (invoking) a method on a specific object? (e.g., calling the `start()` method on a `Car` object named `myCar`).

## Section 4: Method Signatures & Overloading
13. **Components:** What specific parts of a method declaration make up its "signature"?
14. **Overloading Concept:** What is method overloading? Why might it be useful to have multiple methods with the same name in a single class?
15. **Signature Rules:** Can you overload a method by *only* changing its return type (e.g., `public int calculate()` and `public double calculate()`)? Why or why not?

## Section 5: Relationships (IS-A vs. HAS-A)
16. **IS-A Concept:** What does an "IS-A" relationship represent in Object-Oriented Programming? What foundational OOP concept is used to create this relationship?
17. **HAS-A Concept:** What does a "HAS-A" relationship represent? How is this relationship typically constructed in code?
18. **Scenario A:** Consider the relationship between a `Library` class and a `Book` class. Is this an IS-A or a HAS-A relationship? Explain your reasoning.
19. **Scenario B:** Consider the relationship between a `Guitar` class and an `Instrument` class. Is this an IS-A or a HAS-A relationship? Explain your reasoning.
20. **Design Choice:** Why is it important to correctly identify whether two conceptual classes have an IS-A or a HAS-A relationship before writing the code?
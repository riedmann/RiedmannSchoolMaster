# Test Assignment: UML Class Diagram (Has-A / Is-A)

## Initial Situation
A university is developing an **online course management system** to organize courses, students, lecturers, and exams.  
The system shall be modeled using object-oriented principles.

## Task Description
Create a UML class diagram that correctly represents the classes, attributes, and relationships described below.

---

## 1. Classes

**Person**  
- personId  
- name  
- email  

**Student**  
- studentId  
- studyProgram  

**Lecturer**  
- employeeId  
- department  

**Course**  
- courseId  
- title  
- semester  

**Exam**  
- examId  
- date  
- room  

**Enrollment**  
- enrollmentDate  
- status  

**Grade**  
- value  
- date  

---

## 2. Relations 1
- Student **is a** Person  
- Lecturer **is a** Person  

---

## 3. Relations 2
- A Course is taught by **exactly one** Lecturer  
- A Course has **multiple** Students  
- A Student can attend **multiple** Courses  
- A Course contains **one or more** Exams  
- An Exam belongs to **exactly one** Course  
- An Enrollment links **one** Student with **one** Course  
- Each Exam has **exactly one** Grade per Student  

---

## 4. Cardinalities
- Add correct multiplicities to all relationships, for example:  
  - `1`  
  - `0..1`  
  - `1..*`  
  - `0..*`  

---

## 5. Additional Requirements
- Use **generalization** for Is-A relationships  
- Add at least 2 Methods in your UML Diagram. Think what could fit!

---

## Result
Submit a complete UML class diagram that:  
- includes all classes  
- shows all attributes  
- correctly models Has-A and Is-A relationships  
- uses correct cardinalities  

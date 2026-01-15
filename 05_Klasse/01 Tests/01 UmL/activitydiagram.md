# Test Assignment: UML Activity Diagram (Fork / Join with Decision)

## Initial Situation
An online shop processes customer orders automatically.  
Some steps can be executed **in parallel**, while others require **decisions** and **synchronization** before continuing.

The process shall be modeled using a **UML Activity Diagram**.

## Task Description
Create a UML activity diagram that correctly represents the workflow described below, including **fork**, **join (synchronization)**, and **decision** nodes.

---

## 1. Process Overview

The order process starts when a customer places an order in the online shop.

---

## 2. Activities

- Receive order  
- Validate order data  
- Check product availability  
- Process payment  
- Cancel order  
- Prepare invoice  
- Pack items  
- Ship order  
- Send confirmation email  
- End process  

---

## 3. Control Flow Requirements

1. The process starts with **Receive order**
2. After **Validate order data**, a **decision node** checks whether the order data is valid:
   - **[valid]** → continue process  
   - **[invalid]** → **Cancel order** → end process  
3. If the order is valid, the flow splits into **parallel activities** using a **fork**:
   - Check product availability  
   - Process payment  
4. After **Process payment**, a **decision node** checks the payment result:
   - **[payment successful]** → continue  
   - **[payment failed]** → **Cancel order** → end process  
5. If both parallel activities succeed, they must be synchronized using a **join**
6. After synchronization, the following activities are executed **in parallel**:
   - Prepare invoice  
   - Pack items  
7. These activities must be synchronized again using a **join**
8. After synchronization:
   - Ship order  
   - Send confirmation email  
9. The process ends after the confirmation email is sent

---

## 4. Diagram Requirements

- Use **initial** and **final nodes**
- Use **at least one decision node** with guard conditions
- Use **at least two fork nodes** and **two join (synchronization) nodes**
- Clearly label decision branches (e.g. `[valid]`, `[invalid]`)
- Use correct UML activity diagram notation

---

## 5. Result

Submit a UML activity diagram that:
- correctly models the workflow  
- includes decisions, parallel flows, and synchronization  
- uses guards on decision nodes  
- is clearly structured and easy to read  

---

### Bonus (Optional)
- Add swimlanes for:
  - Customer  
  - Payment System  
  - Warehouse  

*(Swimlanes are optional and not required for a correct solution.)*

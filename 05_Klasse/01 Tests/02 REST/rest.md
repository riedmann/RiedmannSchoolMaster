# Assignment: REST API Design – Pet Management Service

## 1. Overview
A small pet shop wants to expose a **RESTful API** to manage its inventory. Your task is to **design the API** for managing pet resources. 

> **Note:** You are not required to write any code. This assignment focuses solely on **API design and documentation**.

---

## 2. Learning Objectives
Students should demonstrate understanding of:
- **RESTful Principles:** Using nouns in URLs and resource-oriented architecture.
- **HTTP Methods:** Appropriate use of `GET`, `POST`, `PUT`, and `DELETE`.
- **JSON Structure:** Designing valid request and response bodies.
- **HTTP Headers & Status Codes:** Communicating metadata and result states correctly.

---

## 3. Resource Specification: Pet
A "Pet" resource contains the following attributes:

* `id` (Integer): Unique identifier.
* `name` (String): Name of the pet.
* `type` (String): Species (e.g., dog, cat, bird, fish).
* `breed` (String): Specific breed.
* `age` (Integer): Age in years.
* `price` (Decimal): Price in USD/EUR.
* `available` (Boolean): Status of availability.

---

## 4. Technical Constraints

### Required Headers
All requests and responses must utilize the following headers:
- `Accept: application/json`
- `Content-Type: application/json`

### HTTP Status Codes
You must use the following codes where appropriate:
- **200 OK**: Successful GET or Update.
- **201 Created**: Successful creation via POST.
- **204 No Content**: Successful deletion.
- **400 Bad Request**: Input validation failure.
- **404 Not Found**: Specified ID does not exist.
- **500 Internal Server Error**: Unexpected server failure.

---

## 5. Tasks
Design API endpoints for the following six operations:
1. **Create** a new pet.
2. **Get all** pets.
3. **Get a pet by ID**.
4. **Update** an existing pet.
5. **Delete** a pet.
6. **Filter** to get only available pets.

---

## 6. Submission Template
Please provide your design using the following table format for each endpoint:

| HTTP Method | URL | Headers | Request Body | Response Body | Status Code |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **POST** | `/api/v1/pets` | Content-Type: application/json | `{ "name": "Buddy", ... }` | `{ "id": 1, "name": "Buddy", ... }` | 201 Created |

---
*End of Assignment*
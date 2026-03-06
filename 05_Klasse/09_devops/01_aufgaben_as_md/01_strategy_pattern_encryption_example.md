# Strategy Pattern Example (TypeScript) --- Encryption Strategies with Tests

This is a small but clean **TypeScript example** for teaching the
**Strategy Pattern** using simple encryption algorithms.

Students will see:

-   Strategy interface
-   Multiple interchangeable algorithms
-   A context class
-   Unit tests
-   Usage of a modern TypeScript testing framework

The encryption algorithms are intentionally simple so students can
easily understand them.

------------------------------------------------------------------------

# Project Structure

    src
     ├─ encryption
     │   ├─ EncryptionStrategy.ts
     │   ├─ CaesarStrategy.ts
     │   ├─ ReverseStrategy.ts
     │   ├─ XorStrategy.ts
     │   └─ EncryptionContext.ts
     │
    tests
     └─ encryption.test.ts

------------------------------------------------------------------------

# 1. Strategy Interface

``` ts
// src/encryption/EncryptionStrategy.ts

export interface EncryptionStrategy {
  encrypt(text: string): string
  decrypt(text: string): string
}
```

------------------------------------------------------------------------

# 2. Strategy 1 --- Caesar Cipher

``` ts
// src/encryption/CaesarStrategy.ts

import { EncryptionStrategy } from "./EncryptionStrategy"

export class CaesarStrategy implements EncryptionStrategy {

  constructor(private shift: number = 3) {}

  encrypt(text: string): string {
    return [...text]
      .map(c => String.fromCharCode(c.charCodeAt(0) + this.shift))
      .join("")
  }

  decrypt(text: string): string {
    return [...text]
      .map(c => String.fromCharCode(c.charCodeAt(0) - this.shift))
      .join("")
  }

}
```

------------------------------------------------------------------------

# 3. Strategy 2 --- Reverse String

``` ts
// src/encryption/ReverseStrategy.ts

import { EncryptionStrategy } from "./EncryptionStrategy"

export class ReverseStrategy implements EncryptionStrategy {

  encrypt(text: string): string {
    return text.split("").reverse().join("")
  }

  decrypt(text: string): string {
    return text.split("").reverse().join("")
  }

}
```

------------------------------------------------------------------------

# 4. Strategy 3 --- XOR Cipher

``` ts
// src/encryption/XorStrategy.ts

import { EncryptionStrategy } from "./EncryptionStrategy"

export class XorStrategy implements EncryptionStrategy {

  constructor(private key: number = 7) {}

  encrypt(text: string): string {
    return [...text]
      .map(c => String.fromCharCode(c.charCodeAt(0) ^ this.key))
      .join("")
  }

  decrypt(text: string): string {
    return this.encrypt(text)
  }

}
```

Note: XOR encryption works both ways.

------------------------------------------------------------------------

# 5. Context Class

``` ts
// src/encryption/EncryptionContext.ts

import { EncryptionStrategy } from "./EncryptionStrategy"

export class EncryptionContext {

  constructor(private strategy: EncryptionStrategy) {}

  setStrategy(strategy: EncryptionStrategy) {
    this.strategy = strategy
  }

  encrypt(text: string): string {
    return this.strategy.encrypt(text)
  }

  decrypt(text: string): string {
    return this.strategy.decrypt(text)
  }

}
```

------------------------------------------------------------------------

# 6. Unit Tests

Example tests using a modern TypeScript test framework.

``` ts
// tests/encryption.test.ts

import { describe, it, expect } from "vitest"

import { EncryptionContext } from "../src/encryption/EncryptionContext"
import { CaesarStrategy } from "../src/encryption/CaesarStrategy"
import { ReverseStrategy } from "../src/encryption/ReverseStrategy"
import { XorStrategy } from "../src/encryption/XorStrategy"

describe("Encryption Strategies", () => {

  const text = "hello"

  it("CaesarStrategy encrypt/decrypt", () => {
    const context = new EncryptionContext(new CaesarStrategy(3))

    const encrypted = context.encrypt(text)
    const decrypted = context.decrypt(encrypted)

    expect(decrypted).toBe(text)
  })

  it("ReverseStrategy encrypt/decrypt", () => {
    const context = new EncryptionContext(new ReverseStrategy())

    const encrypted = context.encrypt(text)
    const decrypted = context.decrypt(encrypted)

    expect(decrypted).toBe(text)
  })

  it("XorStrategy encrypt/decrypt", () => {
    const context = new EncryptionContext(new XorStrategy(5))

    const encrypted = context.encrypt(text)
    const decrypted = context.decrypt(encrypted)

    expect(decrypted).toBe(text)
  })

})
```

------------------------------------------------------------------------

# 7. Install Test Framework

    npm install vitest --save-dev

Add the test script in `package.json`:

``` json
{
  "scripts": {
    "test": "vitest"
  }
}
```

Run tests:

    npm test

------------------------------------------------------------------------

# Learning Goals

Students learn:

-   Strategy Pattern
-   Decoupling algorithms from the context
-   Switching behavior at runtime
-   Writing unit tests
-   Basic TypeScript project structure

------------------------------------------------------------------------

# Possible Extensions for Students

You can ask students to:

-   Add a **Base64 encryption strategy**
-   Add a **ROT13 strategy**
-   Allow **runtime switching of strategies**
-   Write **additional unit tests**
-   Create a **UML class diagram for the pattern**

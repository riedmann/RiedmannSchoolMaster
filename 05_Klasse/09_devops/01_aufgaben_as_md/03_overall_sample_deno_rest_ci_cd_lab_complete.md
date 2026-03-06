# Complete Lab: Deno REST API + Testing + GitHub CI/CD

## Overview

In this lab you will build a **complete modern backend workflow**:

-   REST API
-   Automated tests
-   Git workflow
-   Continuous Integration
-   Deployment

Technologies used:

-   Deno
-   Oak (HTTP framework)
-   Git
-   GitHub
-   GitHub Actions
-   Deno Deploy

------------------------------------------------------------------------

# CI/CD Pipeline Overview

          Write Code
              │
              ▼
         Run Local Tests
              │
              ▼
           Git Commit
              │
              ▼
           Git Push
              │
              ▼
       GitHub Actions (CI)
              │
              ▼
       Tests run in cloud
              │
              ▼
         Deployment
              │
              ▼
        Public API URL

------------------------------------------------------------------------

# Learning Objectives

Students will learn:

-   REST API design
-   Automated testing
-   Continuous Integration
-   DevOps pipeline basics
-   Modern backend tooling

------------------------------------------------------------------------

# Step 1 -- Create Project

    mkdir deno-rest-lab
    cd deno-rest-lab

Project structure:

    deno-rest-lab
    │
    ├─ main.ts
    ├─ routes.ts
    ├─ service.ts
    │
    ├─ tests
    │   └─ service_test.ts
    │
    ├─ deno.json
    │
    └─ .github
        └─ workflows
            └─ ci.yml

------------------------------------------------------------------------

# Step 2 -- Business Logic

Create `service.ts`

``` ts
export function hello(name: string): string {
  return `Hello ${name}`
}
```

------------------------------------------------------------------------

# Step 3 -- Routes

Create `routes.ts`

``` ts
import { Router } from "https://deno.land/x/oak/mod.ts"
import { hello } from "./service.ts"

const router = new Router()

router.get("/hello/:name", (ctx) => {

  const name = ctx.params.name

  ctx.response.body = {
    message: hello(name!)
  }

})

export default router
```

------------------------------------------------------------------------

# Step 4 -- Server

Create `main.ts`

``` ts
import { Application } from "https://deno.land/x/oak/mod.ts"
import router from "./routes.ts"

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

console.log("Server running on http://localhost:8000")

await app.listen({ port: 8000 })
```

Run server:

    deno run --allow-net main.ts

Test in browser:

    http://localhost:8000/hello/world

------------------------------------------------------------------------

# Step 5 -- Add Tests

Create `tests/service_test.ts`

``` ts
import { assertEquals } from "https://deno.land/std/assert/mod.ts"
import { hello } from "../service.ts"

Deno.test("hello returns correct message", () => {

  const result = hello("World")

  assertEquals(result, "Hello World")

})
```

Run tests:

    deno test

------------------------------------------------------------------------

# Step 6 -- Deno Config

Create `deno.json`

``` json
{
  "tasks": {
    "start": "deno run --allow-net main.ts",
    "test": "deno test"
  }
}
```

Run:

    deno task start
    deno task test

------------------------------------------------------------------------

# Step 7 -- Git Repository

    git init
    git add .
    git commit -m "initial API"

Create GitHub repository and push:

    git remote add origin https://github.com/YOURNAME/deno-rest-lab.git
    git push -u origin main

------------------------------------------------------------------------

# Step 8 -- GitHub CI

Create:

    .github/workflows/ci.yml

Correct CI configuration:

``` yaml
name: Deno CI

on:
  push:
    branches: [ main ]

jobs:
  test:

    runs-on: ubuntu-latest

    steps:

      - uses: actions/checkout@v4

      - name: Setup Deno
        uses: denoland/setup-deno@v1
        with:
          deno-version: v1.x

      - name: Run Tests
        run: deno test
```

------------------------------------------------------------------------

# Step 9 -- Broken CI Exercise

The following workflow **contains errors**.

Students must fix it.

``` yaml
name: Deno CI

on:
  push:
    branches: main

jobs:
  test:

    runs-on: ubuntu

    steps:

      - name: Checkout repository
        uses: actions/checkout

      - name: Run tests
        run: npm test
```

### Tasks

Find and fix:

1.  wrong OS name
2.  missing Deno installation
3.  wrong test command
4.  incorrect branch syntax

------------------------------------------------------------------------

# Step 10 -- Deployment

Deploy using **Deno Deploy**.

Steps:

1.  Login with GitHub
2.  Create new project
3.  Select repository
4.  Set entry file:

```{=html}
<!-- -->
```
    main.ts

Example URL:

    https://your-project.deno.dev/hello/world

------------------------------------------------------------------------

# Exercises

## Exercise 1

Create endpoint:

    GET /time

Return server time.

------------------------------------------------------------------------

## Exercise 2

Create endpoint:

    POST /echo

Return posted JSON message.

------------------------------------------------------------------------

## Exercise 3

Write tests for the new endpoints.

------------------------------------------------------------------------

## Exercise 4

Add request logging middleware.

Example log:

    GET /hello/world
    200 OK

------------------------------------------------------------------------

# Bonus Challenges

Advanced students:

-   add error handling middleware
-   add request validation
-   create integration tests
-   add environment configuration

------------------------------------------------------------------------

# Lab Duration Variants

## 90 Minute Version

Students complete:

-   REST API
-   Tests
-   GitHub push

CI already provided.

------------------------------------------------------------------------

## 180 Minute Version

Students complete:

-   REST API
-   Tests
-   Fix broken CI
-   Deploy application

------------------------------------------------------------------------

# Grading Rubric

  Category                 Points
  ------------------------ --------
  REST API works           20
  Tests implemented        20
  Git repository correct   15
  CI pipeline working      25
  Deployment working       20

Total: **100 points**

------------------------------------------------------------------------

# Expected Final Result

Students submit:

-   GitHub repository
-   passing CI pipeline
-   deployed API URL

Example:

    https://example.deno.dev/hello/world

------------------------------------------------------------------------

# Key Takeaways

This lab demonstrates a **real modern developer workflow**:

-   local development
-   automated testing
-   version control
-   CI pipelines
-   cloud deployment

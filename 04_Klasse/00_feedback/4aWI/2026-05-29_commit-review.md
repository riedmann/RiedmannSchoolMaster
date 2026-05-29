# Commit Review — 2026-05-29

**Commits reviewed:** 5 per repository  
**Expected tasks:** Observer, Strategy, Factory, and Singleton pattern  
**Grade scale:** AT-1-5

---

## Barosevcic

**Pull result:** no changes  
**Branch:** main  
**Commits reviewed:** 5 (oldest → newest)

### Commit Timeline

| # | Hash | Message | Date | Files changed |
|---|------|---------|------|---------------|
| 1 | `480e05f` | finished Termius and Docker | — | — |
| 2 | `be56b93` | added Riedmanns Git | — | — |
| 3 | `f7cbd7c` | Added Typescript Compiler | — | — |
| 4 | `f402181` | 01 Games Intro DONE | 2026-05-20 | — |
| 5 | `4c41478` | 02 Games xy in Game DONE and added npx tsc | 2026-05-20 | 70+ |

### Git Review

| Commit | Message quality | Scope | Hygiene | Notes |
|--------|----------------|-------|---------|-------|
| `480e05f` | ⚠️ Vague | ✅ OK | ✅ Clean | — |
| `be56b93` | ⚠️ Unclear | ⚠️ Mixed | ✅ Clean | — |
| `f7cbd7c` | ✅ OK | ✅ Atomic | ⚠️ Warning | — |
| `f402181` | ✅ OK | ✅ Atomic | ✅ Clean | — |
| `4c41478` | ⚠️ Mixed | ❌ Not atomic | ❌ Problem | Commits compiled `.js`, `.d.ts`, `.js.map` files — generated output should not be in git |

### Code Review

**Commit `4c41478` — 02 Games xy in Game DONE**

- What was done: Extended `MyGame.ts` to move a rectangle left/right using a boolean flag and `deltaTime`. A second rectangle moves downward. Basic game loop logic is present.
- Issues / Risks:
  - Movement logic is **hardcoded in the `Game` class** — no Strategy, Observer, Factory, or Singleton pattern implemented (`MyGame.ts`).
  - Compiled files (`.d.ts`, `.js`, `.js.map`) are tracked in git — these should be in `.gitignore`.
  - Large amount of unrelated generated output (Next.js `page.js`, `layout.js`, etc.) committed in the same commit.
- Suggestions: Move animation logic into dedicated movement classes. Add compiled output to `.gitignore`.

### Task Fulfillment

| Expected item | Status | Notes |
|---------------|--------|-------|
| Strategy Pattern | ❌ Missing | Movement is hardcoded in `MyGame.ts`, no strategy interface |
| Observer Pattern | ❌ Missing | Not implemented |
| Factory Pattern | ❌ Missing | Not implemented |
| Singleton Pattern | ❌ Missing | Not implemented |

### Grade

| Criterion | Score |
|-----------|-------|
| Code Quality (40%) | 30 |
| Task Fulfillment (30%) | 5 |
| Git Discipline (20%) | 30 |
| Effort (10%) | 40 |

**Score: 21 → Grade: 5** — The game loop is functional but none of the four required design patterns are implemented. Compiled artefacts in git and a mixed-scope commit indicate weak git discipline.

---

## Bischof

**Pull result:** no changes  
**Branch:** main  
**Commits reviewed:** 5 (oldest → newest)

### Commit Timeline

| # | Hash | Message | Date | Files changed |
|---|------|---------|------|---------------|
| 1 | `0b60088` | TrafficLights_in_progress | — | — |
| 2 | `86b048d` | TrafficLights_cookie_added | — | — |
| 3 | `2a9c531` | Add GameFramework with actor-based inheritance pattern | 2026-05-20 | 16 |
| 4 | `94a5e11` | Remove ArtistPlattform submodule | 2026-05-20 | 1 |
| 5 | `a103a1a` | Implement Strategy Pattern for actor movement | 2026-05-20 | 19 |

### Git Review

| Commit | Message quality | Scope | Hygiene | Notes |
|--------|----------------|-------|---------|-------|
| `0b60088` | ⚠️ Vague | ✅ OK | ✅ Clean | — |
| `86b048d` | ⚠️ Vague | ✅ OK | ✅ Clean | — |
| `2a9c531` | ✅ Good | ✅ Atomic | ✅ Clean | — |
| `94a5e11` | ✅ Good | ✅ Atomic | ✅ Clean | Submodule cleanup |
| `a103a1a` | ✅ Excellent | ✅ Atomic | ⚠️ Note | `Co-Authored-By: Claude Sonnet 4.6` — AI-assisted |

### Code Review

**Commit `2a9c531` — Add GameFramework**

- What was done: Introduced `GameFramework.ts` with abstract `Game` class, `Actor` interface, `Circle`, `Rectangle`, `SuperCircle`. Clean inheritance structure.
- Issues: No design patterns yet beyond basic OOP.
- Suggestions: Good foundation.

**Commit `a103a1a` — Implement Strategy Pattern**

- What was done: Introduced `Movement` interface with `RightMovement`, `LeftMovement`, `UpMovement`, `DownMovement`. Actors hold a `Movement` reference, swappable via `setMovement()`. `update()` renamed from `move()`.
- Issues / Risks:
  - Commit message notes `Co-Authored-By: Claude Sonnet 4.6` — indicates AI assistance. The code is well-structured but this should be acknowledged.
  - `RightMovement` stores its own `x/y` separately from the actor — position is not synced back to the actor, which could cause rendering issues in extended scenarios.
- Suggestions: Consider having the strategy mutate the actor's position directly rather than tracking its own coordinates, to avoid desync.

### Task Fulfillment

| Expected item | Status | Notes |
|---------------|--------|-------|
| Strategy Pattern | ✅ Done | Clean `Movement` interface with 4 concrete strategies |
| Observer Pattern | ❌ Missing | Not found in any commit |
| Factory Pattern | ❌ Missing | Not found |
| Singleton Pattern | ❌ Missing | Not found |

### Grade

| Criterion | Score |
|-----------|-------|
| Code Quality (40%) | 72 |
| Task Fulfillment (30%) | 35 |
| Git Discipline (20%) | 75 |
| Effort (10%) | 70 |

**Score: 60 → Grade: 3** — Strategy Pattern is implemented cleanly with proper TypeScript interfaces. However, only 1 of 4 required patterns is present. The AI co-author flag on the key commit reduces the independent-work score.

---

## Duratovic

**Pull result:** no changes  
**Branch:** main  
**Commits reviewed:** 5 (oldest → newest)

### Commit Timeline

| # | Hash | Message | Date | Files changed |
|---|------|---------|------|---------------|
| 1 | `16ea84f` | Started Typescript, Einführung done, Datentypen done, Interface done | — | — |
| 2 | `906e79a` | Aufgabe Cars done, Arrays in work | — | — |
| 3 | `8679b45` | React Setup & React Struktur und Aufbau done | — | — |
| 4 | `f720318` | Tailwind Properties done | — | — |
| 5 | `a410b6a` | Traffic Light Aufgabe done | — | — |

### Git Review

| Commit | Message quality | Scope | Hygiene | Notes |
|--------|----------------|-------|---------|-------|
| All | ⚠️ Descriptive but grouped | ⚠️ Multiple topics per commit | ✅ Clean | No single-purpose commits |

### Code Review

- None of the last 5 commits contain design pattern work.
- The repository covers TypeScript basics, React setup, Tailwind, and TrafficLight — all earlier curriculum topics.
- No `01_4aWI_Patterns` folder or equivalent exists in the repo.

### Task Fulfillment

| Expected item | Status | Notes |
|---------------|--------|-------|
| Strategy Pattern | ❌ Missing | Not implemented |
| Observer Pattern | ❌ Missing | Not implemented |
| Factory Pattern | ❌ Missing | Not implemented |
| Singleton Pattern | ❌ Missing | Not implemented |

### Grade

| Criterion | Score |
|-----------|-------|
| Code Quality (40%) | 45 |
| Task Fulfillment (30%) | 0 |
| Git Discipline (20%) | 50 |
| Effort (10%) | 40 |

**Score: 29 → Grade: 5** — No design patterns attempted. The student is behind the curriculum; the last commits relate to earlier exercises. Commit messages bundle multiple tasks together.

---

## Frick

**Pull result:** no changes  
**Branch:** main  
**Commits reviewed:** 5 (oldest → newest)

### Commit Timeline

| # | Hash | Message | Date | Files changed |
|---|------|---------|------|---------------|
| 1 | `c1eb889` | trafficlight finnished | — | — |
| 2 | `d1fb209` | add cookie protocol | — | — |
| 3 | `5b144fc` | Cars-APi in httpie oder thunderstroke | — | — |
| 4 | `cc2002c` | added xml | — | — |
| 5 | `b266f31` | xml changes | — | — |

### Git Review

| Commit | Message quality | Scope | Hygiene | Notes |
|--------|----------------|-------|---------|-------|
| `c1eb889` | ⚠️ Typo ("finnished") | ✅ OK | ✅ Clean | — |
| All others | ⚠️ Very brief | ✅ OK | ⚠️ Warning | `node_modules` tracked (`TrafficLight-React`) |

### Code Review

- No design pattern work in the last 5 commits or anywhere in the repository.
- `TrafficLight-React/node_modules/` is tracked in git — major hygiene issue.
- Commits cover TrafficLight, API testing (HTTPie), and XML — earlier curriculum topics only.

### Task Fulfillment

| Expected item | Status | Notes |
|---------------|--------|-------|
| Strategy Pattern | ❌ Missing | Not implemented |
| Observer Pattern | ❌ Missing | Not implemented |
| Factory Pattern | ❌ Missing | Not implemented |
| Singleton Pattern | ❌ Missing | Not implemented |

### Grade

| Criterion | Score |
|-----------|-------|
| Code Quality (40%) | 40 |
| Task Fulfillment (30%) | 0 |
| Git Discipline (20%) | 25 |
| Effort (10%) | 35 |

**Score: 24 → Grade: 5** — No design patterns implemented. `node_modules` committed to git is a significant hygiene problem. Commit messages contain typos and are very brief.

---

## Grimm

**Pull result:** no changes  
**Branch:** main  
**Commits reviewed:** 5 (oldest → newest)

### Commit Timeline

| # | Hash | Message | Date | Files changed |
|---|------|---------|------|---------------|
| 1 | `c0474b1` | feat: auth | 2025-10-16 | — |
| 2 | `3b3eae0` | chores: npx shadcn@latest add cookie-consent | 2025-10-16 | — |
| 3 | `42bf254` | feat: legal | — | — |
| 4 | `30df3dd` | chores: renamed | 2025-10-16 | 15 |
| 5 | `1a0a818` | move strategy | 2026-05-20 | 28 |

### Git Review

| Commit | Message quality | Scope | Hygiene | Notes |
|--------|----------------|-------|---------|-------|
| `c0474b1`–`42bf254` | ✅ Conventional commits format | ✅ Atomic | ✅ Clean | Good use of `feat:`/`chores:` prefix |
| `30df3dd` | ✅ OK | ✅ Atomic | ⚠️ Warning | Commits a binary profile picture (`#profilePicture.jpg`) |
| `1a0a818` | ⚠️ Vague ("move strategy") | ❌ Not atomic | ⚠️ Warning | Mixes Game code + frontend routing refactor in one commit |

### Code Review

**Commit `1a0a818` — move strategy**

- What was done: Implemented `MoveStrategy` interface with `LeftMovement` and `RightMovement`. Actors receive strategy via constructor injection. Also includes a large frontend routing rename (unrelated).
- Code quality:
  - `MoveStrategy.getPosition()` returns an object `{ x, y }` — clean API.
  - Missing newline at end of `MoveStrategy.ts` file.
  - `console.log("test")` left in `MyGame.ts` (`Game/MyGame.ts` line 34) — dead debug output.
  - The commit bundles frontend route renaming with game pattern work — should be two separate commits.
- Suggestions: Remove debug `console.log`, add newline at EOF, split frontend and game changes into separate commits.

### Task Fulfillment

| Expected item | Status | Notes |
|---------------|--------|-------|
| Strategy Pattern | ✅ Done | `MoveStrategy` interface + `LeftMovement`/`RightMovement` |
| Observer Pattern | ❌ Missing | Not implemented |
| Factory Pattern | ❌ Missing | Not implemented |
| Singleton Pattern | ❌ Missing | Not implemented |

### Grade

| Criterion | Score |
|-----------|-------|
| Code Quality (40%) | 68 |
| Task Fulfillment (30%) | 35 |
| Git Discipline (20%) | 62 |
| Effort (10%) | 65 |

**Score: 55 → Grade: 3** — Strategy Pattern implemented with a clean interface. Good conventional-commit style on earlier commits. However only 1 of 4 patterns present, and the key commit bundles unrelated changes.

---

## Hagen

**Pull result:** no changes  
**Branch:** master  
**Commits reviewed:** 5 (oldest → newest)

### Commit Timeline

| # | Hash | Message | Date | Files changed |
|---|------|---------|------|---------------|
| 1 | `436154a` | Typescript_Datentypen DONE | — | — |
| 2 | `2f611ce` | Traffic Light | — | — |
| 3 | `93a3c1e` | Implement 2D Game Framework with Game/GameObject interfaces | — | — |
| 4 | `68963f8` | Implement 2D Game Framework with Game/GameObject interfaces, example game implementation, and HTML setup | — | — |
| 5 | `35c7e65` | Refactor actor classes to use AbstractActor and implement MoveStrategy for movement handling | 2026-05-27 | 8 |

### Git Review

| Commit | Message quality | Scope | Hygiene | Notes |
|--------|----------------|-------|---------|-------|
| `436154a` | ✅ Clear | ✅ Atomic | ✅ Clean | — |
| `93a3c1e`+`68963f8` | ⚠️ Duplicate messages | ⚠️ Duplicate commits | ⚠️ Warning | Two nearly identical commit messages — likely an accidental double-commit |
| `35c7e65` | ✅ Excellent | ✅ Atomic | ✅ Clean | Best commit message in the class |

### Code Review

**Commit `35c7e65` — Refactor to AbstractActor and MoveStrategy**

- What was done: Introduced `AbstractActor` abstract class, `MoveStrategy` interface, `MoveRight`/`MoveLeft` implementations. Strategy receives the actor reference and mutates it directly — clean design. `Actor.ts` reduced to a minimal interface.
- Code quality:
  - `MoveStrategy` passes the actor to `move(actor)` — avoids coordinate desync (better approach than Bischof).
  - `AbstractActor.update()` delegates cleanly to `this.movement.move(this)`.
  - `Circle` stores `ctx` as a constructor parameter (`private ctx?: CanvasRenderingContext2D`) — passing the rendering context to an actor is unconventional and creates tight coupling. The `ctx` should be passed in `render()` instead.
  - The `MoveStrategy.ts` file defines both the interface and two concrete classes in a single file — acceptable for now but would benefit from separation as complexity grows.
- Suggestions: Move `ctx` from constructor to `render(ctx)` parameter. Split concrete movement classes into separate files.

### Task Fulfillment

| Expected item | Status | Notes |
|---------------|--------|-------|
| Strategy Pattern | ✅ Done | Clean `MoveStrategy` interface, actor-based mutation |
| Observer Pattern | ❌ Missing | Not found |
| Factory Pattern | ❌ Missing | Not found |
| Singleton Pattern | ❌ Missing | Not found |

### Grade

| Criterion | Score |
|-----------|-------|
| Code Quality (40%) | 75 |
| Task Fulfillment (30%) | 35 |
| Git Discipline (20%) | 68 |
| Effort (10%) | 65 |

**Score: 60 → Grade: 3** — Strategy Pattern well implemented with a clean abstract actor hierarchy. Excellent commit message quality on the latest commit. Duplicate commits and the `ctx`-in-constructor coupling lower the score slightly.

---

## Hilti

**Pull result:** no changes  
**Branch:** main  
**Commits reviewed:** 5 (oldest → newest)

### Commit Timeline

| # | Hash | Message | Date | Files changed |
|---|------|---------|------|---------------|
| 1 | `9412813` | Added Uebung 4,5,6 | — | — |
| 2 | `fec0afa` | Added React Folder | — | — |
| 3 | `b85543a` | Augabe 4 Done & Added Folders for all the other Tasks | — | — |
| 4 | `1a4bbe3` | Reworked Aufgabe 4 with Typescript | 2025-12-05 | 14 |
| 5 | `203c61d` | added trafficlight | 2026-01-28 | 2 |

### Git Review

| Commit | Message quality | Scope | Hygiene | Notes |
|--------|----------------|-------|---------|-------|
| `b85543a` | ⚠️ Typo ("Augabe") | ⚠️ Mixed scope | ✅ Clean | — |
| `203c61d` | ⚠️ Vague | ⚠️ Only adds submodule ref | ⚠️ Warning | TrafficLight added as submodule pointer only — no actual code committed |

### Code Review

- No design pattern work in any of the last 5 commits.
- Last commit is from **January 2026** — nearly 4 months of inactivity before the pattern deadline.
- The React work (`Aufgabe 4`) is reasonably structured with `Button`, `Card`, `List`, `ListItem` components.
- No `01_4aWI_Patterns` folder or equivalent.

### Task Fulfillment

| Expected item | Status | Notes |
|---------------|--------|-------|
| Strategy Pattern | ❌ Missing | Not implemented |
| Observer Pattern | ❌ Missing | Not implemented |
| Factory Pattern | ❌ Missing | Not implemented |
| Singleton Pattern | ❌ Missing | Not implemented |

### Grade

| Criterion | Score |
|-----------|-------|
| Code Quality (40%) | 42 |
| Task Fulfillment (30%) | 0 |
| Git Discipline (20%) | 38 |
| Effort (10%) | 20 |

**Score: 24 → Grade: 5** — No design patterns implemented. No commits since January 2026. The student appears to have stopped working on the curriculum well before the pattern tasks were assigned.

---

## Keckeis

**Pull result:** no changes  
**Branch:** main  
**Commits reviewed:** 5 (oldest → newest)

### Commit Timeline

| # | Hash | Message | Date | Files changed |
|---|------|---------|------|---------------|
| 1 | `9a26fe2` | finished Persons | — | — |
| 2 | `b742a03` | Comitted Game | — | — |
| 3 | `1f557b2` | Finished Game with Movement | — | — |
| 4 | `37fd7f1` | finished Video and movement | — | — |
| 5 | `b7f1c21` | Finished design Patterns | 2026-05-27 | 17 |

### Git Review

| Commit | Message quality | Scope | Hygiene | Notes |
|--------|----------------|-------|---------|-------|
| `b742a03` | ⚠️ Typo ("Comitted") | ✅ Atomic | ✅ Clean | — |
| `1f557b2`–`37fd7f1` | ✅ Clear | ✅ Atomic | ✅ Clean | — |
| `b7f1c21` | ✅ Clear | ✅ Atomic | ✅ Clean | Large, well-scoped commit |

### Code Review

**Commit `b7f1c21` — Finished design Patterns**

- What was done: Implemented **Observer Pattern** (`ActorObserver` interface + `BoundaryBounceObserver`), **Factory Pattern** (`ActorFactory` as Singleton), and **Strategy Pattern** (retained from previous commits). The `Actor` abstract class gained `addObserver`/`removeObserver`/`notifyBoundaryHit` methods.
- Code quality:
  - `ActorFactory` correctly implements Singleton with `private constructor()` and `static getInstance()` — textbook implementation.
  - `BoundaryBounceObserver` reacts to boundary collisions by swapping the actor's movement strategy — elegant combination of Observer + Strategy.
  - `ActorObserver` interface is minimal and well-defined (`onBoundaryHit(actor, side)`).
  - `ActorFactory.ts` missing newline at EOF.
  - `ActorObserver.ts` and `BoundaryBounceObserver.ts` also missing trailing newlines.
  - `createDemoActors()` is a nice convenience method on the factory.
  - The Observer notification logic in `Actor.ts` correctly guards against duplicate observers with `includes()` check.
- Suggestions: Add trailing newlines to all new files. Consider naming `ActorFactory` → `ActorFactory (Singleton)` in a comment for clarity in a school context.

### Task Fulfillment

| Expected item | Status | Notes |
|---------------|--------|-------|
| Strategy Pattern | ✅ Done | Movement strategies retained and used |
| Observer Pattern | ✅ Done | `ActorObserver` interface + `BoundaryBounceObserver` |
| Factory Pattern | ✅ Done | `ActorFactory.createCircle/Rectangle/SuperCircle` |
| Singleton Pattern | ✅ Done | `ActorFactory` uses `private constructor` + `getInstance()` |

### Grade

| Criterion | Score |
|-----------|-------|
| Code Quality (40%) | 88 |
| Task Fulfillment (30%) | 100 |
| Git Discipline (20%) | 78 |
| Effort (10%) | 85 |

**Score: 90 → Grade: 1** — All four required design patterns implemented correctly and in a well-integrated way. The Observer + Strategy combination is particularly strong. Minor issues are missing EOF newlines and one typo in an earlier commit.

---

## Reicht

**Pull result:** no changes  
**Branch:** main  
**Commits reviewed:** 5 (oldest → newest)

### Commit Timeline

| # | Hash | Message | Date | Files changed |
|---|------|---------|------|---------------|
| 1 | `f50d4b0` | aufgabe 7_1 | — | — |
| 2 | `c6588b4` | aufgabe 7_2 | — | — |
| 3 | `1005f2d` | aufgabe 8 | 2025-12-10 | 5 |
| 4 | `027cb64` | trafficlight w/ api | 2026-01-09 | 12 |
| 5 | `3cb0778` | traffic light better | 2026-01-09 | 2 |

### Git Review

| Commit | Message quality | Scope | Hygiene | Notes |
|--------|----------------|-------|---------|-------|
| All | ❌ Minimal (no capital, no context) | ✅ Atomic | ✅ Clean | Commit messages are too brief to be useful |

### Code Review

- No design pattern work in any of the last 5 commits.
- Last commit is from **January 2026** — similar inactivity gap as Hilti.
- The TrafficLight + API work (`trafficlight w/ api`) is fairly ambitious — includes a simulation server, mock server, and React chart components.
- No `01_4aWI_Patterns` folder or equivalent.

### Task Fulfillment

| Expected item | Status | Notes |
|---------------|--------|-------|
| Strategy Pattern | ❌ Missing | Not implemented |
| Observer Pattern | ❌ Missing | Not implemented |
| Factory Pattern | ❌ Missing | Not implemented |
| Singleton Pattern | ❌ Missing | Not implemented |

### Grade

| Criterion | Score |
|-----------|-------|
| Code Quality (40%) | 48 |
| Task Fulfillment (30%) | 0 |
| Git Discipline (20%) | 35 |
| Effort (10%) | 45 |

**Score: 28 → Grade: 5** — No design patterns implemented. No activity since January 2026. The earlier TrafficLight+API work shows potential but the pattern tasks are entirely missing.

---

## Grade Overview

| Student | Code Quality (40%) | Task Fulfillment (30%) | Git Discipline (20%) | Effort (10%) | **Score** | **Grade** |
|---------|-------------------|----------------------|---------------------|-------------|-----------|-----------|
| Barosevcic | 30 | 5 | 30 | 40 | **21** | **5** |
| Bischof | 72 | 35 | 75 | 70 | **60** | **3** |
| Duratovic | 45 | 0 | 50 | 40 | **29** | **5** |
| Frick | 40 | 0 | 25 | 35 | **24** | **5** |
| Grimm | 68 | 35 | 62 | 65 | **55** | **3** |
| Hagen | 75 | 35 | 68 | 65 | **60** | **3** |
| Hilti | 42 | 0 | 38 | 20 | **24** | **5** |
| Keckeis | 88 | 100 | 78 | 85 | **90** | **1** |
| Reicht | 48 | 0 | 35 | 45 | **28** | **5** |

---

*Report generated by GitHub Copilot on 2026-05-29*

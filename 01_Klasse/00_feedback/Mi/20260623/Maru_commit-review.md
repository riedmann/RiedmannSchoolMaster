# Commit Review — 2026-06-22

**Student:** Maru  
**Commits reviewed:** all (42 total)  
**Expected tasks:** html, css, flexbox, media query, grid, js, loops, if conditions, getElementById  
**Grade scale:** AT-1-5  

---

**Pull result:** updated  
**Branch:** main  
**Commits reviewed:** 42 (oldest → newest)  
**Active period:** 2025-11-05 → 2026-06-17 (~7.5 months)

---

### Commit Timeline (selected key commits)

| # | Hash | Message | Date | Files changed |
|---|------|---------|------|---------------|
| 1 | `1891fda` | init | 2025-11-05 | — |
| 2 | `cf52b4d` | test ran | 2025-11-05 | — |
| 3 | `6b915f0` | aufgabe1.js | 2025-11-xx | — |
| 4 | `6ea7840` | 42_1Aufgabe.If_Bedingungen.js | 2025-11-xx | — |
| 5 | `b9879ad` | 6.Aufgabe.deno.js | 2025-11-xx | — |
| 6 | `69baa9e` | 5.Aufgabe.js (50 logical) | 2025-12-xx | — |
| 7 | `382206a` | Arrays.1bsp | 2026-01-xx | — |
| 8 | `3d33131` | Schere_Stein_Papier.js | 2026-01-28 | — |
| 9 | `f8d2393` | Wuerfel.js | 2026-01-28 | — |
| 10 | `d54c42c` | Vsc_Tricks | 2026-03-xx | — |
| 11 | `4201806` | webeditortricks.htlm | 2026-03-xx | — |
| 12 | `98a0560` | webeditortricks.html | 2026-03-xx | — |
| 13 | `c2106a9` | mercedes | 2026-05-xx | — |
| 14 | `fb8dad5` | 1.übunghtmlcss | 2026-06-xx | — |
| 15 | `845410a` | miniCalc_byMaru | 2026-06-17 | 5 (+47/-4) |
| 16 | `bb530fc` | randomgenerator | 2026-06-17 | 2 (+27) |

---

### Git Review

| Commit | Message quality | Scope | Hygiene | Notes |
|--------|----------------|-------|---------|-------|
| `1891fda` | ✅ OK | — | ✅ Clean | init |
| `4201806` | ❌ Typo | — | ✅ Clean | "webeditortricks.htlm" – typo (`.htlm` not `.html`) |
| `bb530fc` | ✅ OK | ✅ Atomic | ✅ Clean | |
| `845410a` | ✅ Good | ✅ Atomic | ✅ Clean | Personal naming ("byMaru") – charming |
| Most others | ⚠️ File-only | ⚠️ Minimal | ✅ Clean | Many messages are just the filename; don't describe the task |

**Observations:**
- Many commit messages are just the filename or task number — lack context
- Typo in a commit message (`htlm`)
- Two commits on the same day (June 17) for closely related JS features — could have been one commit
- Last commit June 2026 — actively working

---

### Code Review

**`bb530fc` — randomgenerator**

- What was done: HTML structure with `field1`, `field2` inputs, button, and output div — good structure
- Issues/Risks: **`RandomGenerator.js` is an empty file** (0 bytes). The HTML is present but no JavaScript logic implemented. The random number generator does not work. (`02.Web_Basics/HTML&JS/RandomGenerator/RandomGenerator.js`)
- Suggestions: Implement the generate function using `.value` and `Math.random()`

**`845410a` — miniCalc_byMaru**

- What was done: `getElementById`, `addEventListener`, `parseFloat`, `isNaN` validation, `alert()` for result output
- Issues/Risks: Uses `alert()` instead of rendering result in the DOM — less user-friendly and not in line with the expected pattern. `calculator.js` also lacks a closing `}` for the `else` block (the file is missing the final `}` — the `else {}` block is never closed which would cause a syntax error)
- The script is loaded without `defer` — will fail because the button doesn't exist yet when script runs (`<script src="calculator.js">` in `<head>` without `defer`)
- Suggestions: Move script to end of `<body>` or add `defer`; display result in DOM; close the `else` block

**Mercedes Website (`mercedes.css`):**

- What was done: Body background with cover image, header with `.left`/`.right` using `display: flex`
- Issues/Risks: CSS has a typo syntax error: `padding-right: 0 20px` (shorthand not valid on a single-direction property). `image-color: white` is not a valid CSS property. The CSS is also somewhat disorganized with redundant values.
- Suggestions: Use `padding: 0 20px` on the `padding` property; remove invalid properties

**CSS Test (`1test.css`):**

- What was done: CSS nesting syntax used (native CSS nesting is still experimental in some browsers; works in modern browsers)
- Uses `display: flex` in the footer ✅

---

### Task Fulfillment

| Expected item | Status | Notes |
|---------------|--------|-------|
| HTML | ✅ Done | Multiple HTML files with correct structure |
| CSS | ⚠️ Partial | Mercedes CSS has errors; basic CSS present |
| Flexbox | ✅ Done | Used in Mercedes and footer |
| Media Query | ❌ Missing | No `@media` query found |
| Grid | ❌ Missing | No CSS Grid found |
| JS | ✅ Done | If/else, Deno, loops, arrays all completed |
| Loops | ✅ Done | 8 loop exercises completed |
| If Conditions | ✅ Done | Multiple if/else exercises completed |
| getElementById | ⚠️ Partial | Used in calculator but has a syntax error; random generator JS is empty |

---

### Grade

| Criterion | Score |
|-----------|-------|
| Code Quality (40%) | 52 |
| Task Fulfillment (30%) | 60 |
| Git Discipline (20%) | 58 |
| Effort (10%) | 72 |

**Weighted Score: 58**

**Grade: 3** — Maru is actively working (most recent commit June 17, 2026) and covers most JS fundamentals. However, the random generator JS is empty, the calculator has a syntax error and missing `defer`, and the web topics are incomplete (no media query or grid). The Mercedes CSS has invalid properties. The foundation is there but execution needs attention to detail.

---

*Report generated by GitHub Copilot on 2026-06-22*

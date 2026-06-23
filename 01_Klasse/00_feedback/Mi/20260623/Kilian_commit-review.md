# Commit Review — 2026-06-22

**Student:** Kilian  
**Commits reviewed:** all (51 total)  
**Expected tasks:** html, css, flexbox, media query, grid, js, loops, if conditions, getElementById  
**Grade scale:** AT-1-5  

---

**Pull result:** updated  
**Branch:** main  
**Commits reviewed:** 51 (oldest → newest)  
**Active period:** 2025-10-22 → 2026-06-16 (~8 months)

---

### Commit Timeline (selected key commits)

| # | Hash | Message | Date | Files changed |
|---|------|---------|------|---------------|
| 1 | `39791f5` | Aufgaben 10 - 30 ferig gemacht | 2025-10-22 | — |
| 2 | `8365e62` | 40If-Bedingungen Basics Aufgabe 2 feritg | 2025-11-xx | — |
| 3 | `774f408` | 45 Deno Aufgabe 6 fertig gemacht | 2025-11-xx | — |
| 4 | `0e3b777` | 60Loops Aufgabe 1 fertig gemacht | 2025-12-xx | — |
| 5 | `f09dcf2` | 60 Loops Aufgabe 4 fertig gemacht | 2025-12-xx | — |
| 6 | `521fafb` | 110 Arrays Video und Aufgabe 1 fertig | 2026-01-xx | — |
| 7 | `a65390e` | 110 Array Aufgabe 6 fertig gemacht | 2026-01-xx | — |
| 8 | `9e72f09` | Aufgabe 1 fertig gemacht | 2026-01-28 | — |
| 9 | `e69cf8f` | 03Web_Position done | 2026-03-xx | — |
| 10 | `d54c875` | Mercedes Benz Header fertig gemacht | 2026-04-xx | — |
| 11 | `19c7ac8` | Mercedes Benz Website fertig gemacht | 2026-04-xx | — |
| 12 | `5dd3c75` | Videos angeschaut | 2026-05-xx | — |
| 13 | `58d93d5` | Taschenrechner fertig gebaut und angefangen mit Generator | 2026-06-02 | 5 (+101/-2) |
| 14 | `3f1f793` | Videos weiter gemacht | 2026-06-16 | 12 (+160/-27) |

---

### Git Review

| Commit | Message quality | Scope | Hygiene | Notes |
|--------|----------------|-------|---------|-------|
| All task commits | ✅ Good | ✅ Atomic | ✅ Clean | Consistent German descriptions |
| `5dd3c75` | ❌ Poor | ❌ No code | ✅ Clean | "Videos angeschaut" is not a valid commit |
| `b591dd4` | ⚠️ Merge | — | ✅ Clean | Merge commit visible |
| `3f1f793` | ⚠️ Vague | ⚠️ Multi-task | ✅ Clean | 12 files changed; multiple video exercises bundled |
| `58d93d5` | ⚠️ Multi | ⚠️ Combined | ✅ Clean | Calculator + generator starter in one commit |

**Observations:**
- "Videos angeschaut" (watched videos) is not a code change — should not be committed
- 51 commits over 8 months — excellent consistency
- Latest commit is June 2026 — very active
- No binaries, no `node_modules`

---

### Code Review

**Commit `3f1f793` — Videos weiter gemacht (latest)**

*Random Number Generator (02Second Video/script.js):*
- What was done: Reads two `input` values with `.value`, calculates range `parseInt(number2) - parseInt(number1) + 1`, generates correct bounded random number, displays with `getElementById("randomNumber").innerHTML`
- Issues/Risks: No input validation (non-numeric input would produce `NaN`); the formula correctly handles min/max range ✅
- This is the **best random generator implementation** in the class

*3rd Video (People List, 03Third Video/script.js):*
- What was done: Array of objects, `forEach` loop, dynamic HTML generation with `getElementById("content").innerHTML` — good pattern
- Issues/Risks: Inconsistent indentation in the `for` loop block (`const element = data[i]` has no indent). Minor style issue.

*4th Video (Todo List, 04Fourth Video/script.js):*
- What was done: Todo list with `add`, `delete`, `setIsDone` using `findIndex`, `find`, `splice` — advanced array methods
- Issues/Risks: Uses inline `onclick` event handlers in generated HTML strings (e.g. `onClick='setIsDone(...)'`) — this is valid but less clean than `addEventListener`; XSS risk if user-supplied data is ever rendered this way
- **This is the most advanced JS found in any student repository** ✅

**Flexbox & Grid (06Web_Flexbox.html, 07Web_CSSGrid.html):**
- Both exercises are complete and correct
- Grid includes `@media (min-width: 600px)` media query ✅

**Mercedes Benz Website:**
- `Riedmann.css`: full header with `display: flex`, logo, navigation — professional quality
- `style.css`: clean separate stylesheet

---

### Task Fulfillment

| Expected item | Status | Notes |
|---------------|--------|-------|
| HTML | ✅ Done | Well-structured HTML in all exercises |
| CSS | ✅ Done | Multiple CSS files, clean code |
| Flexbox | ✅ Done | Correct `display: flex` with `justify-content`, `align-items`, `flex-direction` |
| Media Query | ✅ Done | `@media (min-width: 600px)` in grid exercise |
| Grid | ✅ Done | `grid-template-columns`, `minmax`, responsive columns |
| JS | ✅ Done | Full exercises + advanced Todo list with array methods |
| Loops | ✅ Done | All loop exercises (Aufgabe 1-8) completed |
| If Conditions | ✅ Done | All if/else exercises completed |
| getElementById | ✅ Done | Correct usage in all video exercises; range-aware random number generator |

---

### Grade

| Criterion | Score |
|-----------|-------|
| Code Quality (40%) | 88 |
| Task Fulfillment (30%) | 95 |
| Git Discipline (20%) | 78 |
| Effort (10%) | 90 |

**Weighted Score: 88**

**Grade: 1** — Kilian is the standout student in the class. All expected topics are covered, and the Todo list application demonstrates clearly advanced skills (array methods, dynamic rendering, state management). The random number generator is the most correct implementation in the class. Minor deductions for the "Videos angeschaut" commit and bundled commits.

---

*Report generated by GitHub Copilot on 2026-06-22*

# Commit Review — 2026-06-22

**Student:** Danilo  
**Commits reviewed:** all (42 total)  
**Expected tasks:** html, css, flexbox, media query, grid, js, loops, if conditions, getElementById  
**Grade scale:** AT-1-5  

---

**Pull result:** no changes  
**Branch:** main  
**Commits reviewed:** 42 (oldest → newest)  
**Active period:** 2025-10-15 → 2026-05-20 (~7 months)

---

### Commit Timeline (selected key commits)

| # | Hash | Message | Date | Files changed |
|---|------|---------|------|---------------|
| 1 | `cd47a89` | init | 2025-10-15 | — |
| 2 | `a438d34` | Aufgabe_6_Getränkeautomat finished | 2025-11-xx | — |
| 3 | `de16e9c` | finished Aufgabe_1 (60_Loops) | 2025-12-xx | — |
| 4 | `5d6434f` | finished 110_Arrays / Aufgabe_1.1 | 2026-01-xx | — |
| 5 | `f4d3d45` | 120 Reorg, added drawing game | 2026-01-28 | — |
| 6 | `93aea1d` | finished 01_VSC_Tricks | 2026-03-xx | — |
| 7 | `32a0f1d` | finished 06_Flex-Box | 2026-04-xx | — |
| 8 | `2f5d7e1` | finished 07_Flex-Grid | 2026-04-xx | — |
| 9 | `f0a2800` | finished 08_Responsive_Web | 2026-04-xx | — |
| 10 | `9221d62` | 09_Units_Done | 2026-04-xx | — |
| 11 | `d15b19d` | Mercedes In Progress | 2026-05-xx | — |
| 12 | `b760e46` | changed Mercedes | 2026-05-xx | — |
| 13 | `f624c0c` | changed index.html | 2026-05-xx | — |
| 14 | `80b49de` | finished 01_Zugriff_JS_HTML | 2026-05-20 | 2 (+15) |

---

### Git Review

| Commit | Message quality | Scope | Hygiene | Notes |
|--------|----------------|-------|---------|-------|
| `cd47a89` | ✅ OK | ✅ Atomic | ✅ Clean | init |
| All task commits | ✅ Good | ✅ Atomic | ✅ Clean | Consistent "finished X / Aufgabe_Y" pattern |
| `f4d3d45` | ✅ Good | ⚠️ Multi-task | ✅ Clean | Reorg + drawing game in one commit |
| `b760e46`, `f624c0c` | ⚠️ Vague | ⚠️ Unclear | ✅ Clean | "changed" messages don't describe what changed |
| `80b49de` | ✅ Good | ✅ Atomic | ✅ Clean | |

**Observations:**
- Most commit messages follow a consistent, clear pattern ("finished X")
- A few "changed" messages are too vague
- No binaries, no `node_modules`, clean repository
- 42 commits over 7 months = good consistency

---

### Code Review

**Commit `32a0f1d` — finished 06_Flex-Box**

- What was done: Flexbox layout with `display: flex`, `grid-template-columns`, `grid-auto-rows`, `column-gap`, `row-gap`
- Issues/Risks: The file is named `06_Flex-Box` but the CSS uses CSS Grid (`grid-template-columns`), not Flexbox. This suggests the file was either mislabeled or the wrong exercise was copied (`02_Web_Basics/06_Flex-Box/style.css`)
- Suggestions: The flexbox file should use `display: flex` properties; grid belongs in the grid exercise

**Commit `2f5d7e1` — finished 07_Flex-Grid**

- What was done: Grid layout with `grid-template-columns: 33% 33% 33%`, span items
- Issues/Risks: Both Flex-Box and Flex-Grid CSS files are identical (`02_Web_Basics/07_Flex-Grid/style.css` matches `06_Flex-Box/style.css`) — possible copy-paste without differentiating the exercises
- Suggestions: Ensure the flexbox file demonstrates `display: flex` with `justify-content`, `align-items`, `flex-direction`

**Commit `f0a2800` — finished 08_Responsive_Web**

- What was done: Media query `@media (min-width: 600px)` with grid layout – correct responsive pattern
- Issues/Risks: Media query repeats the same grid definition without meaningful change for small screens (small screen shows the same as large in this implementation)
- Suggestions: Small screen should show `grid-template-columns: 100%` (single column) 

**Commit `80b49de` — finished 01_Zugriff_JS_HTML**

- What was done: `document.getElementById("content")` + `.innerHTML = "Super"` – correct and minimal DOM usage
- Issues/Risks: Implementation is very minimal (2 lines). No user interaction, no events, no input handling
- Suggestions: Extend with a button click event or input field to demonstrate interactive DOM manipulation

---

### Task Fulfillment

| Expected item | Status | Notes |
|---------------|--------|-------|
| HTML | ✅ Done | Clean HTML structure in all exercises |
| CSS | ✅ Done | Good variety of CSS properties |
| Flexbox | ⚠️ Partial | File exists but uses Grid instead of Flexbox |
| Media Query | ✅ Done | `@media (min-width: 600px)` in responsive web |
| Grid | ✅ Done | `grid-template-columns`, spans, gaps correctly used |
| JS | ✅ Done | Loops, if/else, Deno exercises, DOM access |
| Loops | ✅ Done | All 8 loops exercises completed |
| If Conditions | ✅ Done | Deno exercises and 50-series completed |
| getElementById | ⚠️ Partial | Done but only 2 lines; no interactive handling |

---

### Grade

| Criterion | Score |
|-----------|-------|
| Code Quality (40%) | 68 |
| Task Fulfillment (30%) | 78 |
| Git Discipline (20%) | 75 |
| Effort (10%) | 78 |

**Weighted Score: 73**

**Grade: 2** — Danilo shows consistent work with well-organized commit history. Coverage of all topics is present, but the Flexbox exercise contains Grid code, and the `getElementById` exercise is very minimal. The "changed" commit messages reduce git discipline. Overall solid effort with room for deeper implementation.

---

*Report generated by GitHub Copilot on 2026-06-22*

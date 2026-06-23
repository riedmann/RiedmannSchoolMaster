# Commit Review — 2026-06-22

**Student:** Tiago  
**Commits reviewed:** all (54 total)  
**Expected tasks:** html, css, flexbox, media query, grid, js, loops, if conditions, getElementById  
**Grade scale:** AT-1-5  

---

**Pull result:** updated  
**Branch:** main  
**Commits reviewed:** 54 (oldest → newest)  
**Active period:** 2025-10-22 → 2026-06-10 (~7.5 months)

---

### Commit Timeline (selected key commits)

| # | Hash | Message | Date | Files changed |
|---|------|---------|------|---------------|
| 1 | `e4afaab` | added task1 | 2025-10-22 | — |
| 2 | `8c98d16` | 40_If-Bedingungen_Aufgabe_1 Done | 2025-11-xx | — |
| 3 | `280cc1b` | 45_Deno_Aufgabe_1 Done | 2025-11-xx | — |
| 4 | `9e97372` | 60_Loops_Aufgabe_1 Done | 2025-12-xx | — |
| 5 | `9bb763e` | 60_Loops_Aufgabe_8 Done | 2025-12-xx | — |
| 6 | `3774b30` | 70_Arrays_Aufgabe1-3 Done | 2026-01-xx | — |
| 7 | `daa5b49` | 70_Arrays_Aufgabe_5 Done | 2026-01-xx | — |
| 8 | `9d2c901` | 01_VSC_Tricks Done | 2026-03-xx | — |
| 9 | `508defb` | 03_Position Done | 2026-03-xx | — |
| 10 | `a359755` | Mercedes Website | 2026-04-xx | — |
| 11 | `49bafa8` | Mercedes Benz Website Done | 2026-04-xx | — |
| 12 | `64d55d6` | Recommit | 2026-05-xx | — |
| 13 | `6f692c4` | html&js mini Calculator done | 2026-06-10 | 3 (+75) |
| 14 | `1096f6a` | recommit | 2026-06-10 | 7 (-50) |

---

### Git Review

| Commit | Message quality | Scope | Hygiene | Notes |
|--------|----------------|-------|---------|-------|
| Most commits | ✅ Good | ✅ Atomic | ✅ Clean | Excellent "X Done" pattern consistently used |
| `64d55d6`, `1096f6a`, `6fe5dd7` | ⚠️ Vague | ⚠️ Unclear | ✅ Clean | Multiple "Recommit" / "recommit" messages |
| `f565a41` | ✅ Honest | — | ✅ Clean | "Mini_Rechner unfinished" — notes incompleteness |
| `5692ffa`, `ee046f1` | ⚠️ Duplicate | — | ✅ Clean | "Mercedes Website recommit" appears multiple times |
| `1096f6a` | ⚠️ Destructive | ⚠️ Delete | ✅ Clean | Latest commit deletes previously working files (`JS_HTML/` folder) |

**Observations:**
- 54 commits is top-2 in the class — excellent effort
- Pattern of "recommit" messages suggests uncertainty about git workflow (maybe force-pushed and re-added)
- Latest commit (`recommit`) deletes the old JS folder but the new one is present — acceptable cleanup
- "Recommit" as a message doesn't explain the reason

---

### Code Review

**`6f692c4` — html&js mini Calculator done**

- What was done: Full 4-operation calculator using `getElementById`, `addEventListener`, `parseFloat` — all four buttons (add, sub, mult, div) working with results displayed in DOM via `innerHTML`
- Issues/Risks: `alert("Test")` at top of file runs on every page load — likely debug code left in (`01_Webbasics/03_html&js/02_JS_HTML/index.js` line 1)
- `const sumadd = document.getElementById("add").addEventListener(...)` — assigning event listener return value to `const` is incorrect; `addEventListener` returns `undefined`. Not a bug but a misunderstanding.
- No `isNaN` validation — if user types letters, `NaN` will be displayed
- Suggestions: Remove `alert("Test")`; add input validation; don't assign `addEventListener` to a variable

**`1096f6a` — recommit (deleted old files)**

- What was done: Deletes the old `JS_HTML/` and `Test/` folders (which contained an older version with a bug — `nodeValue` instead of `.value` for input reading)
- The cleanup is good practice ✅

**Mercedes Website (`01_Webbasics/01_html/Websitecopy/style.css`)**

- What was done: Full flexbox header with `display: flex`, `justify-content: space-between`, icon styling, `.icons { gap }`, proper color scheme
- Issues/Risks: No evidence of media query or responsive design in the Mercedes website
- The CSS is clean and well-organized ✅

**No CSS Grid or Media Query found** despite having a "VSC_Tricks" and "Position" commit — those exercises don't include grid/responsive.

---

### Task Fulfillment

| Expected item | Status | Notes |
|---------------|--------|-------|
| HTML | ✅ Done | Well-structured HTML in all exercises |
| CSS | ✅ Done | Clean CSS throughout |
| Flexbox | ✅ Done | Used correctly in Mercedes header and other places |
| Media Query | ❌ Missing | No `@media` query found |
| Grid | ❌ Missing | No CSS Grid found |
| JS | ✅ Done | Full loops, if/else, Deno, arrays + calculator |
| Loops | ✅ Done | All 8 loop exercises completed |
| If Conditions | ✅ Done | All if/else exercises completed |
| getElementById | ✅ Done | Correct usage in calculator for all 4 operations |

---

### Grade

| Criterion | Score |
|-----------|-------|
| Code Quality (40%) | 72 |
| Task Fulfillment (30%) | 78 |
| Git Discipline (20%) | 72 |
| Effort (10%) | 88 |

**Weighted Score: 75**

**Grade: 2** — Tiago shows excellent effort (54 commits, recent activity) and covers most topics. The calculator is the most complete 4-operation implementation with DOM output. Main gaps: no media queries and no CSS grid. The `alert("Test")` debug code and missing input validation reduce code quality. Multiple "recommit" messages indicate some git workflow confusion.

---

*Report generated by GitHub Copilot on 2026-06-22*

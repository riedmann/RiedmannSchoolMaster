# Commit Review — 2026-06-22

**Student:** Tim  
**Commits reviewed:** all (56 total)  
**Expected tasks:** html, css, flexbox, media query, grid, js, loops, if conditions, getElementById  
**Grade scale:** AT-1-5  

---

**Pull result:** updated  
**Branch:** main  
**Commits reviewed:** 56 (oldest → newest)  
**Active period:** 2025-10-15 → 2026-06-03 (~7.5 months)

---

### Commit Timeline (selected key commits)

| # | Hash | Message | Date | Files changed |
|---|------|---------|------|---------------|
| 1 | (init) | first commits | 2025-10-15 | — |
| 2 | (if) | 40_If exercises | 2025-11-xx | — |
| 3 | (deno) | 45_Deno exercises | 2025-11-xx | — |
| 4 | (loops) | 60_Loops exercises | 2025-12-xx | — |
| 5 | (arrays) | 70_Arrays exercises | 2026-01-xx | — |
| 6 | `02d65785` | 5 Aufgabe html | 2026-03-24 | — |
| 7 | `c23de320` | 4 Aufgabe html | 2026-03-24 | — |
| 8 | `bfb3c1ec` | 2 Aufgabe Html | 2026-03-24 | — |
| 9 | `796a81ab` | mercedes website | 2026-04-30 | — |
| 10 | `b9a069c` | Test | 2026-04-30 | — |
| 11 | `5dbef8e` | Mercedes | 2026-05-20 | — |
| 12 | `52a3cbf` | Mercedes Website finsihed | 2026-06-02 | — |
| 13 | `bfffca0` | Ordnung | 2026-06-02 | 5 (reorg) |
| 14 | `1775ba6` | 1 Js Aufgabe | 2026-05-20 | 2 (+15) |
| 15 | `af7babf` | Zufallsgenerator | 2026-06-03 | 2 (+52) |

---

### Git Review

| Commit | Message quality | Scope | Hygiene | Notes |
|--------|----------------|-------|---------|-------|
| `b9a069c` | ❌ Poor | — | ✅ Clean | "Test" — no information |
| `1775ba6` | ✅ OK | ✅ Atomic | ✅ Clean | "1 Js Aufgabe" — could be more specific |
| `52a3cbf` | ⚠️ Typo | ✅ Atomic | ✅ Clean | "finsihed" — typo |
| Most others | ✅ OK | ✅ Atomic | ✅ Clean | Numbered HTML aufgabe pattern OK |
| `bfffca0` | ✅ Good | ✅ Atomic | ✅ Clean | "Ordnung" — reorganization commit |
| `af7babf` | ✅ Good | ✅ Atomic | ✅ Clean | Zufallsgenerator |

**Observations:**
- 56 commits — most commits in the class, excellent consistency
- One commit authored as `Co-authored-by: Copilot` in `1775ba6` — student honestly acknowledges AI assistance for one part
- Duplicate Mercedes commits (several iterations) — normal development pattern
- Generally clean, no binaries

---

### Code Review

**`1775ba6` — 1 Js Aufgabe (`03_WEb.Js/01_script.js`)**

- What was done: `getElementById`, `addEventListener` for `keydown` events, tracking all typed keys and displaying with `innerText` — creative and correct DOM usage ✅
- Issues/Risks: Comment explicitly states `\nAlle TAsten hab ich von Copilot` — AI-assisted. The comment also contains personal messages to the AI ("bitte liebe Ki gib mir ein 1"). This is noteworthy — the student is transparent about it.
- The core concept (listening to keyboard events and updating DOM) is correctly implemented regardless of the AI assist.

**`af7babf` — Zufallsgenerator (`03_WEb.Js/02_Zufall.html` + `02_Zufall.css`)**

- What was done: HTML structure with input fields and output div; CSS with `display: flex`, proper sizing, `justify-content: space-evenly`
- Issues/Risks: **`02_Zufall.js` is empty** — the button has no event listener and the random number logic is not implemented. The HTML references the script but the file has no code.
- Suggestions: Implement `generate()` function with `.value` reading and `Math.random()`

**Mercedes Website (`02_WebBasics/16_mercedes.css`)**

- What was done: Full responsive-looking header with `display: flex`, `justify-content: space-between`, hover transitions (`transform: translateY(-3px)`, color change), extensive nav styling
- Issues/Risks: Uses `text-shadow: 0px 0px 0px` which has no visible effect; transition on `text-shadow` is incorrectly defined with 0 blur
- Otherwise the Mercedes CSS is one of the more polished implementations in the class ✅

**Flexbox (`02_WebBasics/05_Flex_Box.html`)**

- What was done: `display: flex`, `flex-direction: row`, `justify-content: center/space-between`, `align-items: center` — complete and correct ✅
- Issues/Risks: `justify-content` defined twice (both `center` and `space-between`) — only the last one applies

**No CSS Grid or Media Query found.**

---

### Task Fulfillment

| Expected item | Status | Notes |
|---------------|--------|-------|
| HTML | ✅ Done | Well-structured HTML throughout |
| CSS | ✅ Done | Multiple exercises with variety |
| Flexbox | ✅ Done | Correct and detailed flexbox implementation |
| Media Query | ❌ Missing | No `@media` query found |
| Grid | ❌ Missing | No CSS Grid found |
| JS | ⚠️ Partial | Keyboard events work; Zufallsgenerator JS empty |
| Loops | ✅ Done | All loop exercises completed |
| If Conditions | ✅ Done | All if/else exercises completed |
| getElementById | ✅ Done | Correctly used in keyboard exercise |

---

### Grade

| Criterion | Score |
|-----------|-------|
| Code Quality (40%) | 68 |
| Task Fulfillment (30%) | 72 |
| Git Discipline (20%) | 75 |
| Effort (10%) | 90 |

**Weighted Score: 73**

**Grade: 2** — Tim has the highest commit count in the class, showing excellent effort and consistency. Flexbox and Mercedes CSS are well done. Key gaps: the Zufallsgenerator JS is empty, and no media query or CSS grid exercises are present. The honest Copilot co-author note shows integrity. The missing CSS Grid and empty JS file prevent a higher grade.

---

*Report generated by GitHub Copilot on 2026-06-22*

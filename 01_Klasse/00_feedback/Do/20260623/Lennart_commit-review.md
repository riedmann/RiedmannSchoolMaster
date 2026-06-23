# Commit Review — 2026-06-22

**Commits reviewed:** all (52)
**Expected tasks:** html css flexbox media query grid js loops if conditions getelementbyid
**Grade scale:** AT-1-5

---

## Lennart

**Pull result:** no changes
**Branch:** main
**Commits reviewed:** 52 (oldest → newest)

### Commit Timeline

| # | Hash | Message | Date | Files changed |
|---|------|---------|------|---------------|
| 1 | `8e103b4` | changed text | — | — |
| 2 | `1f4d717` | :) | — | — |
| 3 | `a82e4a8` | finished result.js | — | — |
| 4 | `445289b` | Createt name | — | — |
| 5 | `2645725` | finished name.js | — | — |
| 6 | `31ba092` | Finished debugging it | — | — |
| 7–8 | `3264a4a`–`afe45e9` | createt/finished markt | — | — |
| 9 | `2fca538` | gewicht preis erstellt | — | — |
| 10–11 | `026bc37`–`4467ede` | if task 1+2 finished | — | — |
| 12 | `3526110` | format | — | — |
| 13 | `5ccd99f` | debugg | — | — |
| 14 | `8165b38` | did some stuff | — | — |
| 15–16 | `34c2a78`–`673334e` | Finished 43/task 1+2 | — | — |
| 17 | `e25bbf7` | 44/task1 finished | — | — |
| 18–19 | `ff9f28a`–`4331735` | 44/task2 (×2) | — | — |
| 20 | `edd1a19` | 44/task4 (last was task3) | — | — |
| 21 | `4d4d043` | 44/task5 && 50/task1 | — | — |
| 22–28 | `2a3d15f`–`4087e0a` | 60/task1–8 | — | — |
| 29 | `6de4c0e` | Renumbering & 11/task1 a,b | — | — |
| 30–32 | `ba8016a`–`c0172e8` | 11/task1c–task3 | — | — |
| 33–34 | `69dde67`–`3b6f8aa` | 11/task3–5 | — | — |
| 35 | `46acad2` | Simples Cadino | — | — |
| 36 | `7a3c86e` | Würfeln_fertig | — | — |
| 37 | `96fb6fe` | RockPaperScissor fertig | — | — |
| 38 | `3677e4c` | Zahlenraten_done | — | — |
| 39 | `f9ce9fa` | Minesweeper finished | — | — |
| 40 | `416d24f` | Mineesweeper | — | — |
| 41 | `3dce9d4` | Made Game,not working) | — | — |
| 42 | `c82065b` | html | — | — |
| 43 | `e32715b` | MyGame_Cube-Movement | — | — |
| 44 | `1564f61` | Lennart-Isaak | — | — |
| 45 | `64ea685` | zzu | — | — |
| 46 | `7af6747` | Website_workedd | — | — |
| 47 | `d2fcb35` | hoppala | — | — |
| 48 | `edc6de9` | Mercedes | — | — |
| 49 | `ac0e2d6` | MERCEDES | — | — |
| 50 | `5f8832d` | Finished mercedes Website | 2026-04-30 | 3 |
| 51 | `f64b36e` | Calculator | 2026-05-28 | 2 |

### Git Review

| Commit | Message quality | Scope | Hygiene | Notes |
|--------|----------------|-------|---------|-------|
| `1f4d717` | ⚠️ ":)" | ⚠️ Unknown | ✅ | Emoji-only message |
| `8165b38` | ⚠️ "did some stuff" | ⚠️ Multi-topic | ✅ | Vague |
| `5ccd99f` | ⚠️ "debugg" | ⚠️ Unknown | ✅ | Typo + vague |
| `64ea685` | ⚠️ "zzu" | ⚠️ Unknown | ✅ | Meaningless |
| `ff9f28a`+`4331735` | ⚠️ Duplicate | ⚠️ Same task | ✅ | "44/task2" twice |
| `f9ce9fa`+`416d24f` | ⚠️ Duplicate | ⚠️ Minesweeper | ✅ | "Minesweeper"  then "Mineesweeper" (typo) |
| Task commits | ✅ Good | ✅ Atomic | ✅ Clean | |

**Summary:** 52 commits is excellent. Task commits ("60/task1", "Finished 43/task1") are clear and well-organized. Some early vague messages and a few duplicates. Excellent binary-free hygiene.

### Code Review

**Commit `f64b36e` — Calculator (`1bWI_Web/Html+js/`)**

- **What was done:** 4-operation calculator with `onclick` attribute buttons and a shared `calculate()` function.
- **Correctness:** All four operations work. No division-by-zero guard (dividing by zero yields `Infinity`) — should show error.
- **Readability:** Clean, compact, easy to read. `Number()` conversion is appropriate.
- **Note:** Uses `onclick="calculate('+')"`in HTML — inline handlers are acceptable for a beginner project, but `addEventListener` is preferred for separation of concerns.
- No newline at end of both files.

**Commit `5f8832d` — Finished mercedes Website**

- **What was done:** Full Mercedes header with `@font-face` custom fonts (woff2), flexbox layout, SVG assets.
- **CSS quality:** Excellent — `display: flex`, `align-items: center`, `justify-content: space-between`, proper `box-sizing: border-box`, `overflow-x: hidden`.
- **Best practice:** `*` selector with `box-sizing: border-box` ✅; custom font loading ✅.
- Uses `filter: brightness(0) invert(1)` to colour SVG icons — clever technique.
- No responsive media queries — fixed `padding: 0 40px` may break on mobile.

**CSS (`1bWI_Web/Css/Css1/`)**

- Has a dedicated CSS exercise file — shows separate study of CSS concepts.

### Task Fulfillment

| Expected item | Status | Notes |
|---------------|--------|-------|
| HTML | ✅ Done | Mercedes, calculator, CSS exercises |
| CSS | ✅ Done | Custom fonts, flexbox, selectors |
| Flexbox | ✅ Done | Mercedes header uses full flexbox |
| Media Query | ❌ Missing | No `@media` queries found |
| Grid | ❌ Missing | No CSS grid found |
| JS | ✅ Done | Variables, if-conditions, loops, Deno, arrays, minigames |
| Loops | ✅ Done | 60/task1–8 all completed |
| If conditions | ✅ Done | 43/44 tasks, if task 1+2 |
| getElementById | ✅ Done | Calculator uses `getElementById` |

### Grade

**Code Quality:** 80 | **Task Fulfillment:** 80 | **Git Discipline:** 78 | **Effort:** 85

**Weighted Score:** 80×0.4 + 80×0.3 + 78×0.2 + 85×0.1 = 32.0 + 24.0 + 15.6 + 8.5 = **80.1**

**Grade: 2 (Gut)** — Lennart is one of the strongest students with 52 commits, an excellent Mercedes project (custom fonts, proper flexbox), and a working calculator. Missing only media queries and CSS grid for a grade 1.

---

*Report generated by GitHub Copilot on 2026-06-22*
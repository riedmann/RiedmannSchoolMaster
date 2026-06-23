# Commit Review — 2026-06-22

**Student:** Jakob  
**Commits reviewed:** all (53 total)  
**Expected tasks:** html, css, flexbox, media query, grid, js, loops, if conditions, getElementById  
**Grade scale:** AT-1-5  

---

**Pull result:** updated  
**Branch:** main  
**Commits reviewed:** 53 (oldest → newest)  
**Active period:** 2025-10-15 → 2026-06-17 (~8 months)

---

### Commit Timeline (selected key commits)

| # | Hash | Message | Date | Files changed |
|---|------|---------|------|---------------|
| 1 | `d010d48` | aufgabe1 | 2025-10-15 | — |
| 2 | `7c354c4` | 45 Aufgabe1 Done | 2025-11-xx | — |
| 3 | `daa8073` | Loops Aufgabe 1 Done | 2025-12-xx | — |
| 4 | `ac5b4e9` | Loops Aufgabe 8 Exclude Range Done | 2025-12-xx | — |
| 5 | `6f2ab1a` | Arrays Aufgabe 1 Done | 2026-01-xx | — |
| 6 | `e8f9109` | Arrays Aufgabe 5 Done | 2026-01-xx | — |
| 7 | `37a1d96` | 05 Box Sizing fertig | 2026-03-xx | — |
| 8 | `b75c3e6` | 06 Flex Box fertig | 2026-03-xx | — |
| 9 | `10b594a` | mercedes fertig | 2026-04-xx | — |
| 10 | `881f4d9` | 1 Video fertig | 2026-05-xx | — |
| 11 | `6902c8c` | 2 Video fertig | 2026-05-xx | — |
| 12 | `186f284` | 3 Video angefangen | 2026-05-20 | — |
| 13 | `3f31dfc` | JS Mini rechner video fertig | 2026-06-10 | 2 (+16/-6) |
| 14 | `43952ec` | Video 4 Zufallsgenerator angefangen | 2026-06-17 | 2 (+29) |

---

### Git Review

| Commit | Message quality | Scope | Hygiene | Notes |
|--------|----------------|-------|---------|-------|
| Task commits | ✅ Good | ✅ Atomic | ✅ Clean | "X Done" pattern is clear and consistent |
| `14f0325` | ❌ Poor | ❌ Unclear | ✅ Clean | "nur kurz zeit wegen superkahoot" – not a valid commit message |
| `9aa504b`, `41855dd` | ⚠️ Reorg | — | ✅ Clean | Several repo reorg/fix commits indicate structural issues earlier |
| `b4222bb` | ⚠️ Long | ⚠️ Complex | ✅ Clean | Long message about GitHub deleting folder – valid context but shows repo management issues |
| `43952ec` | ⚠️ Incomplete | — | ✅ Clean | "angefangen" (started) – commit while feature is not finished |

**Observations:**
- Excellent commit frequency: 53 commits over 8 months — best effort in the class
- One completely unprofessional commit message ("superkahoot")
- Several reorg commits suggest initial folder structure problems
- Last commit (2026-06-17) is very recent — actively working

---

### Code Review

**Commit `b75c3e6` — 06 Flex Box fertig**

- What was done: `display: flex` with `justify-content: space-evenly`, `align-items: center` in `03_Web/CSS/06_Flex_Box/style.css` — correct and complete flexbox demonstration

**Commit `10b594a` — mercedes fertig**

- What was done: Professional Mercedes header with `display: flex`, `justify-content: space-between`, responsive spacing, icon images with proper sizing, nested nav lists with `display: inline-block`
- Issues/Risks: `color: white` placed in the `* {}` reset selector resets ALL text to white globally (`03_Web/Übungen_CSS/0001_Mercedes_Übung/style.css` line 1-4). This is a common but incorrect pattern.
- Suggestions: Set `color: white` only on `.header` rather than the global reset

**Commit `3f31dfc` — JS Mini rechner video fertig**

- What was done: `getElementById`, `addEventListener`, `parseFloat`, `isNaN` validation, result displayed via `innerText` — solid and correct pattern
- Issues/Risks: The output string is missing a space/colon: `"Sum" + sum` should be `"Sum: " + sum` (`03_Web/Übungen_CSS/01_Zugriff_JS_Html_3Vid/script.js` line 11)
- Also: `console.log(value1)` debug statement left in

**Commit `43952ec` — Video 4 Zufallsgenerator angefangen**

- What was done: HTML structure and CSS for the random number generator created; button and input fields present
- Issues/Risks: The JS logic is not yet implemented (no `.js` file added) — committed as "angefangen" (started), so this is expected but incomplete
- The CSS is missing a semicolon: `.box { display: flex` — no semicolon on last declaration (`style.css` line 2)

---

### Task Fulfillment

| Expected item | Status | Notes |
|---------------|--------|-------|
| HTML | ✅ Done | Well-structured HTML throughout |
| CSS | ✅ Done | Good use of selectors, multiple CSS files |
| Flexbox | ✅ Done | Correct flexbox in `06_Flex_Box` and Mercedes header |
| Media Query | ⚠️ Partial | Not found in reviewed files; may be present in earlier web exercises |
| Grid | ⚠️ Partial | Not found in reviewed files |
| JS | ✅ Done | Full loops, if/else, Deno + DOM exercises |
| Loops | ✅ Done | All 8 loops exercises completed with meaningful names |
| If Conditions | ✅ Done | Multiple if/else exercises; temperature, speed, movie ticket |
| getElementById | ✅ Done | Correct usage in calculator script |

---

### Grade

| Criterion | Score |
|-----------|-------|
| Code Quality (40%) | 78 |
| Task Fulfillment (30%) | 82 |
| Git Discipline (20%) | 73 |
| Effort (10%) | 92 |

**Weighted Score: 79**

**Grade: 2** — Jakob shows excellent effort with 53 commits, the most consistent contributor in the class. The JavaScript DOM work is correct, flexbox and Mercedes website are well-implemented. Minor issues: one unprofessional commit message, global color reset, and missing CSS Grid / media query coverage. The Zufallsgenerator is started but not complete.

---

*Report generated by GitHub Copilot on 2026-06-22*

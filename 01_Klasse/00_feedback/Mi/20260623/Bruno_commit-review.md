# Commit Review — 2026-06-22

**Student:** Bruno  
**Commits reviewed:** all (39 total)  
**Expected tasks:** html, css, flexbox, media query, grid, js, loops, if conditions, getElementById  
**Grade scale:** AT-1-5  

---

**Pull result:** updated  
**Branch:** main  
**Commits reviewed:** 39 (oldest → newest)  
**Active period:** 2025-11-12 → 2026-06-10 (~7 months)

---

### Commit Timeline (selected key commits)

| # | Hash | Message | Date | Files changed |
|---|------|---------|------|---------------|
| 1 | `662b4ec` | init | 2025-11-12 | — |
| 2 | `8caa43b` | 10_JS_Variablen done | 2025-11-12 | — |
| 3 | `dedd7a7` | 41 If Aufgabe mit Else done | 2025-11-19 | — |
| 4 | `415c4ca` | 60 Loops Aufgabe 1 done | 2025-12-03 | — |
| 5 | `c687bcd` | done Aufgabe 2-8 Loops | 2026-01-06 | — |
| 6 | `9e74359` | 70 Arrays Aufgabe 1-2 done | 2026-01-14 | — |
| 7 | `234014f` | Mini Game Würfeln done | 2026-01-28 | — |
| 8 | `4376139` | Box_Sizing | 2026-03-11 | — |
| 9 | `b4a31b1` | respponsive Web done | 2026-03-25 | 5 (+252) |
| 10 | `a74ce9a` | Mercedes Benz Website heading done | 2026-04-15 | 2 (+79) |
| 11 | `71d0b63` | mercedes Benz | 2026-04-30 | 3 (+62/-28) |
| 12 | `786073b` | javascript übung rechner | 2026-05-20 | 12 (+55/-1) |
| 13 | `cd47cfe` | Rechner mit css gestaltet | 2026-05-28 | 5 (+43/-35) |
| 14 | `0c72664` | rechner + - * / gemacht | 2026-06-02 | 6 (+72/-3) |
| 15 | `3b8dd7a` | Number Generator | 2026-06-10 | 1 (+13) |
| 16 | `117be37` | merge | 2026-06-10 | 5 (+66/-6) |

---

### Git Review

| Commit | Message quality | Scope | Hygiene | Notes |
|--------|----------------|-------|---------|-------|
| `662b4ec` | ✅ OK | ✅ Atomic | ✅ Clean | init |
| `f5bf418` | ❌ Poor | ⚠️ Unclear | ✅ Clean | Message is just "." – uninformative |
| `b4a31b1` | ⚠️ Typo | ✅ Atomic | ✅ Clean | "respponsive" – typo in message |
| `71d0b63`–`117be37` | ✅ Good | ✅ Atomic | ✅ Clean | Web topics well-described |
| `117be37` | ⚠️ Vague | ⚠️ Multi-topic | ✅ Clean | "merge" commits multiple changes |

**Observations:**
- One commit message is just "." – should always be descriptive
- One merge commit bundles multiple unrelated changes
- No `node_modules`, no binaries, good hygiene overall
- 39 commits over 7 months = solid consistency

---

### Code Review

**Commit `b4a31b1` — respponsive Web done**

- What was done: Responsive layout using `@media` query with `display: flex` / `display: grid` switch at `min-width: 308px`
- Issues/Risks: The media query breakpoint of 308px is very small (almost all screens would match it). Standard breakpoints are 600px/768px. The responsive behavior is effectively always triggered (`01_Web/08_Responsive-Web.html`)
- Suggestions: Use `max-width: 600px` or a more realistic breakpoint

**Commit `a74ce9a` + `71d0b63` — Mercedes Benz Website**

- What was done: Created a proper `vikingstyle.css` with flexbox header, nav with `display: inline`, icon styling with `filter: brightness(0) invert(1)`
- Issues/Risks: `background-color: red` is left on `.body` div (visible on load), real URL hardcoded for background image (fragile); CSS placed in separate file – good practice
- Suggestions: Remove debug `background-color: red`; use a local image or placeholder

**Commit `0c72664` — rechner + - * / gemacht**

- What was done: Four operation calculator using `getElementById`, `addEventListener`, `parseFloat`, `isNaN` validation – solid pattern
- Issues/Risks: Button IDs `add`, `add1`, `add2`, `add3` – naming is confusing; `console.log(value1)` debug statements left in production code
- Suggestions: Use `add`, `subtract`, `multiply`, `divide` for button IDs; remove debug `console.log`

**Commit `117be37` — merge (Zufallsgenerator)**

- What was done: Random number generator HTML/JS + a small DOM exercise (`Üben/ü.js`)
- Issues/Risks: **Bug** – `document.getElementById("field1").ariaValueMin` is incorrect; `.ariaValueMin` is always `null` on a text input. Should use `.value`. The random number generator does NOT use the input fields at all – `Math.floor(Math.random() * 10)` ignores user input. (`01_Web/Web-Script/Zufallsgenerator/02.js` line 2-3)
- Suggestions: Fix to `document.getElementById("field1").value` and implement the range-based random logic

**Commit `117be37` — Üben JS**

- What was done: `document.getElementById("button").addEventListener("click", ...)` changing innerHTML – correct `getElementById` usage ✅

---

### Task Fulfillment

| Expected item | Status | Notes |
|---------------|--------|-------|
| HTML | ✅ Done | Solid HTML structure throughout |
| CSS | ✅ Done | Good use of selectors, properties |
| Flexbox | ✅ Done | `display: flex` in Mercedes header, Rechner, Zufallsgenerator |
| Media Query | ✅ Done | `@media (min-width: 308px)` – present but breakpoint is too small |
| Grid | ✅ Done | `display: grid` in `07_Flex-Grid.html` and responsive layout |
| JS | ✅ Done | Calculator, Zufallsgenerator, DOM events |
| Loops | ✅ Done | Loops Aufgaben 1-8 completed |
| If Conditions | ✅ Done | If/else in calculator and Deno tasks |
| getElementById | ⚠️ Partial | Used correctly in several places; misused in Zufallsgenerator (`.ariaValueMin` bug) |

---

### Grade

| Criterion | Score |
|-----------|-------|
| Code Quality (40%) | 72 |
| Task Fulfillment (30%) | 85 |
| Git Discipline (20%) | 68 |
| Effort (10%) | 80 |

**Weighted Score: 77**

**Grade: 2** — Bruno covers all expected topics with working code in most places. The calculator and Mercedes website are well-implemented. The `ariaValueMin` bug in the Zufallsgenerator and the single "." commit message pull the score down slightly. The media query breakpoint issue shows a partial understanding of responsive design.

---

*Report generated by GitHub Copilot on 2026-06-22*

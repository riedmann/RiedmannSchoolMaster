# Commit Review — 2026-05-28

**Commits reviewed:** 3  
**Expected tasks:** HTML, JS, DOM manipulation, innerHTML, calculator, eventListener  
**Grade scale:** AT-1-5

---

## Daniel

**Pull result:** no changes  
**Branch:** main  
**Commits reviewed:** 3 (oldest → newest)

### Commit Timeline

| # | Hash | Message | Date | Files changed |
|---|------|---------|------|---------------|
| 1 | `db771fc` | erneuern | 2026-04-16 | 5 |
| 2 | `a3acfe3` | Mercedes html | 2026-04-30 | 2 |
| 3 | `8793791` | 01_Video | 2026-05-28 | 2 |

### Git Review

| Commit | Message quality | Scope | Hygiene | Notes |
|--------|----------------|-------|---------|-------|
| `db771fc` | ⚠️ Vague | ⚠️ Mixed (file moves + new content) | ✅ Clean | "erneuern" (renew) says nothing about what changed |
| `a3acfe3` | ✅ OK | ✅ Atomic | ✅ Clean | — |
| `8793791` | ⚠️ Vague | ✅ Atomic | ✅ Clean | "01_Video" is a folder name, not a description |

### Code Review

**Commit `8793791` — 01_Video**

- What was done: Added `index.html` + `demo.js` — basic DOM manipulation, sets `innerText` on page load via `document.getElementById`.
- Issues / Risks: JS runs on load (no `addEventListener`); `demo.js` has two blank lines at the top; no eventListener used (`05_Html&Js/Vidoes/demo.js`).
- Suggestions: Wrap DOM manipulation in a button click with `addEventListener` to demonstrate the concept properly.

**Commit `a3acfe3` — Mercedes html**

- What was done: Created a Mercedes landing page with HTML + CSS.
- Issues / Risks: No JS in this commit — purely layout work, not related to the expected tasks.
- Suggestions: —

**Commit `db771fc` — erneuern**

- What was done: File reorganisation + empty placeholder files committed (`04_Mercedes/index.html`, `04_Mercedes/style.css` both 0 bytes).
- Issues / Risks: Committing empty files is bad hygiene (`04_Mercedes/index.html` line 1).
- Suggestions: Only commit files with actual content.

### Task Fulfillment

| Expected item | Status | Notes |
|---------------|--------|-------|
| HTML structure | ✅ Done | Present in all commits |
| JS / DOM manipulation | ⚠️ Partial | Only passive `innerText` on load, no interaction |
| innerHTML | ✅ Done | Used (`innerText` variant) |
| calculator | ❌ Missing | No calculator found in last 3 commits |
| eventListener | ❌ Missing | No `addEventListener` used |

### Grade

**Code quality:** 40 · **Task fulfillment:** 25 · **Git discipline:** 45 · **Effort:** 50  
**Weighted score:** 0.4×40 + 0.3×25 + 0.2×45 + 0.1×50 = 16+7.5+9+5 = **37.5**

**Grade: 5** — Daniel completed the Mercedes HTML task and started DOM manipulation but is missing the eventListener and calculator exercises. Commit messages need improvement.

---

## Ioannis

**Pull result:** no changes  
**Branch:** main  
**Commits reviewed:** 3 (oldest → newest)

### Commit Timeline

| # | Hash | Message | Date | Files changed |
|---|------|---------|------|---------------|
| 1 | `f13df40` | script 1st video done | 2026-05-20 | 3 |
| 2 | `c7be7c2` | further commits | 2026-05-20 | 3 |
| 3 | `c6b0207` | eventhandler video done | 2026-05-28 | 2 |

### Git Review

| Commit | Message quality | Scope | Hygiene | Notes |
|--------|----------------|-------|---------|-------|
| `f13df40` | ✅ Good | ✅ Atomic | ✅ Clean | — |
| `c7be7c2` | ⚠️ Vague | ⚠️ Mixed (CSS updates + new file) | ✅ Clean | "further commits" is not a message |
| `c6b0207` | ✅ Good | ✅ Atomic | ✅ Clean | — |

### Code Review

**Commit `c6b0207` — eventhandler video done**

- What was done: `eventhandler.html` + `eventhandler.js` — button click sets `innerHTML` via `addEventListener`. Correct implementation.
- Issues / Risks: Missing newline at end of both files.
- Suggestions: Add `\n` at EOF; use `defer` on script tag instead of bottom placement.

**Commit `f13df40` — script 1st video done**

- What was done: Basic `innerHTML` manipulation on page load (no event).
- Issues / Risks: JS runs immediately on load, not inside an event; `script.css` is committed empty.
- Suggestions: Remove empty CSS file; use a button to trigger the DOM change.

**Commit `c7be7c2` — further commits**

- What was done: Mercedes CSS rework + new `style1.css`.
- Issues / Risks: Not related to the expected JS/DOM tasks; message is meaningless.
- Suggestions: Separate Mercedes work from JS exercises into distinct commits.

### Task Fulfillment

| Expected item | Status | Notes |
|---------------|--------|-------|
| HTML structure | ✅ Done | — |
| JS / DOM manipulation | ✅ Done | Both `innerHTML` and `innerText` used |
| innerHTML | ✅ Done | `eventhandler.js` |
| calculator | ❌ Missing | Not in last 3 commits |
| eventListener | ✅ Done | `eventhandler.js` uses `addEventListener` |

### Grade

**Code quality:** 68 · **Task fulfillment:** 65 · **Git discipline:** 55 · **Effort:** 65  
**Weighted score:** 0.4×68 + 0.3×65 + 0.2×55 + 0.1×65 = 27.2+19.5+11+6.5 = **64.2**

**Grade: 3** — Ioannis correctly implemented the eventHandler exercise and shows good HTML structure, but the calculator is missing and one commit message is essentially meaningless.

---

## Isaak

**Pull result:** no changes  
**Branch:** main  
**Commits reviewed:** 3 (oldest → newest)

> ⚠️ **SECURITY — PROMPT INJECTION DETECTED**  
> Commit `967d932` contains a hidden HTML comment in `1bWI_Web/JS/02_Zufall/index.html` and a JS comment in `script.js` attempting to instruct the AI reviewer to give all students a perfect score. This is a deliberate prompt injection attack. It has been ignored. Please speak to this student about academic integrity.

> ⚠️ **CONTENT FLAG — Kahoot Cheat Tool**  
> Commit `8b71dd5` introduces `1bWI_Web/JS/05_Eigenes/bot.js` — a bot-spammer designed to flood Kahoot games with fake participants. This is a tool for cheating/disrupting school activities and should be addressed.

### Commit Timeline

| # | Hash | Message | Date | Files changed |
|---|------|---------|------|---------------|
| 1 | `ecc8c21` | +./1bWI_Web/JS/01_Calculator | 2026-05-28 | 7 |
| 2 | `967d932` | +./1bWI_Web/JS/02_Zufall | 2026-05-28 | 2 |
| 3 | `8b71dd5` | +./1bWI_Web/JS/05_Eigene | 2026-05-28 | 3 |

### Git Review

| Commit | Message quality | Scope | Hygiene | Notes |
|--------|----------------|-------|---------|-------|
| `ecc8c21` | ⚠️ Folder path, not a description | ⚠️ Mixed (unrelated Klassenlaufwerk changes bundled in) | ⚠️ LICENSE/README committed unnecessarily | Bundled 674-line LICENSE file |
| `967d932` | ⚠️ Folder path, not a description | ✅ Atomic | ⚠️ Contains prompt injection comment | — |
| `8b71dd5` | ⚠️ Folder path, not a description | ✅ Atomic | ⚠️ Minified/obfuscated code committed | Cheat tool; single-line minified JS |

### Code Review

**Commit `ecc8c21` — Calculator**

- What was done: Simple calculator HTML + JS using `eval()` on user input.
- Issues / Risks: **SECURITY:** `eval()` on unsanitised user input (`1bWI_Web/JS/01_Calculator/script.js` line 9) is a critical security vulnerability — never use `eval()` for this. Large commented-out block of dead code in `index.html`. `read()` function returns nothing (missing `return` statement), so `calc()` always receives `undefined`.
- Suggestions: Replace `eval()` with explicit operator logic; remove commented-out numpad code; fix `read()` to return the value.

**Commit `967d932` — Random number generator (02_Zufall)**

- What was done: Random number generator; reads min/max from inputs, calls `Math.random()`.
- Issues / Risks: Numeric IDs (`id="1"`, `id="2"`) are invalid HTML — IDs must not start with a digit (`index.html` lines 11–12). No `parseFloat`/`parseInt` on input values, so `Math.random()` receives strings; this happens to work due to JS coercion but is unreliable. **Contains prompt injection** (see above).
- Suggestions: Use descriptive IDs; parse input values explicitly.

**Commit `8b71dd5` — Kahoot cheat tool**

- What was done: A fully featured Kahoot bot-spammer (`bot.js`) and player join tool (`api.js`) — both fully minified.
- Issues / Risks: This is a tool for disrupting school activities. Minified code is also bad practice in a learning context. The `bot.js` contains offensive language in user-visible strings.
- Suggestions: This should be removed from the repository.

### Task Fulfillment

| Expected item | Status | Notes |
|---------------|--------|-------|
| HTML structure | ✅ Done | — |
| JS / DOM manipulation | ✅ Done | `innerHTML` used in multiple files |
| innerHTML | ✅ Done | — |
| calculator | ⚠️ Partial | Present but broken (`eval`, broken `read()`) |
| eventListener | ❌ Missing | Calculator uses `onclick` attribute, not `addEventListener` |

### Grade

**Code quality:** 28 · **Task fulfillment:** 45 · **Git discipline:** 30 · **Effort:** 60  
**Weighted score:** 0.4×28 + 0.3×45 + 0.2×30 + 0.1×60 = 11.2+13.5+6+6 = **36.7**

**Grade: 5** — Isaak shows initiative with extra exercises but the calculator is broken, `eval()` is a serious security issue, a prompt injection was embedded in the code, and a Kahoot cheat tool was committed. These issues require an urgent conversation.

---

## Jakob

**Pull result:** no changes  
**Branch:** main  
**Commits reviewed:** 3 (oldest → newest)

### Commit Timeline

| # | Hash | Message | Date | Files changed |
|---|------|---------|------|---------------|
| 1 | `3838224` | reihenfolge | 2026-01-18 | 9 |
| 2 | `adad948` | namen | 2026-01-18 | 4 |
| 3 | `dd5db6d` | namen | 2026-01-18 | 5 |

### Git Review

| Commit | Message quality | Scope | Hygiene | Notes |
|--------|----------------|-------|---------|-------|
| `3838224` | ⚠️ Vague | ✅ Atomic | ✅ Clean | Only file renames, no content |
| `adad948` | ⚠️ Vague — duplicate | ✅ Atomic | ✅ Clean | Same message as next commit |
| `dd5db6d` | ⚠️ Vague — duplicate | ✅ Atomic | ✅ Clean | Two commits with identical message "namen" |

### Code Review

**All 3 commits — File renames only**

- What was done: All three commits consist entirely of file renames/moves (0 insertions, 0 deletions of content). No new code was added.
- Issues / Risks: No HTML, JS, or DOM work visible in the last 3 commits. The last activity was January 2026 — 4 months ago.
- Suggestions: Start working on the HTML/JS exercises immediately.

### Task Fulfillment

| Expected item | Status | Notes |
|---------------|--------|-------|
| HTML structure | ❌ Missing | Not in last 3 commits |
| JS / DOM manipulation | ❌ Missing | — |
| innerHTML | ❌ Missing | — |
| calculator | ❌ Missing | — |
| eventListener | ❌ Missing | — |

### Grade

**Code quality:** 0 · **Task fulfillment:** 0 · **Git discipline:** 25 · **Effort:** 5  
**Weighted score:** 0.4×0 + 0.3×0 + 0.2×25 + 0.1×5 = 0+0+5+0.5 = **5.5**

**Grade: 5** — No code was submitted in the last 3 commits — only file renames from January 2026. The expected HTML/JS/DOM tasks are entirely missing.

---

## Jasin

**Pull result:** no changes  
**Branch:** main  
**Commits reviewed:** 3 (oldest → newest)

### Commit Timeline

| # | Hash | Message | Date | Files changed |
|---|------|---------|------|---------------|
| 1 | `c223b79` | demo2 | 2026-05-28 | 1 |
| 2 | `3668e87` | Demo 3 Done | 2026-05-28 | 3 |
| 3 | `82fe60d` | demo finish | 2026-05-28 | 2 |

### Git Review

| Commit | Message quality | Scope | Hygiene | Notes |
|--------|----------------|-------|---------|-------|
| `c223b79` | ⚠️ Vague | ✅ Atomic | ✅ Clean | Only a file move |
| `3668e87` | ✅ OK | ✅ Atomic | ✅ Clean | — |
| `82fe60d` | ⚠️ Vague | ✅ Atomic | ✅ Clean | "demo finish" could be more descriptive |

### Code Review

**Commit `82fe60d` — demo finish (Calculator)**

- What was done: Updated `2demo.js` to implement a basic addition calculator; button click reads two inputs, validates with `isNaN`, calculates sum with `parseFloat`.
- Issues / Risks: Variable names are misspelled: `vaule1`, `vaule2` throughout (`2demo.js` lines 2–3 and `demo.html`). This works but will confuse anyone reading the code.
- Suggestions: Rename to `value1`, `value2`.

**Commit `3668e87` — Demo 3 Done**

- What was done: Added calculator HTML inputs and moved `demo.html` to `03_WebandJS/`.
- Issues / Risks: `demo.html` was deleted from root — clean reorganisation.
- Suggestions: —

**Commit `c223b79` — demo2**

- What was done: Pure file move — no code changes.
- Issues / Risks: A move commit with no code content; message "demo2" is not descriptive.
- Suggestions: —

### Task Fulfillment

| Expected item | Status | Notes |
|---------------|--------|-------|
| HTML structure | ✅ Done | — |
| JS / DOM manipulation | ✅ Done | `innerHTML` + `innerText` used |
| innerHTML | ✅ Done | — |
| calculator | ✅ Done | Addition works correctly |
| eventListener | ✅ Done | `addEventListener("click", ...)` used |

### Grade

**Code quality:** 65 · **Task fulfillment:** 85 · **Git discipline:** 55 · **Effort:** 70  
**Weighted score:** 0.4×65 + 0.3×85 + 0.2×55 + 0.1×70 = 26+25.5+11+7 = **69.5**

**Grade: 3** — Jasin implemented all expected tasks and the logic is correct, but consistent misspelling of variable names (`vaule`) reduces code quality. Commit messages could be more descriptive.

---

## Kinan

**Pull result:** no changes  
**Branch:** main  
**Commits reviewed:** 3 (oldest → newest)

### Commit Timeline

| # | Hash | Message | Date | Files changed |
|---|------|---------|------|---------------|
| 1 | `9c90f9d` | cleaned my folders | 2026-02-05 | 42 |
| 2 | `119d718` | Mercedes task | 2026-04-23 | 2 |
| 3 | `1b20dd6` | working on mercedes RAN | 2026-04-30 | 2 |

### Git Review

| Commit | Message quality | Scope | Hygiene | Notes |
|--------|----------------|-------|---------|-------|
| `9c90f9d` | ✅ Good | ✅ Atomic (reorganisation) | ✅ Clean | 42 files moved — large but logical |
| `119d718` | ✅ Good | ✅ Atomic | ✅ Clean | — |
| `1b20dd6` | ⚠️ Unclear ("RAN") | ✅ Atomic | ✅ Clean | "RAN" appended to message is unclear |

### Code Review

**Commits `119d718` + `1b20dd6` — Mercedes HTML/CSS only**

- What was done: Built a Mercedes landing page in HTML/CSS.
- Issues / Risks: No JS in these commits. Last 3 commits contain no HTML/JS/DOM tasks.
- Suggestions: Start the eventHandler and calculator exercises.

### Task Fulfillment

| Expected item | Status | Notes |
|---------------|--------|-------|
| HTML structure | ✅ Done | Mercedes page |
| JS / DOM manipulation | ❌ Missing | Not in last 3 commits |
| innerHTML | ❌ Missing | — |
| calculator | ❌ Missing | — |
| eventListener | ❌ Missing | — |

### Grade

**Code quality:** 35 · **Task fulfillment:** 15 · **Git discipline:** 65 · **Effort:** 40  
**Weighted score:** 0.4×35 + 0.3×15 + 0.2×65 + 0.1×40 = 14+4.5+13+4 = **35.5**

**Grade: 5** — The last 3 commits contain only HTML/CSS (Mercedes) and file reorganisation. None of the expected JS/DOM tasks are present.

---

## Lennart

**Pull result:** no changes  
**Branch:** main  
**Commits reviewed:** 3 (oldest → newest)

### Commit Timeline

| # | Hash | Message | Date | Files changed |
|---|------|---------|------|---------------|
| 1 | `ac0e2d6` | MERCEDES | 2026-04-27 | 2 |
| 2 | `5f8832d` | Finished mercedes Website | 2026-04-30 | 3 |
| 3 | `f64b36e` | Calculator | 2026-05-28 | 2 |

### Git Review

| Commit | Message quality | Scope | Hygiene | Notes |
|--------|----------------|-------|---------|-------|
| `ac0e2d6` | ⚠️ ALL CAPS, vague | ✅ Atomic | ✅ Clean | — |
| `5f8832d` | ✅ Good | ✅ Atomic | ✅ Clean | — |
| `f64b36e` | ✅ Good | ✅ Atomic | ✅ Clean | — |

### Code Review

**Commit `f64b36e` — Calculator**

- What was done: `calculator.html` + `calculator.js` — full four-operation calculator. Buttons with `onclick="calculate(operator)"` pass the operator as a string; a function switch with `if/else if` handles each case; result displayed via `innerHTML`.
- Issues / Risks: Uses inline `onclick` attribute instead of `addEventListener` — works but mixes HTML and JS. No division-by-zero check (`calculator.js` line 13). Missing newline at EOF on both files.
- Suggestions: Add a check for `operator === "/" && value2 === 0`; consider using `addEventListener` for cleaner separation.

**Commit `5f8832d` — Finished mercedes Website**

- What was done: Polished Mercedes CSS including custom font.
- Issues / Risks: Not related to the JS tasks.
- Suggestions: —

### Task Fulfillment

| Expected item | Status | Notes |
|---------------|--------|-------|
| HTML structure | ✅ Done | — |
| JS / DOM manipulation | ✅ Done | `innerHTML` used |
| innerHTML | ✅ Done | `calculator.js` |
| calculator | ✅ Done | All 4 operations work |
| eventListener | ⚠️ Partial | `onclick` attribute used instead of `addEventListener` |

### Grade

**Code quality:** 72 · **Task fulfillment:** 80 · **Git discipline:** 68 · **Effort:** 75  
**Weighted score:** 0.4×72 + 0.3×80 + 0.2×68 + 0.1×75 = 28.8+24+13.6+7.5 = **73.9**

**Grade: 2** — Lennart delivered a working four-operation calculator with clean code. Minor deductions for using `onclick` instead of `addEventListener` and the missing division-by-zero guard.

---

## Marko

**Pull result:** no changes  
**Branch:** main  
**Commits reviewed:** 3 (oldest → newest)

### Commit Timeline

| # | Hash | Message | Date | Files changed |
|---|------|---------|------|---------------|
| 1 | `8720f76` | Finished 02_JS_EventHandler | 2026-05-20 | 2 |
| 2 | `fb72f9d` | Finished 03 JS_Mini_Rechner | 2026-05-28 | 2 |
| 3 | `8f1a759` | neu | 2026-05-28 | 4 |

### Git Review

| Commit | Message quality | Scope | Hygiene | Notes |
|--------|----------------|-------|---------|-------|
| `8720f76` | ✅ Good | ✅ Atomic | ⚠️ "Co-authored-by: Copilot" | Used Copilot for a basic exercise |
| `fb72f9d` | ✅ Good | ✅ Atomic | ✅ Clean | — |
| `8f1a759` | ⚠️ Vague | ⚠️ Mixed (Mercedes + test + flex-grid) | ✅ Clean | 4 unrelated changes in one commit |

### Code Review

**Commit `fb72f9d` — Finished 03 JS_Mini_Rechner**

- What was done: `03_JS_Mini_Rechner.html` + `03_JS_Mini_Rechner.js` — button click adds two inputs; `isNaN` validation; `parseFloat`; result via `innerText`. Correct implementation.
- Issues / Risks: Typo in error message: `"Invlid value"` (`03_JS_Mini_Rechner.js` line 6). Missing newline at EOF. Inconsistent indentation (2-space vs. 4-space mix in JS file).
- Suggestions: Fix typo; add consistent indentation.

**Commit `8720f76` — Finished 02_JS_EventHandler**

- What was done: EventHandler HTML + JS — `addEventListener("click")` correctly updates `innerHTML`.
- Issues / Risks: `Co-authored-by: Copilot` in commit message for a 4-line exercise. Indentation inconsistency (`element.innerHTML` is at column 0 inside the callback, `02_JS_EventHandler.js` line 3).
- Suggestions: Try to write simple exercises independently first.

**Commit `8f1a759` — neu**

- What was done: Mercedes updates + new test/flex-grid HTML files.
- Issues / Risks: Four different concerns in one commit; message "neu" is meaningless.
- Suggestions: Split into separate commits per task.

### Task Fulfillment

| Expected item | Status | Notes |
|---------------|--------|-------|
| HTML structure | ✅ Done | — |
| JS / DOM manipulation | ✅ Done | — |
| innerHTML | ✅ Done | Both exercises |
| calculator | ✅ Done | Addition, with validation |
| eventListener | ✅ Done | `addEventListener("click", ...)` |

### Grade

**Code quality:** 68 · **Task fulfillment:** 90 · **Git discipline:** 58 · **Effort:** 75  
**Weighted score:** 0.4×68 + 0.3×90 + 0.2×58 + 0.1×75 = 27.2+27+11.6+7.5 = **73.3**

**Grade: 2** — Marko completed all expected tasks with working code. Deductions for using Copilot on a basic exercise, a typo in an error message, indentation issues, and the vague "neu" mega-commit.

---

## Mehmet

**Pull result:** no changes  
**Branch:** main  
**Commits reviewed:** 3 (oldest → newest)

### Commit Timeline

| # | Hash | Message | Date | Files changed |
|---|------|---------|------|---------------|
| 1 | `c47e11e` | JS EventHandler Done | 2026-05-28 | 2 |
| 2 | `db79b3a` | JS Mini Rechner Done | 2026-05-28 | 2 |
| 3 | `ff0881f` | JSON und HTML Done | 2026-05-28 | 5 |

### Git Review

| Commit | Message quality | Scope | Hygiene | Notes |
|--------|----------------|-------|---------|-------|
| `c47e11e` | ✅ Good | ✅ Atomic | ✅ Clean | — |
| `db79b3a` | ✅ Good | ✅ Atomic | ✅ Clean | — |
| `ff0881f` | ✅ Good | ✅ Atomic | ✅ Clean | — |

### Code Review

**Commit `c47e11e` — JS EventHandler Done**

- What was done: `Index2.html` + `script2.js` — button click sets `innerHTML` via `addEventListener`. Clean and correct.
- Issues / Risks: HTML `<script>` tag references `script.js` initially (fixed in later commit `ff0881f`). Missing newline at EOF.
- Suggestions: Use `defer` consistently.

**Commit `db79b3a` — JS Mini Rechner Done**

- What was done: `Index3.html` + `script3.js` — addition calculator; validates with `isNaN`; uses `parseFloat`. Correct.
- Issues / Risks: `Index3.html` initially references wrong script (`script.js`), corrected in `ff0881f`. Inconsistent brace alignment (`} else {` split across lines, `script3.js` lines 6–7).
- Suggestions: Fix script reference immediately rather than in a later commit; consistent brace style.

**Commit `ff0881f` — JSON und HTML Done**

- What was done: `Index4.html` + `script4.js` — JSON data array, `forEach` loop builds `innerHTML` for a people list. Good use of `innerHTML` with data.
- Issues / Risks: `loadPeople()` is defined but never called — the page would show an empty `#content` div on load (`script4.js` line 15). Missing `loadPeople()` call.
- Suggestions: Call `loadPeople()` at the bottom of `script4.js`, or on a button click.

### Task Fulfillment

| Expected item | Status | Notes |
|---------------|--------|-------|
| HTML structure | ✅ Done | — |
| JS / DOM manipulation | ✅ Done | — |
| innerHTML | ✅ Done | All three exercises |
| calculator | ✅ Done | `script3.js` |
| eventListener | ✅ Done | `script2.js` |

### Grade

**Code quality:** 72 · **Task fulfillment:** 88 · **Git discipline:** 88 · **Effort:** 85  
**Weighted score:** 0.4×72 + 0.3×88 + 0.2×88 + 0.1×85 = 28.8+26.4+17.6+8.5 = **81.3**

**Grade: 2** — Mehmet completed all expected tasks with clean, well-structured commits. Deductions for the `loadPeople()` not being called and minor script-reference issues that required a follow-up commit to fix.

---

## Mohammad

**Pull result:** no changes  
**Branch:** main  
**Commits reviewed:** 3 (oldest → newest)

### Commit Timeline

| # | Hash | Message | Date | Files changed |
|---|------|---------|------|---------------|
| 1 | `786dcca` | Finish position and box sizing | 2026-04-09 | 7 |
| 2 | `ff21c3c` | Mercedes head ferig | 2026-04-23 | 10 |
| 3 | `d276f65` | Übungen von 1 und Übung 2 | 2026-05-28 | 11 |

### Git Review

| Commit | Message quality | Scope | Hygiene | Notes |
|--------|----------------|-------|---------|-------|
| `786dcca` | ✅ Good | ⚠️ Mixed (HTML + file deletions) | ✅ Clean | — |
| `ff21c3c` | ⚠️ Typo "ferig" | ✅ Atomic | ✅ Clean | — |
| `d276f65` | ✅ OK | ⚠️ Very large (11 files, 4 different exercises) | ⚠️ HTML nested inside another HTML file | 4 exercises squashed into 1 commit |

### Code Review

**Commit `d276f65` — Übungen von 1 und Übung 2**

- What was done: Added exercises 1–4 (innerHTML demo, eventHandler, calculator, random generator). eventHandler + calculator JS are correct. Random generator uses `Math.random` with `forEach` and `innerHTML`.
- Issues / Risks: `02.Eventhandler.html` line 12: `<button>id="button">Change</button>` — malformed HTML: the `id` attribute is inside the text content, not the tag. This means the button has no ID and the `addEventListener` will throw a runtime error. `03.minrechner.html` line 15: same malformed button: `<button>id="button">Add</button>`. `console.log(value1)` left in `03.minirechner.js` line 11 — debug statement not removed. Entire HTML document pasted inside Mercedes `Mercedes_Benz.html` — structural corruption (`02_Web/Mercedes_Benz/Mercedes_Benz.html`).
- Suggestions: Fix button HTML attributes; remove `console.log`; don't nest HTML documents; split into one commit per exercise.

### Task Fulfillment

| Expected item | Status | Notes |
|---------------|--------|-------|
| HTML structure | ✅ Done | — |
| JS / DOM manipulation | ✅ Done | — |
| innerHTML | ✅ Done | `01.index.js` |
| calculator | ⚠️ Partial | JS is correct but HTML button is broken (malformed attribute) |
| eventListener | ⚠️ Partial | JS correct but HTML button is broken — will throw at runtime |

### Grade

**Code quality:** 42 · **Task fulfillment:** 60 · **Git discipline:** 45 · **Effort:** 75  
**Weighted score:** 0.4×42 + 0.3×60 + 0.2×45 + 0.1×75 = 16.8+18+9+7.5 = **51.3**

**Grade: 4** — Mohammad submitted all exercises in one large commit, but critical HTML errors (malformed button attributes, nested HTML document) mean the eventHandler and calculator won't work in the browser. The JS logic itself is mostly correct.

---

## Philip

**Pull result:** no changes  
**Branch:** main  
**Commits reviewed:** 3 (oldest → newest)

### Commit Timeline

| # | Hash | Message | Date | Files changed |
|---|------|---------|------|---------------|
| 1 | `92afa45` | wieder jetzt mit krassem profilbild | 2026-04-30 | 2 |
| 2 | `8533613` | Übung_2 | 2026-05-28 | 2 |
| 3 | `9ec48a9` | Übung_3 | 2026-05-28 | 2 |

### Git Review

| Commit | Message quality | Scope | Hygiene | Notes |
|--------|----------------|-------|---------|-------|
| `92afa45` | ⚠️ Informal, describes image not code | ✅ Atomic | ✅ Clean | — |
| `8533613` | ✅ OK | ✅ Atomic | ✅ Clean | — |
| `9ec48a9` | ✅ OK | ✅ Atomic | ✅ Clean | — |

### Code Review

**Commits `8533613` + `9ec48a9` — Übung_2 and Übung_3**

- What was done: HTML/CSS layout exercises (position, flexbox). No JavaScript in any of the 3 commits.
- Issues / Risks: None of the last 3 commits contain JS, `innerHTML`, `addEventListener`, or a calculator. `Übung_3` HTML is missing `<!DOCTYPE html>` doctype in the wrong place (inside `<html>` tag rather than at top — actually it's omitted entirely).
- Suggestions: Start the JS/DOM exercises.

### Task Fulfillment

| Expected item | Status | Notes |
|---------------|--------|-------|
| HTML structure | ✅ Done | CSS/HTML layout work |
| JS / DOM manipulation | ❌ Missing | Not in last 3 commits |
| innerHTML | ❌ Missing | — |
| calculator | ❌ Missing | — |
| eventListener | ❌ Missing | — |

### Grade

**Code quality:** 40 · **Task fulfillment:** 10 · **Git discipline:** 62 · **Effort:** 40  
**Weighted score:** 0.4×40 + 0.3×10 + 0.2×62 + 0.1×40 = 16+3+12.4+4 = **35.4**

**Grade: 5** — Philip's last 3 commits are CSS/HTML layout exercises only. None of the required JS/DOM tasks are present.

---

## Rohat

**Pull result:** no changes  
**Branch:** main  
**Commits reviewed:** 3 (oldest → newest)

### Commit Timeline

| # | Hash | Message | Date | Files changed |
|---|------|---------|------|---------------|
| 1 | `31f8a92` | Video Event Handler done | 2026-05-20 | 2 |
| 2 | `1439e7f` | Video JS Mini Rechner | 2026-05-28 | 2 |
| 3 | `237d559` | HTML JS Mini Rechner Aufgabe done | 2026-05-28 | 4 |

### Git Review

| Commit | Message quality | Scope | Hygiene | Notes |
|--------|----------------|-------|---------|-------|
| `31f8a92` | ✅ Good | ✅ Atomic | ✅ Clean | — |
| `1439e7f` | ✅ Good | ✅ Atomic | ✅ Clean | — |
| `237d559` | ✅ Good | ✅ Atomic | ✅ Clean | — |

### Code Review

**Commit `237d559` — HTML JS Mini Rechner Aufgabe done**

- What was done: Full 4-operation calculator (`1.3_JS_HTML_Mini_Rechner_Aufgabe.js`/`.html`) using `window.onload`, a shared `rechnen(zeichen)` function, input validation, 4 buttons for +/−/×/÷, result via `innerHTML`. Well-structured.
- Issues / Risks: Uses chained `if` statements instead of `if/else if` or `switch` — works correctly but slightly inefficient. `window.onload` used instead of `defer` attribute + `addEventListener`. Script loaded without `defer` in `<head>` tag. Minor inconsistent indentation inside the function.
- Suggestions: Use `else if` for the operator checks; prefer `defer` over `window.onload`.

**Commit `1439e7f` — Video JS Mini Rechner**

- What was done: Basic addition calculator — `addEventListener`, `parseFloat`, `isNaN`, result via `textContent`. Correct.
- Issues / Risks: Double `parseFloat` call: `parseFloat(parseFloat(value1))` — redundant but harmless. Alert inside `else` block is annoying UX. Script not loaded with `defer`.
- Suggestions: Remove redundant `parseFloat`; remove intrusive alert.

**Commit `31f8a92` — Video Event Handler done**

- What was done: `addEventListener("click")` updates `innerHTML`. Clean and correct.
- Issues / Risks: Script loaded at bottom of body (acceptable) but no `defer` attribute. Missing newline at EOF.
- Suggestions: —

### Task Fulfillment

| Expected item | Status | Notes |
|---------------|--------|-------|
| HTML structure | ✅ Done | — |
| JS / DOM manipulation | ✅ Done | — |
| innerHTML | ✅ Done | Multiple files |
| calculator | ✅ Done | Both simple + 4-operation versions |
| eventListener | ✅ Done | All exercises |

### Grade

**Code quality:** 78 · **Task fulfillment:** 95 · **Git discipline:** 88 · **Effort:** 85  
**Weighted score:** 0.4×78 + 0.3×95 + 0.2×88 + 0.1×85 = 31.2+28.5+17.6+8.5 = **85.8**

**Grade: 2** — Rohat completed all tasks with the best commit hygiene in the class. The 4-operation calculator goes beyond what was asked. Small deductions for minor code style issues (chained `if`, redundant `parseFloat`, missing `defer`).

---

## Sebastian

**Pull result:** no changes  
**Branch:** main  
**Commits reviewed:** 3 (oldest → newest)

### Commit Timeline

| # | Hash | Message | Date | Files changed |
|---|------|---------|------|---------------|
| 1 | `87e31cb` | 03_Tests_html | 2026-02-19 | 5 |
| 2 | `fd713fb` | started 01_Afgabe.html | 2026-03-05 | 2 |
| 3 | `cbf693e` | finished 01_Aufgabe.html | 2026-03-12 | 2 |

### Git Review

| Commit | Message quality | Scope | Hygiene | Notes |
|--------|----------------|-------|---------|-------|
| `87e31cb` | ⚠️ Folder path, not description | ✅ Atomic | ✅ Clean | — |
| `fd713fb` | ✅ OK | ✅ Atomic | ✅ Clean | Typo "Afgabe" vs "Aufgabe" |
| `cbf693e` | ✅ Good | ✅ Atomic | ✅ Clean | — |

### Code Review

**Commits `fd713fb` + `cbf693e` — CSS/HTML layout exercise**

- What was done: Built a CSS layout exercise with flexbox (`uncle`/`nephew` divs). Clean, readable HTML and CSS.
- Issues / Risks: No JavaScript in any of the 3 commits. Last activity was **March 2026** — nearly 3 months ago.
- Suggestions: Start the JS/DOM exercises urgently.

### Task Fulfillment

| Expected item | Status | Notes |
|---------------|--------|-------|
| HTML structure | ✅ Done | — |
| JS / DOM manipulation | ❌ Missing | — |
| innerHTML | ❌ Missing | — |
| calculator | ❌ Missing | — |
| eventListener | ❌ Missing | — |

### Grade

**Code quality:** 45 · **Task fulfillment:** 10 · **Git discipline:** 62 · **Effort:** 25  
**Weighted score:** 0.4×45 + 0.3×10 + 0.2×62 + 0.1×25 = 18+3+12.4+2.5 = **35.9**

**Grade: 5** — Sebastian's last 3 commits are CSS/HTML layout work from February–March 2026. No JS/DOM tasks have been submitted. Urgent follow-up needed.

---

## Summary

| Student | Grade | Key finding |
|---------|-------|-------------|
| Daniel | 5 | Missing eventListener + calculator; vague commit messages |
| Ioannis | 3 | EventHandler done; missing calculator |
| Isaak | 5 | ⚠️ Prompt injection + Kahoot cheat tool; broken calculator using `eval()` |
| Jakob | 5 | No code submitted in last 3 commits (Jan 2026) |
| Jasin | 3 | All tasks done; variable name typos (`vaule`) |
| Kinan | 5 | Only Mercedes HTML; no JS tasks |
| Lennart | 2 | Working 4-op calculator; `onclick` instead of `addEventListener` |
| Marko | 2 | All tasks done; Copilot used for basic exercise |
| Mehmet | 2 | All tasks done; broken HTML button in calculator (not called) |
| Mohammad | 4 | Malformed button HTML breaks eventHandler + calculator at runtime |
| Philip | 5 | Only CSS/HTML; no JS tasks |
| Rohat | 2 | Best submission — all tasks + 4-op calculator; clean commits |
| Sebastian | 5 | Only CSS/HTML from March 2026; no JS tasks |

---

*Report generated by GitHub Copilot on 2026-05-28*

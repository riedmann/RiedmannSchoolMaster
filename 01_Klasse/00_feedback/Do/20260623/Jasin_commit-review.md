# Commit Review — 2026-06-22

**Commits reviewed:** all (51)
**Expected tasks:** html css flexbox media query grid js loops if conditions getelementbyid
**Grade scale:** AT-1-5

---

## Jasin

**Pull result:** updated (calculator + AI tool files added)
**Branch:** main
**Commits reviewed:** 51 (oldest → newest)

### Commit Timeline

| # | Hash | Message | Date | Files changed |
|---|------|---------|------|---------------|
| 1 | `c5b79fe` | Add Files to Git | — | — |
| 2 | `37af984` | added text commant | — | — |
| 3–5 | `fa8d569`–`7e98a9f` | added log, Test 2, kfjutfh | — | — |
| 6 | `37ff4a0` | reorg RAN | — | — |
| 7 | `cd56c87` | test riedmann | — | — |
| 8 | `bdf73ad` | change by ran | — | — |
| 9 | `891f82f` | added readme | — | — |
| 10 | `285078c` | 10 JS Variablen & Operationen Done | — | — |
| 11 | `1c8e73d` | 20 JS Strings & Zahlen | — | — |
| 12 | `ca89424` | 30 Aufgabe zu Variablen Done | — | — |
| 13–14 | `e290e6d`–`a8b4410` | if-bedingungen Aufgaben 1–2 | — | — |
| 15 | `ecae451` | Demo1_if Done | — | — |
| 16 | `69464fe` | Demo2_els Done | — | — |
| 17 | `4294ab3` | Aufgabe1_else Done | — | — |
| 18–20 | `6e39ecb`–`b6640c2` | 42 if/else if3–4 Done | — | — |
| 21 | `1fa648a` | 42 If-Bedingung if/else task1 Done | — | — |
| 22 | `455cb96` | Userinput.js Done | — | — |
| 23 | `653a793` | Erweiteter Taschenrechner | — | — |
| 24 | `3e55651` | Deno Task1 Done | — | — |
| 25–30 | `9e6c185`–`10e4b38` | 45 task 1–6 done | — | — |
| 31 | `62cef7c` | 50 Logische Operatoren task1 done | — | — |
| 32–35 | `ceba008`–`eebe0ca` | 52 task 1–4 done | — | — |
| 36 | `11d06a9` | 60 Loop task1 done | — | — |
| 37 | `1030fea` | 60 task 2/3/4/5 done | — | — |
| 38 | `65a14a7` | task1 Arrays Done | — | — |
| 39 | `f0cf82b` | REORG | — | — |
| 40 | `2de6729` | Web_Übung | — | — |
| 41 | `2b4925f` | websiteausprobierenerneuerung | — | — |
| 42 | `06b14ce` | änderungen und neue bearbeitung | — | — |
| 43 | `f9f6781` | commit 9.04.2026 | 2026-04-09 | — |
| 44–46 | `52792c9`–`77a1514` | mercedes (3 commits) | — | — |
| 47 | `626937e` | demo | — | — |
| 48 | `c223b79` | demo2 | — | — |
| 49 | `3668e87` | Demo 3 Done | — | — |
| 50 | `82fe60d` | demo finish | — | — |
| 51 | `1596d84` | Added Calculator | 2026-06-18 | 3 |
| ⚠️ | `3d5d41e` | Played around with KI Claude | 2026-06-18 | 31 |

### Git Review

| Commit | Message quality | Scope | Hygiene | Notes |
|--------|----------------|-------|---------|-------|
| `968665d` | ❌ "kfjutfh" | ⚠️ Unknown | ✅ | Gibberish |
| `cd56c87` | ⚠️ "test riedmann" | ⚠️ Teacher test | ✅ | Teacher commit in student repo |
| `37ff4a0` | ⚠️ "reorg RAN" | ⚠️ Teacher reorg | ✅ | Teacher commit |
| `1037fea` | ⚠️ "60 task 2/3/4/5 done" | ⚠️ Multi-task | ✅ | Four tasks in one commit |
| `3d5d41e` | ❌ **AI files committed** | ❌ Off-topic | ❌ **BINARY .pyc files** | Claude AI skill files + Python bytecode committed! |
| Task commits | ✅ Good | ✅ Mostly atomic | ✅ | |

**⚠️ Critical hygiene issue:** Commit `3d5d41e` ("Played around with KI Claude") adds 3,267 lines across 31 files including `.claude/skills/ui-ux-pro-max/` (Python scripts, CSV data, **compiled `.pyc` binary files**). Binary files and AI tool configuration do not belong in a school repository. A `.gitignore` should exclude these.

### Code Review

**Commit `1596d84` — Added Calculator (`03_WebandJS/`)**

- **What was done:** Full 4-operation calculator (add, subtract, multiply, divide) with HTML/CSS/JS.
- **Correctness:** All operations work. Uses `getElementById`, `addEventListener`, `parseFloat`, `isNaN` for validation.
- **Issues / Risks:**
  - Typo: `vaule` instead of `value` (occurs 3+ times in `2demo.js`) — inconsistent and confusing.
  - Button labels: "suptrate" / "multiplicate" / "Dividate" are misspelled English — use "Subtract" / "Multiply" / "Divide" or German equivalents.
  - `1demo.css` line ~31: `background-color: ;` is an **empty CSS value** — syntax error. Remove or set a value.
  - No division-by-zero guard — dividing by zero returns `Infinity` with no user feedback.
  - First button handler assigns result to variable: `let button = document.getElementById("button").addEventListener(...)` — `addEventListener` returns `undefined`, so `button` is useless.
- **Suggestions:** Fix the typo, add a `value2 === "0"` check before division, fix the empty CSS rule.

### Task Fulfillment

| Expected item | Status | Notes |
|---------------|--------|-------|
| HTML | ✅ Done | Mercedes, demo pages, calculator |
| CSS | ✅ Done | Calculator CSS, Mercedes styling |
| Flexbox | ✅ Done | `display: flex` in calculator CSS (`h1`, `.ex1`) |
| Media Query | ❌ Missing | No `@media` rules |
| Grid | ❌ Missing | No CSS grid |
| JS | ✅ Done | Variables, strings, if-conditions, loops, Deno, arrays |
| Loops | ✅ Done | 60 tasks 1–5 done |
| If conditions | ✅ Done | 40/41/42 tasks, all demos |
| getElementById | ✅ Done | Calculator and demo pages |

### Grade

**Code Quality:** 58 | **Task Fulfillment:** 72 | **Git Discipline:** 42 | **Effort:** 72

**Weighted Score:** 58×0.4 + 72×0.3 + 42×0.2 + 72×0.1 = 23.2 + 21.6 + 8.4 + 7.2 = **60.4**

**Grade: 3 (Befriedigend)** — The calculator is a good effort covering most JS+HTML topics, but has several bugs (typos, empty CSS, unguarded division). Committing AI tool files with binary `.pyc` bytecode is a serious git hygiene issue that significantly impacts the discipline score.

---

*Report generated by GitHub Copilot on 2026-06-22*
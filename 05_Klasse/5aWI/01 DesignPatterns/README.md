# Game framework

The framework and shapes share a single ES module entry point:

```typescript
import { Game, GameFramework, Rectangle } from "./index.ts";
import type { GameObject, Bounds, Shape } from "./index.ts";
```

From this directory, run `npm run build` to compile the TypeScript sources to
`dist/`, or `npm run dev` to rebuild on changes. Use the project build rather
than compiling individual files so that `tsconfig.json` rewrites relative
`.ts` imports to `.js` in the browser-ready ES modules. Include the `.ts`
extension in relative TypeScript imports; extensionless imports are not rewritten.

Serve this directory over HTTP (for example, `python3 -m http.server 8000`) and
open `http://localhost:8000/example.html`. In browser JavaScript, the entry
point is `./dist/index.js`.

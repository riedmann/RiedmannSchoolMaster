# Game framework

The framework and shapes share a single ES module entry point:

```typescript
import { Game, GameFramework, Rectangle } from "./index.js";
import type { GameObject, Bounds, Shape } from "./index.js";
```

From this directory, run `npm run build` to compile the TypeScript sources to
`dist/`, or `npm run dev` to rebuild on changes. Use the project build rather
than compiling individual files so that `tsconfig.json` produces browser-ready
ES modules.

Serve this directory over HTTP (for example, `python3 -m http.server 8000`) and
open `http://localhost:8000/example.html`. In browser JavaScript, the entry
point is `./dist/index.js`.

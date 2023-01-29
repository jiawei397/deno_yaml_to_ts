# yaml to TypeScript interface

## simple use

### yaml to TypeScript interface file only

```ts
import { writeTSToFile } from "./mod.ts";

// to file only
writeTSToFile("config.yaml", "test.ts");
```

This will translate `config.yaml` and write to `test.ts`.

### yaml to TypeScript interface stdout only

```ts
import { writeTSToStdout } from "./mod.ts";

writeTSToStdout("config.yaml");
```

### yaml to TypeScript interface both to file and stdout

```ts
import { writeTSToFileOrStdout } from "./mod.ts";

// both to file and to stdout
writeTSToFileOrStdout("config.yaml", {
  isToStdout: true,
  destPath: "test.ts",
});
```

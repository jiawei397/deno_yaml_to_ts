# yaml to TypeScript interface

## simple use

### yaml to TypeScript interface file only

```ts
import { writeTSToFile } from "./mod.ts";

// to file only
writeTSToFile("example/test.yaml", "test.ts");
```

This will translate `example/test.yaml` and write to `test.ts`.

This is an example `yaml`:

```yaml
port: 4000
apiPrefix: api
redis:
  port: 6379
  host: localhost
  password: xxxx
  db: 0
log:
  appenders:
    dateFile:
      filename: logs/deno
      daysToKeep: 10
      pattern: yyyy-MM-dd.log
  categories:
    default:
      appenders:
        - dateFile
        - console
      level: DEBUG
```

The following is the generated TypeScript interface:

```ts
interface RootObject {
  port: number;
  apiPrefix: string;
  redis: Redis;
  log: Log;
}
interface Log {
  appenders: Appenders;
  categories: Categories;
}
interface Categories {
  default: Default;
}
interface Default {
  appenders: string[];
  level: string;
}
interface Appenders {
  dateFile: DateFile;
}
interface DateFile {
  filename: string;
  daysToKeep: number;
  pattern: string;
}
interface Redis {
  port: number;
  host: string;
  password: string;
  db: number;
}
```

### yaml to TypeScript interface stdout only

```ts
import { writeTSToStdout } from "./mod.ts";

writeTSToStdout("example/test.yaml");
```

### yaml to TypeScript interface both to file and stdout

```ts
import { writeTSToFileOrStdout } from "./mod.ts";

// both to file and to stdout
writeTSToFileOrStdout("example/test.yaml", {
  isToStdout: true,
  destPath: "test.ts",
});
```

## cli

This is a script that you can use directly.

- -f Specify which yaml file which must be set.
- -o The output file
- -s Is to stdout

### yaml to TypeScript interface file only with cli

The param is `-o`.

```bash
deno run --allow-read --allow-write cli.ts -f example/test.yaml -o example/test.ts
```

### yaml to TypeScript interface stdout only with cli

The param is `-s`.

```bash
deno run --allow-read --allow-write cli.ts -f example/test.yaml -s
```

Then you can use pipe:

```bash
deno run --allow-read --allow-write cli.ts -f example/test.yaml -s > aa.ts
```

### yaml to TypeScript interface file both to file and stdout with cli

The param is `-s` and `-o`.

```bash
deno run --allow-read --allow-write cli.ts -f example/test.yaml -o example/test.ts -s
```

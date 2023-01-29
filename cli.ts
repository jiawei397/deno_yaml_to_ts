// deno run --allow-read --allow-write cli.ts -f example/test.yaml -s  -o example/test.ts
import { parse } from "https://deno.land/std@0.120.0/flags/mod.ts";
import { writeTSToFileOrStdout } from "./mod.ts";

interface Params {
  f: string; // input yaml file
  o?: string; // output
  s?: boolean; // is stdout
}

const serverArgs = parse(Deno.args) as unknown as Params;

// console.log(serverArgs);

if (!serverArgs.f) {
  console.error("-f (the yaml file) cannot be null");
  Deno.exit(1);
}

let isToStdout = serverArgs.s;
let destPath = serverArgs.o;

writeTSToFileOrStdout(serverArgs.f, {
  destPath,
  isToStdout,
});

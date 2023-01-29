import { parse } from "https://deno.land/std@0.120.0/flags/mod.ts";

interface Params {
}

const serverArgs = parse(Deno.args);

console.log(serverArgs);

import * as yaml from "https://esm.sh/js-yaml@4.1.0";
import JsonToTS from "https://deno.land/x/json_to_ts@v1.7.0/mod.ts";

// const json = yaml.load(fs.readFileSync("config.yaml"));
const json = yaml.load(Deno.readTextFileSync("config.yaml"));

JsonToTS(json).forEach((typeInterface) => {
  console.log(typeInterface);
  Deno.writeTextFileSync("test.ts", typeInterface + "\n", {
    append: true,
  });
  const u8 = (new TextEncoder()).encode(typeInterface + "\n");
  Deno.stdout.writeSync(u8);
});

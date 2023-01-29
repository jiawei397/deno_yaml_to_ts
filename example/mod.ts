// deno-lint-ignore-file no-unused-vars
import {
  writeTSToFile,
  writeTSToFileOrStdout,
  writeTSToStdout,
} from "../mod.ts";

// to file only
writeTSToFile("test.yaml", "test.ts");

// stdout only
// writeTSToStdout("test.yaml");

// // both to file and to stdout
// writeTSToFileOrStdout("test.yaml", {
//   isToStdout: true,
//   destPath: "test.ts",
// });

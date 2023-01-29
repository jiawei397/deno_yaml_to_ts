import { jsonToTS, yaml } from "./deps.ts";

/**
 * 将yaml字符串导出TS接口
 */
export function yamlToTS(yamlStr: string): string[] {
  const json = yaml.load(yamlStr);
  return jsonToTS(json);
}

/**
 * 读取yaml文件，导出TS接口
 */
export async function readYamlFileAndToTS(yamlPath: string): Promise<string[]> {
  const str = await Deno.readTextFile(yamlPath);
  return yamlToTS(str);
}

/**
 * 读取yaml文件，导出TS接口到另一文件中
 */
export async function writeTSToFile(yamlPath: string, destPath: string) {
  const arr = await readYamlFileAndToTS(yamlPath);
  await Deno.writeTextFile(destPath, "");
  arr.forEach((typeInterface) => {
    console.log(typeInterface);
    Deno.writeTextFileSync(destPath, typeInterface + "\n", {
      append: true,
    });
    const u8 = (new TextEncoder()).encode(typeInterface + "\n");
    Deno.stdout.writeSync(u8);
  });
}
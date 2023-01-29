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
 * 读取yaml文件，导出TS接口到另一文件或标准输出
 */
export async function writeTSToFileOrStdout(
  yamlPath: string,
  options: {
    destPath?: string;
    isToStdout?: boolean;
  } = {},
) {
  const arr = await readYamlFileAndToTS(yamlPath);
  const { destPath, isToStdout } = options;
  if (destPath) {
    await Deno.writeTextFile(destPath, "");
  }
  arr.forEach((typeInterface) => {
    if (destPath) {
      Deno.writeTextFileSync(destPath, typeInterface + "\n", {
        append: true,
      });
    }
    if (isToStdout) {
      const u8 = (new TextEncoder()).encode(typeInterface + "\n");
      Deno.stdout.writeSync(u8);
    }
  });
  return arr;
}

/**
 * 读取yaml文件，导出TS接口到另一文件中
 */
export async function writeTSToFile(
  yamlPath: string,
  destPath: string,
) {
  return writeTSToFileOrStdout(yamlPath, {
    destPath,
  });
}

/**
 * 读取yaml文件，导出TS接口到标准输出
 */
export async function writeTSToStdout(
  yamlPath: string,
) {
  return writeTSToFileOrStdout(yamlPath, {
    isToStdout: true,
  });
}

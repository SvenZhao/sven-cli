import { ArgumentsCamelCase, Argv, Options, PositionalOptions } from "yargs";
import fg from "fast-glob";
import { isUrl } from "@/utils/url";

/** 入参 */
interface ITinyArgs {
  paths?: string[]; // 文件路径数组
  d?: boolean; // 目录压缩标志
  url?: boolean; // URL 图片压缩标志
}
const positional: { key: string } & PositionalOptions = {
  key: "files",
  describe: "要压缩的文件路径列表，如 ./1.jpg, ./2.jpg",
  type: "string",
  array: true, // 明确指出 paths 是字符串数组
};
const options: Array<{ key: keyof ITinyArgs } & Options> = [];
const tinyCommand = {
  command: "tiny <paths...>",
  describe: "使用tinypng压缩图片资源1",
  builder: (yargs: Argv): Argv<ITinyArgs> => {
    options.forEach(({ key, alias, type, describe }) => {
      yargs.option(key, { alias, type, describe });
    });
    return yargs.positional(positional.key, positional);
  }, // 引用抽象函数
  handler: async (argv: ArgumentsCamelCase<ITinyArgs>) => {
    const paths = argv.paths || []; // 确保 paths 始终是数组
    // 过滤 URL 和本地路径
    const urls = paths.filter(isUrl); // 筛选出 URL
    const localPaths = paths.filter((path) => !isUrl(path)); // 筛选出本地路径
    // 只匹配本地图片文件
    const files = await fg(localPaths.map((path) => `${path}/**/*.{jpg,jpeg,png,gif}`));
    console.log("匹配到的文件列表:", files);
    if (urls.length) {
      console.info("匹配到的url", urls);
    }
  },
};

export default tinyCommand;

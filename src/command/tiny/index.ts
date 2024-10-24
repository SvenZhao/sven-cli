import { ArgumentsCamelCase, Argv } from "yargs";
import mergeStream from "merge-stream";
import gulp from "gulp";
import { isUrl } from "@/utils/url";
import { generateCommand, IPositionals } from "@/utils/yargs";
import { isImageFile } from "@/utils/files";
import { download2gulp, tinypngFree } from "@/utils/gulp";
interface IArguments {
  /* 文件 */
  files: string[];
}
/** 入参 */
const positionals: IPositionals[] = [
  {
    required: true,
    key: "files",
    describe: "要压缩的图片 ./* ./1.jpg http://www.baidu.com/1.jpg",
    type: "string",
    isMultiple: true,
  },
];

const tinyCommand = {
  command: generateCommand(positionals),
  describe: "使用tinypng压缩图片资源",
  builder: (yargs: Argv<IArguments>) => {
    positionals.forEach(({ key, ...config }) => {
      yargs.positional(key, config);
    });
    return yargs;
  }, // 引用抽象函数
  handler: async (argv: ArgumentsCamelCase<IArguments>) => {
    console.log("argv", argv);
    const files = argv.files || []; // 确保 paths 始终是数组
    const urlFiles = files.filter(isUrl).filter(isImageFile);
    const localFiles = files.filter((file) => !isUrl(file)).filter(isImageFile);
    const urlStream = download2gulp(urlFiles);
    const localStream = gulp.src(localFiles);
    console.log("匹配到的图片文件:", localStream, urlStream);
    // 输出到 'output' 目录
    mergeStream(urlStream, localStream)
      .pipe(await tinypngFree())
      .pipe(gulp.dest("output"));
  },
};

export default tinyCommand;

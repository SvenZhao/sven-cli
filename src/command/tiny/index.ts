import { ArgumentsCamelCase, Argv, CommandModule } from "yargs";
import mergeStream from "merge-stream";
const download = require('gulp-download2');
import gulp from "gulp";
import { isUrl } from "@/utils/url";
import { generateCommand, IPositionals } from "@/utils/yargs";
import { isImageFile } from "@/utils/files";
import { tinypngCompress } from "@/utils/gulp";


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

const tinyCommand: CommandModule<{}, IArguments> = {
  command: generateCommand(positionals),
  describe: "使用tinypng压缩图片资源",
  builder: (yargs: Argv) => {
    positionals.forEach(({ key, ...config }) => {
      yargs.positional(key, config);
    });
    return yargs as any;
  }, // 引用抽象函数
  handler: async (argv: ArgumentsCamelCase<IArguments>) => {
    const files = argv.files || [];
    const urlFiles = files.filter(isUrl).filter(isImageFile);
    const localFiles = files.filter((file) => !isUrl(file)).filter(isImageFile);
    const urlStream = download(urlFiles); // 下载完成后重新创建流
    const localStream = gulp.src(localFiles, { encoding: false }); // 确保读取为 Buffer
    // 合并两个流并进行处理
    const mergedStream = mergeStream(urlStream, localStream);
    mergedStream.pipe(tinypngCompress()).pipe(gulp.dest("output"));
  },
};

export default tinyCommand;

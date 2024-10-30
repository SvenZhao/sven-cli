import { ArgumentsCamelCase, Argv, CommandModule } from "yargs";
const download = require('gulp-download2');
import vfs from "vinyl-fs";
import { isUrl } from "@/utils/url";
import { generateCommand, IPositionals } from "@/utils/yargs";
import { tinypngCompress } from "@/utils/gulp";
import { promisify } from "util";
import stream from "stream";
import log from "@/utils/log";
const finished = promisify(stream.finished); // 包装 stream.finished 为 Promise


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
    // 并行处理所有文件
    await Promise.all(
      files.map(async (file) => {
        console.log('file', file)
        const vfsfile = isUrl(file) ? download(file) : vfs.src(file, { encoding: false });
        // 创建最终的流处理链
        const processingStream = vfsfile.pipe(tinypngCompress()).pipe(vfs.dest("output"))
        // 等待整个流处理完成
        return finished(processingStream);
      })
    );
    log.done('压缩完毕')
  },
};

export default tinyCommand;

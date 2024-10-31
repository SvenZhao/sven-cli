import { CommandModule, Argv, PositionalOptions } from "yargs";
import { ArgumentsCamelCase } from "yargs";
import { isUrl } from "@/utils/url";
import vfs from "vinyl-fs";
import download from "gulp-download2";
import { promisify } from "util";
import stream from "stream";
import log from "@/utils/log";
import { squooshCompressGulp } from "@/utils/gulp";
import { ImagePool } from "@squoosh/lib";
import { isImageFile } from "@/utils/files";
const finished = promisify(stream.finished);
interface IArguments {
    /* 文件 */
    files: string[];
}
/** 入参 */
const positional: PositionalOptions = {
    describe: "要压缩的图片 ./* ./1.jpg http://www.baidu.com/1.jpg",
    type: "string",
}
const SquooshCommand: CommandModule<{}, IArguments> = {
    command: "squoosh <files...>", // 使用 <files...> 来定义接收多个文件参数
    describe: "使用 squoosh 压缩图片",
    builder: (yargs: Argv<{}>) => {
        return yargs
            .positional("files", positional) // 设置 `files` 参数
            .array("files") as Argv<IArguments>; // 声明 `files` 为数组
    },
    handler: async (argv: ArgumentsCamelCase<IArguments>) => {
        const files = argv.files.filter(isImageFile);
        if (files.length === 0) {
            console.log("未提供有效的图片文件");
            return;
        }
        const imagePool = new ImagePool(10);
        // 压缩处理
        await Promise.all(files.map(async (file) => {
            const vfsfile = isUrl(file) ? download(file, {}) : vfs.src(file, { encoding: false });
            const processingStream = vfsfile.pipe(squooshCompressGulp(imagePool)).pipe(vfs.dest("output"));
            return finished(processingStream);
        }));
        await imagePool.close();
        log.done("压缩完毕");
    }
};

export default SquooshCommand;


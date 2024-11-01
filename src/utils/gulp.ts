import through2 from "through2";
import Vinyl from "vinyl";
import log from "./log";
import { ImagePool } from "@squoosh/lib";
import { squooshCompress, tinypngCompress } from "./compress";
import streamToBuffer from "stream-to-buffer";

/** 包裹一个处理文件的函数，使其可以在 Gulp 流中使用 */
export function wrapGulpFunction(asyncFn: (file: Vinyl) => Promise<Vinyl>) {
  return through2.obj(async function (file: Vinyl, _, cb) {
    try {
      const resultFile = await asyncFn(file);
      cb(null, resultFile);
    } catch (error: any) {
      log.error(`处理文件 ${file.path} 时出错: ${error.message}`);
      cb(null, file);
    }
  });
}
// 公共函数：将流转换为缓冲区
export async function streamToBufferAsync(stream: NodeJS.ReadableStream): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    streamToBuffer(stream, (err, buffer) => {
      if (err) reject(err);
      else resolve(buffer);
    });
  });
}


// 使用 wrapGulpFunction 包装 tinypngCompress 和 squooshCompress
export const tinypngCompressGulp = () => wrapGulpFunction(tinypngCompress);
export const squooshCompressGulp = (imagePool: ImagePool) => wrapGulpFunction((file) => squooshCompress(file, imagePool));
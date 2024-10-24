import { basename, dirname, join } from "path";
import axios from "axios"; // 替换 got 为 axios
import log from "./log";
import Vinyl from "vinyl"; // Gulp 使用 Vinyl 文件对象表示文件
import { TransformCallback } from "stream";
import through from "through2";
const download = require("gulp-download-stream");

export const download2gulp = (url: string | string[]): NodeJS.ReadWriteStream => {
  return download(url);
};

export async function compress(file: Vinyl, enc: BufferEncoding, done: TransformCallback): Promise<void> {
  const filename = basename(file.path);
  const dist = "output"; // 目标输出目录
  const outpath = join(dirname(file.path), dist, filename);

  log.info(`开始压缩: ${filename}`);

  // 确保文件内容是有效的 Buffer
  if (!file.contents || !(file.contents instanceof Buffer)) {
    log.error(`文件内容无效，跳过压缩: ${filename}`);
    return done(null, file); // 直接跳过该文件
  }

  let tinyFile: Vinyl | null = null;

  try {
    // 使用 axios 发送 POST 请求到 TinyPNG 的 API
    const res = await axios.post("https://tinypng.com/web/shrink", file.contents, {
      headers: {
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Encoding": "gzip, deflate",
        "Accept-Language": "zh-cn,zh;q=0.8,en-us;q=0.5,en;q=0.3",
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        Connection: "keep-alive",
        Host: "tinypng.com",
        DNT: 1,
        Referer: "https://tinypng.com/",
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:42.0) Gecko/20100101 Firefox/42.0",
        "Content-Type": "application/octet-stream", // 上传文件时需要指定的 Content-Type
      },
    });

    // 解析响应数据
    const jsonResponse = res.data; // axios 自动解析为 JSON
    const url = jsonResponse.output.url;

    log.info(`上传成功: ${url}`);

    // 下载压缩后的文件
    const downloadRes = await axios.get(url, { responseType: "arraybuffer" }); // 使用 responseType 获取二进制数据
    const compressedData = downloadRes.data;

    // 克隆原始文件，替换其内容为下载的压缩文件
    tinyFile = file.clone();
    tinyFile.contents = Buffer.from(compressedData);

    log.done(`压缩成功，输出路径: ${outpath}`);
  } catch (e: any) {
    log.error(`压缩失败，跳过压缩: ${filename}`);
    log.error(e.message || e);
  }

  done(null, tinyFile); // 调用 done 回调，传递压缩后的文件或 null
}

export async function tinypngFree() {
  return through.obj(async (file: Vinyl, enc: BufferEncoding, done: TransformCallback) => {
    if (file.isBuffer()) return await compress(file, enc, done);
    log.error(file.path + "不是png或jpg图片.");
    return done(null, file);
  });
}

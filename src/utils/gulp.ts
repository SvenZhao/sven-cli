import through2 from "through2";
import tinify from "tinify";
import Vinyl from "vinyl";
import log from "./log";
import streamToBuffer from 'stream-to-buffer';
import { basename } from "path";

const apiKeys = [
  "13Dhnf1lN9CLZ1nzPNyVPTrvdzHPgSsl",
  "dtp3PcDMVrMVcyNpgZzCzzHsLfhmZJRZ",
  "GVvX2bpM6ydbsrBPwsWddNpDgsJQwtb8",
  "MsCFSqSLb9nFQS9kVH2vKrnmNtSVsYGh",
  "fs7Wm8yjp9B4Z5F2WLkmFhhNYDByJ137",
];
let currentKeyIndex = 0;

function getNextApiKey() {
  const key = apiKeys[currentKeyIndex];
  currentKeyIndex = (currentKeyIndex + 1) % apiKeys.length;
  return key;
}

export function tinypngCompress() {
  tinify.key = getNextApiKey();

  return through2.obj(async function (file: Vinyl, _, cb) {
    // 压缩 Buffer 内容
    const fileName = basename(file.path); // 获取文件名
    try {
      // 如果是 Stream，转换为 Buffer
      if (file.isStream()) {
        file.contents = await new Promise((resolve, reject) => {
          streamToBuffer(file.contents, (err: any, buffer: any) => {
            if (err) reject(err);
            else resolve(buffer);
          });
        });
      }
      if (!file.isBuffer()) {
        log.info(`文件类型不支持: ${fileName}`);
        return cb(null, file); // 直接跳过非 Buffer 类型
      }
      const sourceData = file.contents;
      const originalSize = sourceData.length;
      log.info(`开始压缩: ${fileName}，原始大小: ${(originalSize / 1024).toFixed(2)} KB`);

      const resultData = await tinify.fromBuffer(sourceData).toBuffer();
      const compressedSize = resultData.length;

      file.contents = Buffer.from(resultData);
      log.done(
        `压缩完成: ${fileName}，压缩大小: ${(compressedSize / 1024).toFixed(2)} KB，压缩率: ${(
          (1 - compressedSize / originalSize) * 100
        ).toFixed(2)}%`
      );

      cb(null, file); // 成功后传递文件
    } catch (error: any) {
      log.error(`处理文件 ${fileName} 时出错: ${error.message}`);
      cb(null, file); // 出错时传递原文件
    }
  });
}

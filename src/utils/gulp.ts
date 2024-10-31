import through2 from "through2";
import tinify from "tinify";
import Vinyl from "vinyl";
import log from "./log";
import streamToBuffer from 'stream-to-buffer';
import { basename } from "path";
import { ImagePool } from "@squoosh/lib";


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


// 提前定义各文件类型的编码选项
const encodeOptionsMap = {
  jpg: {
    mozjpeg: {
      quality: 85,          // 提高质量至 85，保证更佳清晰度
      baseline: true,       // 使用渐进式 JPEG
      trellisQuant: true,   // 启用 Trellis 量化以优化压缩
      dcScanOpt: 2,         // 扫描顺序优化
      quantTable: 3         // 选择压缩表
    }
  },
  jpeg: {
    mozjpeg: {
      quality: 85,
      baseline: true,
      trellisQuant: true,
      dcScanOpt: 2,
      quantTable: 3
    }
  },
  png: {
    oxipng: {
      level: 4,             // 提高压缩级别至 4
      effort: 5,            // 增加压缩细致度
      bitDepthReduction: true, // 开启位深度压缩
      paletteReduction: true   // 开启调色板压缩
    }
  },
  webp: {
    webp: {
      quality: 85,          // 提高质量以确保细节
      alpha_quality: 85,    // 降低透明度质量，平衡大小
      method: 6,            // 使用更高效压缩算法
      sns_strength: 50,     // 降低局部噪点敏感度
      filter_strength: 30   // 平滑噪点边缘
    }
  }
};


export function squooshCompress(imagePool: ImagePool) {
  return through2.obj(async function (file: Vinyl, _, cb) {
    const fileName = basename(file.path);
    log.info(`开始处理: ${fileName}`);
    try {
      if (file.isStream()) {
        file.contents = await new Promise((resolve, reject) => {
          streamToBuffer(file.contents, (err, buffer) => {
            if (err) reject(err);
            else resolve(buffer);
          });
        });
      }
      if (file.isBuffer()) {
        const originalSize = file.contents.length;
        const fileExt = fileName.split('.').pop()?.toLowerCase();
        if (fileExt && encodeOptionsMap[fileExt]) {
          const encodeOptions = encodeOptionsMap[fileExt];
          log.info(`开始压缩: ${fileName}`);


          const image = imagePool.ingestImage(file.contents);
          await image.encode(encodeOptions);

          const result = Object.values(image.encodedWith).find(res => res && res.binary);
          if (result) {
            file.contents = Buffer.from(result.binary);
            const compressedSize = file.contents.length;
            log.done(
              `压缩完成: ${fileName}，原始大小: ${(originalSize / 1024).toFixed(2)} KB，压缩比例: ${(compressedSize / 1024).toFixed(2)} KB，压缩率: ${(
                (1 - compressedSize / originalSize) * 100
              ).toFixed(2)}%`
            );
          }
        } else {
          log.warn(`不支持的文件类型: ${fileName}`);
        }
      } else {
        log.warn(`不支持的文件类型: ${fileName}`);
      }

      cb(null, file);
    } catch (error: any) {
      log.error(`处理文件 ${fileName} 时出错: ${error.message}`);
      cb(null, file);
    }
  });
}
#!/usr/bin/env node
// import { basename, join, dirname } from "path";
// import got from "got";
// import log from "@/utils/log";

async function compress(file:any) {
  console.log("file", file);
  // const filename = basename(file.path);
  // const outpath = join(dirname(file.path), dist, filename);
  // log.info(`开始压缩:${filename}`);
  // let tinyFile = null;
  // try {
  //   let res = await got({
  //     url: "https://tinypng.com/web/shrink",
  //     method: "post",
  //     headers: {
  //       Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  //       "Accept-Encoding": "gzip, deflate",
  //       "Accept-Language": "zh-cn,zh;q=0.8,en-us;q=0.5,en;q=0.3",
  //       "Cache-Control": "no-cache",
  //       Pragma: "no-cache",
  //       Connection: "keep-alive",
  //       Host: "tinypng.com",
  //       DNT: 1,
  //       Referer: "https://tinypng.com/",
  //       "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:42.0) Gecko/20100101 Firefox/42.0",
  //     },
  //     body: file.contents,
  //   });
  //   res = JSON.parse(res.body);
  //   const url = res.output.url;
  //   log.info(`上传成功:${url}`);
  //   let data = await got(url, { encoding: null });
  //   tinyFile = file.clone();
  //   log.done(`压缩成功 输出路径:${outpath}`);
  //   data = Buffer.from(data.body, enc);
  //   tinyFile.contents = data;
  // } catch (e) {
  //   log.error(`压缩失败 跳过压缩:${filename}`);
  //   log.error(e);
  // }
  // log.info("");
}

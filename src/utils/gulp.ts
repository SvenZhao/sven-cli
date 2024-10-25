const download = require("gulp-download-stream");

export const download2gulp = (url: string | string[]): NodeJS.ReadWriteStream => {
  return download(url);
};
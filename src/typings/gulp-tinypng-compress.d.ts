// src/@types/gulp-tinypng-compress.d.ts
declare module 'gulp-tinypng-compress' {
    import { Transform } from 'stream';

    interface TinypngCompressOptions {
      key: string;
      log?: boolean;
      summarize?: boolean;
    }

    function tinypngCompress(options: TinypngCompressOptions): Transform;

    export = tinypngCompress; // 使用 CommonJS 导出方式
  }

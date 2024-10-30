#!/usr/bin/env node
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/command/tiny/index.ts":
/*!***********************************!*\
  !*** ./src/command/tiny/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vinyl_fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vinyl-fs */ \"vinyl-fs\");\n/* harmony import */ var vinyl_fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vinyl_fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/url */ \"./src/utils/url.ts\");\n/* harmony import */ var _utils_yargs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/yargs */ \"./src/utils/yargs.ts\");\n/* harmony import */ var _utils_gulp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/gulp */ \"./src/utils/gulp.ts\");\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ \"util\");\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! stream */ \"stream\");\n/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(stream__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/log */ \"./src/utils/log.ts\");\nconst download = __webpack_require__(/*! gulp-download2 */ \"gulp-download2\");\n\n\n\n\n\n\n\nconst finished = (0,util__WEBPACK_IMPORTED_MODULE_4__.promisify)((stream__WEBPACK_IMPORTED_MODULE_5___default().finished)); // 包装 stream.finished 为 Promise\n\n/** 入参 */\nconst positionals = [{\n  required: true,\n  key: \"files\",\n  describe: \"要压缩的图片 ./* ./1.jpg http://www.baidu.com/1.jpg\",\n  type: \"string\",\n  isMultiple: true\n}];\nconst tinyCommand = {\n  command: (0,_utils_yargs__WEBPACK_IMPORTED_MODULE_2__.generateCommand)(positionals),\n  describe: \"使用tinypng压缩图片资源\",\n  builder: yargs => {\n    positionals.forEach(({\n      key,\n      ...config\n    }) => {\n      yargs.positional(key, config);\n    });\n    return yargs;\n  },\n  // 引用抽象函数\n  handler: async argv => {\n    const files = argv.files || [];\n    // 并行处理所有文件\n    await Promise.all(files.map(async file => {\n      console.log('file', file);\n      const vfsfile = (0,_utils_url__WEBPACK_IMPORTED_MODULE_1__.isUrl)(file) ? download(file) : vinyl_fs__WEBPACK_IMPORTED_MODULE_0___default().src(file, {\n        encoding: false\n      });\n      // 创建最终的流处理链\n      const processingStream = vfsfile.pipe((0,_utils_gulp__WEBPACK_IMPORTED_MODULE_3__.tinypngCompress)()).pipe(vinyl_fs__WEBPACK_IMPORTED_MODULE_0___default().dest(\"output\"));\n      // 等待整个流处理完成\n      return finished(processingStream);\n    }));\n    _utils_log__WEBPACK_IMPORTED_MODULE_6__[\"default\"].done('压缩完毕');\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tinyCommand);\n\n//# sourceURL=webpack://svenz/./src/command/tiny/index.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var yargs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yargs */ \"yargs\");\n/* harmony import */ var yargs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yargs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var yargs_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yargs/helpers */ \"yargs/helpers\");\n/* harmony import */ var yargs_helpers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yargs_helpers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _command_tiny__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./command/tiny */ \"./src/command/tiny/index.ts\");\n//#!/usr/bin/env node\n\n\n\nyargs__WEBPACK_IMPORTED_MODULE_0___default()((0,yargs_helpers__WEBPACK_IMPORTED_MODULE_1__.hideBin)(process.argv)).command(_command_tiny__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).demandCommand(1).parse();\n\n//# sourceURL=webpack://svenz/./src/index.ts?");

/***/ }),

/***/ "./src/utils/gulp.ts":
/*!***************************!*\
  !*** ./src/utils/gulp.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   tinypngCompress: () => (/* binding */ tinypngCompress)\n/* harmony export */ });\n/* harmony import */ var through2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! through2 */ \"through2\");\n/* harmony import */ var through2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(through2__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tinify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tinify */ \"tinify\");\n/* harmony import */ var tinify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tinify__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log */ \"./src/utils/log.ts\");\n/* harmony import */ var stream_to_buffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stream-to-buffer */ \"stream-to-buffer\");\n/* harmony import */ var stream_to_buffer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(stream_to_buffer__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst apiKeys = [\"13Dhnf1lN9CLZ1nzPNyVPTrvdzHPgSsl\", \"dtp3PcDMVrMVcyNpgZzCzzHsLfhmZJRZ\", \"GVvX2bpM6ydbsrBPwsWddNpDgsJQwtb8\", \"MsCFSqSLb9nFQS9kVH2vKrnmNtSVsYGh\", \"fs7Wm8yjp9B4Z5F2WLkmFhhNYDByJ137\"];\nlet currentKeyIndex = 0;\nfunction getNextApiKey() {\n  const key = apiKeys[currentKeyIndex];\n  currentKeyIndex = (currentKeyIndex + 1) % apiKeys.length;\n  return key;\n}\nfunction tinypngCompress() {\n  (tinify__WEBPACK_IMPORTED_MODULE_1___default().key) = getNextApiKey();\n  return through2__WEBPACK_IMPORTED_MODULE_0___default().obj(async function (file, _, cb) {\n    // 压缩 Buffer 内容\n    const fileName = (0,path__WEBPACK_IMPORTED_MODULE_4__.basename)(file.path); // 获取文件名\n    try {\n      // 如果是 Stream，转换为 Buffer\n      if (file.isStream()) {\n        file.contents = await new Promise((resolve, reject) => {\n          stream_to_buffer__WEBPACK_IMPORTED_MODULE_3___default()(file.contents, (err, buffer) => {\n            if (err) reject(err);else resolve(buffer);\n          });\n        });\n      }\n      if (!file.isBuffer()) {\n        _log__WEBPACK_IMPORTED_MODULE_2__[\"default\"].info(`文件类型不支持: ${fileName}`);\n        return cb(null, file); // 直接跳过非 Buffer 类型\n      }\n      const sourceData = file.contents;\n      const originalSize = sourceData.length;\n      _log__WEBPACK_IMPORTED_MODULE_2__[\"default\"].info(`开始压缩: ${fileName}，原始大小: ${(originalSize / 1024).toFixed(2)} KB`);\n      const resultData = await tinify__WEBPACK_IMPORTED_MODULE_1___default().fromBuffer(sourceData).toBuffer();\n      const compressedSize = resultData.length;\n      file.contents = Buffer.from(resultData);\n      _log__WEBPACK_IMPORTED_MODULE_2__[\"default\"].done(`压缩完成: ${fileName}，压缩大小: ${(compressedSize / 1024).toFixed(2)} KB，压缩率: ${((1 - compressedSize / originalSize) * 100).toFixed(2)}%`);\n      cb(null, file); // 成功后传递文件\n    } catch (error) {\n      _log__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(`处理文件 ${fileName} 时出错: ${error.message}`);\n      cb(null, file); // 出错时传递原文件\n    }\n  });\n}\n\n//# sourceURL=webpack://svenz/./src/utils/gulp.ts?");

/***/ }),

/***/ "./src/utils/log.ts":
/*!**************************!*\
  !*** ./src/utils/log.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ansi_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ansi-colors */ \"ansi-colors\");\n/* harmony import */ var ansi_colors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ansi_colors__WEBPACK_IMPORTED_MODULE_0__);\n\nconst log = {\n  info: string => {\n    console.log(string);\n  },\n  error: string => {\n    console.log(ansi_colors__WEBPACK_IMPORTED_MODULE_0___default().red(string));\n  },\n  warn: string => {\n    console.log(ansi_colors__WEBPACK_IMPORTED_MODULE_0___default().red(string));\n  },\n  done: string => {\n    console.log(ansi_colors__WEBPACK_IMPORTED_MODULE_0___default().green(string));\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (log);\n\n//# sourceURL=webpack://svenz/./src/utils/log.ts?");

/***/ }),

/***/ "./src/utils/url.ts":
/*!**************************!*\
  !*** ./src/utils/url.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isUrl: () => (/* binding */ isUrl)\n/* harmony export */ });\nconst isUrl = path => {\n  const urlPattern = /^(https?:\\/\\/|ftp:\\/\\/|file:\\/\\/|mailto:|data:)/i;\n  return urlPattern.test(path);\n};\n\n//# sourceURL=webpack://svenz/./src/utils/url.ts?");

/***/ }),

/***/ "./src/utils/yargs.ts":
/*!****************************!*\
  !*** ./src/utils/yargs.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateCommand: () => (/* binding */ generateCommand)\n/* harmony export */ });\nconst generateCommand = positionals => {\n  return `tiny ${positionals.map(pos => pos.required ? `<${pos.key}${pos.isMultiple ? \"...\" : \"\"}>` // 必选参数用 <>\n  : `[${pos.key}${pos.isMultiple ? \"...\" : \"\"}]` // 可选参数用 []\n  ).join(\" \")}`;\n};\n\n//# sourceURL=webpack://svenz/./src/utils/yargs.ts?");

/***/ }),

/***/ "ansi-colors":
/*!******************************!*\
  !*** external "ansi-colors" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("ansi-colors");

/***/ }),

/***/ "gulp-download2":
/*!*********************************!*\
  !*** external "gulp-download2" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("gulp-download2");

/***/ }),

/***/ "stream-to-buffer":
/*!***********************************!*\
  !*** external "stream-to-buffer" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("stream-to-buffer");

/***/ }),

/***/ "through2":
/*!***************************!*\
  !*** external "through2" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("through2");

/***/ }),

/***/ "tinify":
/*!*************************!*\
  !*** external "tinify" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("tinify");

/***/ }),

/***/ "vinyl-fs":
/*!***************************!*\
  !*** external "vinyl-fs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("vinyl-fs");

/***/ }),

/***/ "yargs":
/*!************************!*\
  !*** external "yargs" ***!
  \************************/
/***/ ((module) => {

module.exports = require("yargs");

/***/ }),

/***/ "yargs/helpers":
/*!********************************!*\
  !*** external "yargs/helpers" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("yargs/helpers");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
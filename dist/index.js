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
/******/ 	var __webpack_modules__ = ({

/***/ "./src/command/tiny/index.ts":
/*!***********************************!*\
  !*** ./src/command/tiny/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var merge_stream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge-stream */ \"merge-stream\");\n/* harmony import */ var merge_stream__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge_stream__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var gulp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gulp */ \"gulp\");\n/* harmony import */ var gulp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gulp__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/url */ \"./src/utils/url.ts\");\n/* harmony import */ var _utils_yargs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/yargs */ \"./src/utils/yargs.ts\");\n/* harmony import */ var _utils_files__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/files */ \"./src/utils/files.ts\");\n/* harmony import */ var _utils_gulp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/gulp */ \"./src/utils/gulp.ts\");\n\nconst download = __webpack_require__(/*! gulp-download2 */ \"gulp-download2\");\n\n\n\n\n\n/** 入参 */\nconst positionals = [{\n  required: true,\n  key: \"files\",\n  describe: \"要压缩的图片 ./* ./1.jpg http://www.baidu.com/1.jpg\",\n  type: \"string\",\n  isMultiple: true\n}];\nconst tinyCommand = {\n  command: (0,_utils_yargs__WEBPACK_IMPORTED_MODULE_3__.generateCommand)(positionals),\n  describe: \"使用tinypng压缩图片资源\",\n  builder: yargs => {\n    positionals.forEach(({\n      key,\n      ...config\n    }) => {\n      yargs.positional(key, config);\n    });\n    return yargs;\n  },\n  // 引用抽象函数\n  handler: async argv => {\n    const files = argv.files || [];\n    const urlFiles = files.filter(_utils_url__WEBPACK_IMPORTED_MODULE_2__.isUrl).filter(_utils_files__WEBPACK_IMPORTED_MODULE_4__.isImageFile);\n    const localFiles = files.filter(file => !(0,_utils_url__WEBPACK_IMPORTED_MODULE_2__.isUrl)(file)).filter(_utils_files__WEBPACK_IMPORTED_MODULE_4__.isImageFile);\n    const urlStream = download(urlFiles); // 下载完成后重新创建流\n    const localStream = gulp__WEBPACK_IMPORTED_MODULE_1___default().src(localFiles, {\n      encoding: false\n    }); // 确保读取为 Buffer\n    // 合并两个流并进行处理\n    const mergedStream = merge_stream__WEBPACK_IMPORTED_MODULE_0___default()(urlStream, localStream);\n    mergedStream.pipe((0,_utils_gulp__WEBPACK_IMPORTED_MODULE_5__.tinypngCompress)()).pipe(gulp__WEBPACK_IMPORTED_MODULE_1___default().dest(\"output\"));\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tinyCommand);\n\n//# sourceURL=webpack://svenz/./src/command/tiny/index.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var yargs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yargs */ \"yargs\");\n/* harmony import */ var yargs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yargs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var yargs_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yargs/helpers */ \"yargs/helpers\");\n/* harmony import */ var yargs_helpers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yargs_helpers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _command_tiny__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./command/tiny */ \"./src/command/tiny/index.ts\");\n//#!/usr/bin/env node\n\n\n\nyargs__WEBPACK_IMPORTED_MODULE_0___default()((0,yargs_helpers__WEBPACK_IMPORTED_MODULE_1__.hideBin)(process.argv)).command(_command_tiny__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).demandCommand(1).parse();\n\n//# sourceURL=webpack://svenz/./src/index.ts?");

/***/ }),

/***/ "./src/utils/files.ts":
/*!****************************!*\
  !*** ./src/utils/files.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isImageFile: () => (/* binding */ isImageFile)\n/* harmony export */ });\nconst imageExtensions = /\\.(jpg|jpeg|png|gif)$/i;\n// 判断文件是否为图片\nconst isImageFile = file => imageExtensions.test(file);\n\n//# sourceURL=webpack://svenz/./src/utils/files.ts?");

/***/ }),

/***/ "./src/utils/gulp.ts":
/*!***************************!*\
  !*** ./src/utils/gulp.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   tinypngCompress: () => (/* binding */ tinypngCompress)\n/* harmony export */ });\n/* harmony import */ var through2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! through2 */ \"through2\");\n/* harmony import */ var through2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(through2__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tinify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tinify */ \"tinify\");\n/* harmony import */ var tinify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tinify__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log */ \"./src/utils/log.ts\");\n/* harmony import */ var stream_to_buffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stream-to-buffer */ \"./node_modules/stream-to-buffer/index.js\");\n/* harmony import */ var stream_to_buffer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(stream_to_buffer__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst apiKeys = [\"13Dhnf1lN9CLZ1nzPNyVPTrvdzHPgSsl\", \"dtp3PcDMVrMVcyNpgZzCzzHsLfhmZJRZ\", \"GVvX2bpM6ydbsrBPwsWddNpDgsJQwtb8\"];\nlet currentKeyIndex = 0;\nfunction getNextApiKey() {\n  const key = apiKeys[currentKeyIndex];\n  currentKeyIndex = (currentKeyIndex + 1) % apiKeys.length;\n  return key;\n}\nfunction tinypngCompress() {\n  (tinify__WEBPACK_IMPORTED_MODULE_1___default().key) = getNextApiKey();\n  return through2__WEBPACK_IMPORTED_MODULE_0___default().obj(async function (file, _, cb) {\n    try {\n      // 如果是 Stream，转换为 Buffer\n      if (file.isStream()) {\n        file.contents = await new Promise((resolve, reject) => {\n          stream_to_buffer__WEBPACK_IMPORTED_MODULE_3___default()(file.contents, (err, buffer) => {\n            if (err) reject(err);else resolve(buffer);\n          });\n        });\n      }\n      if (!file.isBuffer()) {\n        _log__WEBPACK_IMPORTED_MODULE_2__[\"default\"].info(`文件类型不支持: ${file.path}`);\n        return cb(null, file); // 直接跳过非 Buffer 类型\n      }\n\n      // 压缩 Buffer 内容\n      const sourceData = file.contents;\n      const originalSize = sourceData.length;\n      _log__WEBPACK_IMPORTED_MODULE_2__[\"default\"].info(`开始压缩: ${file.path}，原始大小: ${(originalSize / 1024).toFixed(2)} KB`);\n      const resultData = await tinify__WEBPACK_IMPORTED_MODULE_1___default().fromBuffer(sourceData).toBuffer();\n      const compressedSize = resultData.length;\n      file.contents = Buffer.from(resultData);\n      _log__WEBPACK_IMPORTED_MODULE_2__[\"default\"].done(`压缩完成: ${file.path}，压缩大小: ${(compressedSize / 1024).toFixed(2)} KB，压缩率: ${((1 - compressedSize / originalSize) * 100).toFixed(2)}%`);\n      cb(null, file); // 成功后传递文件\n    } catch (error) {\n      _log__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(`处理文件 ${file.path} 时出错: ${error.message}`);\n      cb(null, file); // 出错时传递原文件\n    }\n  });\n}\n\n//# sourceURL=webpack://svenz/./src/utils/gulp.ts?");

/***/ }),

/***/ "./src/utils/log.ts":
/*!**************************!*\
  !*** ./src/utils/log.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ansi_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ansi-colors */ \"ansi-colors\");\n/* harmony import */ var ansi_colors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ansi_colors__WEBPACK_IMPORTED_MODULE_0__);\n\nconst log = {\n  info: string => {\n    console.log(string);\n  },\n  error: string => {\n    console.log(ansi_colors__WEBPACK_IMPORTED_MODULE_0___default().red(string));\n  },\n  warn: string => {\n    console.log(ansi_colors__WEBPACK_IMPORTED_MODULE_0___default().red(string));\n  },\n  done: string => {\n    console.log(ansi_colors__WEBPACK_IMPORTED_MODULE_0___default().green(string));\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (log);\n\n//# sourceURL=webpack://svenz/./src/utils/log.ts?");

/***/ }),

/***/ "./src/utils/url.ts":
/*!**************************!*\
  !*** ./src/utils/url.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isUrl: () => (/* binding */ isUrl)\n/* harmony export */ });\nconst isUrl = path => {\n  const urlPattern = /^(https?:\\/\\/|ftp:\\/\\/|file:\\/\\/|mailto:|data:)/i;\n  return urlPattern.test(path);\n};\n\n//# sourceURL=webpack://svenz/./src/utils/url.ts?");

/***/ }),

/***/ "./src/utils/yargs.ts":
/*!****************************!*\
  !*** ./src/utils/yargs.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateCommand: () => (/* binding */ generateCommand)\n/* harmony export */ });\nconst generateCommand = positionals => {\n  return `tiny ${positionals.map(pos => pos.required ? `<${pos.key}${pos.isMultiple ? \"...\" : \"\"}>` // 必选参数用 <>\n  : `[${pos.key}${pos.isMultiple ? \"...\" : \"\"}]` // 可选参数用 []\n  ).join(\" \")}`;\n};\n\n//# sourceURL=webpack://svenz/./src/utils/yargs.ts?");

/***/ }),

/***/ "./node_modules/stream-to-buffer/index.js":
/*!************************************************!*\
  !*** ./node_modules/stream-to-buffer/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! stream-to */ \"./node_modules/stream-to/index.js\").buffer\n\n//# sourceURL=webpack://svenz/./node_modules/stream-to-buffer/index.js?");

/***/ }),

/***/ "./node_modules/stream-to/index.js":
/*!*****************************************!*\
  !*** ./node_modules/stream-to/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("exports.array = toArray\nexports.buffer = toBuffer\n\nfunction toArray(stream, callback) {\n  var arr = []\n\n  stream.on('data', onData)\n  stream.once('end', onEnd)\n  stream.once('error', callback)\n  stream.once('error', cleanup)\n  stream.once('close', cleanup)\n\n  function onData(doc) {\n    arr.push(doc)\n  }\n\n  function onEnd() {\n    callback(null, arr)\n    cleanup()\n  }\n\n  function cleanup() {\n    arr = null\n    stream.removeListener('data', onData)\n    stream.removeListener('end', onEnd)\n    stream.removeListener('error', callback)\n    stream.removeListener('error', cleanup)\n    stream.removeListener('close', cleanup)\n  }\n\n  return stream\n}\n\nfunction toBuffer(stream, callback) {\n  toArray(stream, function (err, arr) {\n    if (err || !arr)\n      callback(err)\n    else\n      callback(null, Buffer.concat(arr))\n  })\n\n  return stream\n}\n\n//# sourceURL=webpack://svenz/./node_modules/stream-to/index.js?");

/***/ }),

/***/ "ansi-colors":
/*!******************************!*\
  !*** external "ansi-colors" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("ansi-colors");

/***/ }),

/***/ "gulp":
/*!***********************!*\
  !*** external "gulp" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("gulp");

/***/ }),

/***/ "gulp-download2":
/*!*********************************!*\
  !*** external "gulp-download2" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("gulp-download2");

/***/ }),

/***/ "merge-stream":
/*!*******************************!*\
  !*** external "merge-stream" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("merge-stream");

/***/ }),

/***/ "through2":
/*!***************************!*\
  !*** external "through2" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("through2");

/***/ }),

/***/ "tinify":
/*!*************************!*\
  !*** external "tinify" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("tinify");

/***/ }),

/***/ "yargs":
/*!************************!*\
  !*** external "yargs" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("yargs");

/***/ }),

/***/ "yargs/helpers":
/*!********************************!*\
  !*** external "yargs/helpers" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("yargs/helpers");

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
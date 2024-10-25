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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var merge_stream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! merge-stream */ \"merge-stream\");\n/* harmony import */ var merge_stream__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(merge_stream__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var gulp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gulp */ \"gulp\");\n/* harmony import */ var gulp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gulp__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/url */ \"./src/utils/url.ts\");\n/* harmony import */ var _utils_yargs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/yargs */ \"./src/utils/yargs.ts\");\n/* harmony import */ var _utils_files__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/files */ \"./src/utils/files.ts\");\n/* harmony import */ var _utils_gulp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/gulp */ \"./src/utils/gulp.ts\");\n\n\n\n\n\n\n/** 入参 */\nconst positionals = [{\n  required: true,\n  key: \"files\",\n  describe: \"要压缩的图片 ./* ./1.jpg http://www.baidu.com/1.jpg\",\n  type: \"string\",\n  isMultiple: true\n}];\nconst tinyCommand = {\n  command: (0,_utils_yargs__WEBPACK_IMPORTED_MODULE_3__.generateCommand)(positionals),\n  describe: \"使用tinypng压缩图片资源\",\n  builder: yargs => {\n    positionals.forEach(({\n      key,\n      ...config\n    }) => {\n      yargs.positional(key, config);\n    });\n    return yargs;\n  },\n  // 引用抽象函数\n  handler: async argv => {\n    console.log(\"argv\", argv);\n    const files = argv.files || []; // 确保 paths 始终是数组\n    const urlFiles = files.filter(_utils_url__WEBPACK_IMPORTED_MODULE_2__.isUrl).filter(_utils_files__WEBPACK_IMPORTED_MODULE_4__.isImageFile);\n    const localFiles = files.filter(file => !(0,_utils_url__WEBPACK_IMPORTED_MODULE_2__.isUrl)(file)).filter(_utils_files__WEBPACK_IMPORTED_MODULE_4__.isImageFile);\n    const urlStream = (0,_utils_gulp__WEBPACK_IMPORTED_MODULE_5__.download2gulp)(urlFiles);\n    const localStream = gulp__WEBPACK_IMPORTED_MODULE_1___default().src(localFiles);\n    console.log(\"匹配到的图片文件:\", localStream, urlStream);\n    // 输出到 'output' 目录\n    merge_stream__WEBPACK_IMPORTED_MODULE_0___default()(urlStream, localStream).pipe(gulp__WEBPACK_IMPORTED_MODULE_1___default().dest(\"output\"));\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tinyCommand);\n\n//# sourceURL=webpack://svenz/./src/command/tiny/index.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var yargs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yargs */ \"yargs\");\n/* harmony import */ var yargs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yargs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var yargs_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yargs/helpers */ \"yargs/helpers\");\n/* harmony import */ var yargs_helpers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yargs_helpers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _command_tiny__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./command/tiny */ \"./src/command/tiny/index.ts\");\n//#!/usr/bin/env node\n\n\n\nyargs__WEBPACK_IMPORTED_MODULE_0___default()((0,yargs_helpers__WEBPACK_IMPORTED_MODULE_1__.hideBin)(process.argv)).command(_command_tiny__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).demandCommand(1).parse();\n\n//# sourceURL=webpack://svenz/./src/index.ts?");

/***/ }),

/***/ "./src/utils/files.ts":
/*!****************************!*\
  !*** ./src/utils/files.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isImageFile: () => (/* binding */ isImageFile)\n/* harmony export */ });\nconst imageExtensions = /\\.(jpg|jpeg|png|gif)$/i;\n// 判断文件是否为图片\nconst isImageFile = file => imageExtensions.test(file);\n\n//# sourceURL=webpack://svenz/./src/utils/files.ts?");

/***/ }),

/***/ "./src/utils/gulp.ts":
/*!***************************!*\
  !*** ./src/utils/gulp.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   download2gulp: () => (/* binding */ download2gulp)\n/* harmony export */ });\nconst download = __webpack_require__(/*! gulp-download-stream */ \"gulp-download-stream\");\nconst download2gulp = url => {\n  return download(url);\n};\n\n//# sourceURL=webpack://svenz/./src/utils/gulp.ts?");

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

/***/ "gulp":
/*!***********************!*\
  !*** external "gulp" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("gulp");

/***/ }),

/***/ "gulp-download-stream":
/*!***************************************!*\
  !*** external "gulp-download-stream" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("gulp-download-stream");

/***/ }),

/***/ "merge-stream":
/*!*******************************!*\
  !*** external "merge-stream" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("merge-stream");

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
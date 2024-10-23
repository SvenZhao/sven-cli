"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUrl = void 0;
var isUrl = exports.isUrl = function isUrl(path) {
  var urlPattern = /^(https?:\/\/|ftp:\/\/|file:\/\/|mailto:|data:)/i;
  return urlPattern.test(path);
};
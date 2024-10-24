"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isImageFile = void 0;
var imageExtensions = /\.(jpg|jpeg|png|gif)$/i;
// 判断文件是否为图片
var isImageFile = exports.isImageFile = function isImageFile(file) {
  return imageExtensions.test(file);
};
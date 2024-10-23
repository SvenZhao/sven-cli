"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFilename = void 0;
var _path = require("path");
var getFilename = exports.getFilename = function getFilename(file) {
  var filename = (0, _path.basename)(file.path);
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateCommand = void 0;
var generateCommand = exports.generateCommand = function generateCommand(positionals) {
  return "tiny ".concat(positionals.map(function (pos) {
    return pos.required ? "<".concat(pos.key).concat(pos.isMultiple ? "..." : "", ">") // 必选参数用 <>
    : "[".concat(pos.key).concat(pos.isMultiple ? "..." : "", "]");
  } // 可选参数用 []
  ).join(" "));
};
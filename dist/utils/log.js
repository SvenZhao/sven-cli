"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ansiColors = _interopRequireDefault(require("ansi-colors"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var log = {
  info: function info(string) {
    console.log(string);
  },
  error: function error(string) {
    console.log(_ansiColors["default"].red(string));
  },
  done: function done(string) {
    console.log(_ansiColors["default"].green(string));
  }
};
var _default = exports["default"] = log;
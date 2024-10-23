#!/usr/bin/env node
"use strict";

var _yargs = _interopRequireDefault(require("yargs"));
var _helpers = require("yargs/helpers");
var _tiny = _interopRequireDefault(require("./command/tiny"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
(0, _yargs["default"])((0, _helpers.hideBin)(process.argv)).command(_tiny["default"]).demandCommand(1).parse();
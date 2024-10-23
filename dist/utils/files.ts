"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilename = void 0;
const path_1 = require("path");
const getFilename = (file) => {
    const filename = (0, path_1.basename)(file.path);
};
exports.getFilename = getFilename;

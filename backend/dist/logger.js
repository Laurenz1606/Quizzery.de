"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
var logger_1 = require("@laurenz1606/logger");
//create logger instance
exports.logger = new logger_1.Logger({
    format: process.env.LOGGER_FORMAT,
});

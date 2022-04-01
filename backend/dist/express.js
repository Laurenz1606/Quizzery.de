"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var logger_1 = require("./logger");
//init express app
var app = (0, express_1.default)();
//default configuration
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//the routers here
//listen on the port
app.listen(process.env.PORT, function () {
    return logger_1.logger.log("info", "Express listening on Port ".concat(process.env.PORT, "!"));
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var logger_1 = require("./logger");
//connect to the database
mongoose_1.default.connect("mongodb://".concat(process.env.MONGO_USER, ":").concat(process.env.MONGO_PASSWORD, "@").concat(process.env.MONGO_HOST, "/").concat(process.env.MONGO_DATABASE, "?authSource=admin"), function () {
    logger_1.logger.log("info", "Connected to MongoDB instance!");
});

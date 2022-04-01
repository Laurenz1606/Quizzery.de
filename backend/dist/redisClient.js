"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisClient = void 0;
var ioredis_1 = __importDefault(require("ioredis"));
var logger_1 = require("./logger");
//create the redis client
exports.redisClient = new ioredis_1.default({
    port: Number(process.env.REDIS_PORT),
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_PASSWORD,
});
//listen to the connect event
exports.redisClient.connect(function () {
    logger_1.logger.log("info", "Connected to Redis instance!");
});

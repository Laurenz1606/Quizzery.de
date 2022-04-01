"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
var express_1 = __importDefault(require("@authfunctions/express"));
var logger_1 = require("./logger");
//new auth instance
exports.auth = new express_1.default({
    accessTokenSecret: process.env.JWT_ACCESS_TOKEN_SECRET || "",
    refreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET || "",
    emailValidation: true,
    expiresIn: Number(process.env.JWT_EXPIRESS_IN) || 900,
    passwordValidation: "Y-Y-Y-Y-8",
});
//use the logger
exports.auth.logger(function (level, data) { return logger_1.logger.log(level, data); });
//get the user by their mail
exports.auth.use("getUserByMail", function (_a) {
    var email = _a.email;
    return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_b) {
        return [2 /*return*/];
    }); });
});
//get the user by their username
exports.auth.use("getUserByName", function (_a) {
    var username = _a.username;
    return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_b) {
        return [2 /*return*/];
    }); });
});
//store a token
exports.auth.use("storeUser", function (userdata) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/];
}); }); });
//check if a token exists
exports.auth.use("checkToken", function (_a) {
    var token = _a.token;
    return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_b) {
        return [2 /*return*/];
    }); });
});
//store a token
exports.auth.use("storeToken", function (_a) {
    var token = _a.token;
    return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_b) {
        return [2 /*return*/];
    }); });
});
//delete a token
exports.auth.use("deleteToken", function (_a) {
    var token = _a.token;
    return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_b) {
        return [2 /*return*/];
    }); });
});
//intercept the login
exports.auth.intercept("login", function (userData) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/];
}); }); });
//intercept the register
exports.auth.intercept("register", function (userData) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/];
}); }); });

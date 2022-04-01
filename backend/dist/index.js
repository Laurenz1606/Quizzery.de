"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
//load env vars from .env file (not in production)
if (process.env.NODE_ENV !== "production")
    (0, dotenv_1.config)();
//load modules
require("./mongoose");
require("./express");

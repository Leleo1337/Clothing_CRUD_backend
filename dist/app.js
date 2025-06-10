"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const cloths_1 = __importDefault(require("./routes/cloths"));
(0, dotenv_1.configDotenv)();
const app = (0, express_1.default)();
app.use("/api/v1/cloths", cloths_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map
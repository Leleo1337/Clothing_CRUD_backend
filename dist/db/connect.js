"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
async function connectDB(MONGO_URI) {
    return mongoose_1.default
        .connect(MONGO_URI)
        .then(() => console.log("connected to db"))
        .catch((e) => console.log(e));
}
exports.default = connectDB;
//# sourceMappingURL=connect.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
const app_1 = __importDefault(require("./app"));
const connect_1 = __importDefault(require("./db/connect"));
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;
async function start() {
    try {
        if (!MONGO_URI || !PORT) {
            console.log("Please fill all environment variables");
            (0, process_1.exit)(1);
        }
        await (0, connect_1.default)(MONGO_URI);
        app_1.default.listen(PORT, () => console.log(`app listening on port ${PORT}`));
    }
    catch (error) {
        console.log(error);
    }
}
start();
//# sourceMappingURL=server.js.map
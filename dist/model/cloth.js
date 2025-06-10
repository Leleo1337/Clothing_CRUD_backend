"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const clothSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "Por favor, insira um nome"],
        trim: true,
    },
    quantity: {
        type: Number,
        required: [true, "Por favor, insira uma quantity"],
    },
    price: {
        type: Number,
        required: [true, "Por favor, insira um preço"],
    },
    size: {
        type: String,
        required: [true, "Por favor insira um tamanho ( PP | P  | M | G | GG | XG | XGG | EG | EGG )"],
        enum: ["PP", "P", "M", "G", "GG", "XG", "XGG", "EG", "EGG"],
    },
});
const Cloth = mongoose_1.default.model("cloths", clothSchema);
exports.default = Cloth;
//# sourceMappingURL=cloth.js.map
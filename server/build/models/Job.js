"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const jobSchema = new mongoose_1.default.Schema({
    company: { type: String, required: true },
    role: { type: String, required: true },
    status: {
        type: String,
        enum: ["Applied", "Interview", "Offer", "Rejected"],
        default: "Applied",
    },
    date: { type: Date, required: true },
    link: { type: String, required: true },
}, { timestamps: true });
exports.default = mongoose_1.default.model("Job", jobSchema);

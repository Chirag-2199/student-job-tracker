"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const jobRoutes_1 = __importDefault(require("../routes/jobRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use("/api", jobRoutes_1.default);
app.get('/', (req, res) => {
    res.send('Welcome to the API');
});
// MongoDB connection
mongoose_1.default
    .connect(process.env.MONGO_URI)
    .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
})
    .catch((err) => {
    console.error("MongoDB connection failed:", err);
});

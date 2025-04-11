import express, { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import jobRoutes from "../routes/jobRoutes";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", jobRoutes);
app.get('/', (req, res) => {
    res.send('Welcome to the API');
});


// MongoDB connection
mongoose
    .connect(process.env.MONGO_URI!)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error("MongoDB connection failed:", err);
    });

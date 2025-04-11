"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteJob = exports.updateJob = exports.getJobs = exports.addJob = void 0;
const Job_1 = __importDefault(require("../models/Job"));
// Add Job
const addJob = async (req, res) => {
    try {
        const newJob = new Job_1.default(req.body);
        const savedJob = await newJob.save();
        res.status(201).json(savedJob);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to add job" });
    }
};
exports.addJob = addJob;
// Get All Jobs
const getJobs = async (_req, res) => {
    try {
        const jobs = await Job_1.default.find().sort({ date: -1 });
        res.status(200).json(jobs);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to fetch jobs" });
    }
};
exports.getJobs = getJobs;
// Update Job
const updateJob = async (req, res) => {
    try {
        const updatedJob = await Job_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedJob);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to update job" });
    }
};
exports.updateJob = updateJob;
// Delete Job
const deleteJob = async (req, res) => {
    try {
        await Job_1.default.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Job deleted" });
    }
    catch (err) {
        res.status(500).json({ error: "Failed to delete job" });
    }
};
exports.deleteJob = deleteJob;

import { Request, Response } from "express";
import Job from "../models/Job";

// Add Job
export const addJob = async (req: Request, res: Response) => {
    try {
        const newJob = new Job(req.body);
        const savedJob = await newJob.save();
        res.status(201).json(savedJob);
    } catch (err) {
        res.status(500).json({ error: "Failed to add job" });
    }
};

// Get All Jobs
export const getJobs = async (_req: Request, res: Response) => {
    try {
        const jobs = await Job.find().sort({ date: -1 });
        res.status(200).json(jobs);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch jobs" });
    }
};

// Update Job
export const updateJob = async (req: Request, res: Response) => {
    try {
        const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedJob);
    } catch (err) {
        res.status(500).json({ error: "Failed to update job" });
    }
};

// Delete Job
export const deleteJob = async (req: Request, res: Response) => {
    try {
        await Job.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Job deleted" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete job" });
    }
};

import { Router } from "express";
import {
    addJob,
    getJobs,
    updateJob,
    deleteJob,
} from "../controllers/jobController";

const router: Router = Router();

router.post("/jobs", addJob);
router.get("/jobs", getJobs);
router.put("/jobs/:id", updateJob);
router.delete("/jobs/:id", deleteJob);

export default router;

import express from "express";
import { createComplain } from "../controllers/ComplainController.js";
import { getCount } from "../controllers/MonthlyReportController.js";

const router = express.Router();

router.post("/complain", createComplain); // Create a Complaint
router.get("/monthlyreport", getCount); // Get monthly report data

export default router;

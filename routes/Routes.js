import express from "express";
import { createComplain } from "../controllers/ComplainController.js";
import { getReportCounts  } from "../controllers/MonthlyReportController.js";
import { getNews } from "../controllers/NewsController.js";

const router = express.Router();

router.post("/complain", createComplain); // Create a Complaint
router.get("/monthlyreport", getReportCounts ); // Get monthly report data
router.get("/news", getNews ); // Get news data

export default router;

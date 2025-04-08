import express from "express";
import { createComplain,fetchComplaints } from "../controllers/ComplainController.js";
import { getNews } from "../controllers/EventsController.js";
import { notifyUser, fetchNotifications } from "../controllers/NotificationController.js";
import { getMessageCounts } from "../controllers/DashboardController.js";
import { getMonthlyReport } from "../controllers/MonthlyReportController.js";

const router = express.Router();

router.post("/complain", createComplain);
router.get("/complain", fetchComplaints);
router.get("/news", getNews);
router.get("/message-counts", getMessageCounts);
router.get("/monthly_report", getMonthlyReport);

export default router;

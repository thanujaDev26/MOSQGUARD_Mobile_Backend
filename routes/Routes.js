import express from "express";
import { createComplain } from "../controllers/ComplainController.js";
import { getReportCounts  } from "../controllers/DashboardController.js";
import { getNews } from "../controllers/NewsController.js";
import { notifyUser, fetchNotifications } from "../controllers/NotificationController.js";
import { fetchReportCounts } from "../controllers/MonthlyReportController.js";

const router = express.Router();

router.post("/complain", createComplain); // Create a Complaint
router.get("/monthlyreport", getReportCounts ); // Get monthly report data
router.get("/news", getNews ); // Get news data
router.post("/notification_send", notifyUser); // Send notification
router.get("/notification/:userId", fetchNotifications); // Fetch user notifications
router.get("/reportCounts", fetchReportCounts);

export default router;

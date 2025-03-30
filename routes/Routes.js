import express from "express";
import { createComplain } from "../controllers/ComplainController.js";
import { getReportCounts  } from "../controllers/MonthlyReportController.js";
import { getNews } from "../controllers/NewsController.js";
import { notifyUser, fetchNotifications } from "../controllers/NotificationController.js";

const router = express.Router();

router.post("/complain", createComplain); // Create a Complaint
router.get("/monthlyreport", getReportCounts ); // Get monthly report data
router.get("/news", getNews ); // Get news data
router.post("/notification_send", notifyUser); // Send notification
router.get("/notification/:userId", fetchNotifications); // Fetch user notifications

export default router;

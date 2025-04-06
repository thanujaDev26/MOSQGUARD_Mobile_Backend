import express from "express";
import { createComplain } from "../controllers/ComplainController.js";
import { getReportCounts  } from "../controllers/DashboardController.js";
import { getNews } from "../controllers/NewsController.js";
import { notifyUser, fetchNotifications } from "../controllers/NotificationController.js";
import { fetchReportCounts } from "../controllers/MonthlyReportController.js";
import { pushNotifications } from "../controllers/PushNotificationController.js";

const router = express.Router();

router.post("/complain", createComplain); 
router.get("/monthlyreport", getReportCounts ); 
router.get("/news", getNews ); 
router.post("/notification_send", notifyUser); 
router.get("/notification/:userId", fetchNotifications); 
router.get("/reportCounts", fetchReportCounts);
router.get("/notifications", pushNotifications)

export default router;

import { sendNotification, getUserNotifications } from "../services/NotificationService.js";

export async function notifyUser(req, res) {
  try {
    const { userId, message, type } = req.body;
    const notification = await sendNotification(userId, message, type);
    res.status(201).json({ success: true, notification });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function fetchNotifications(req, res) {
  try {
    const { userId } = req.params;
    const notifications = await getUserNotifications(userId);
    res.status(200).json({ success: true, notifications });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

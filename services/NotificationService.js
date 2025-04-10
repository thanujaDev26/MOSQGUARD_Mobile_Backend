import Notification from "../models/Notifications.js";
import admin from "../config/firebase.js"; 

export async function sendNotification(userId, message, type) {
  try {
    const notification = await Notification.create({ user_id: userId, message, type });
    return notification;
  } catch (error) {
    console.error("Error sending notification:", error);
    throw new Error("Failed to send notification");
  }
}

export async function getUserNotifications(userId) {
  try {
    return await Notification.findAll({ where: { user_id: userId }, order: [["createdAt", "DESC"]] });
  } catch (error) {
    console.error("Error fetching notifications:", error);
    throw new Error("Failed to fetch notifications");
  }
}

export async function sendPushNotification(userFcmToken, title, body) {
    const message = {
      token: userFcmToken,
      notification: { title, body },
    };
  
    try {
      await admin.messaging().send(message);
      console.log("Push notification sent successfully!");
    } catch (error) {
      console.error("Failed to send push notification:", error);
    }
  }
import PushNotification from '../models/PushNotification.js';

export async function pushNotifications(req, res) {
  try {
    const notifications = await PushNotification.findAll();
    res.status(200).json({ success: true, notifications });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


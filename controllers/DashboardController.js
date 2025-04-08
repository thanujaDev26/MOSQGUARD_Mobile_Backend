import Message from "../models/Dashboard.js";
import { Op } from "sequelize";

/**
 * Get total message count and past 24-hour message count.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const getMessageCounts = async (req, res) => {
  try {
    // Get total count of all messages
    const totalCount = await Message.count();

    // Calculate 24 hours ago
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

    // Get count of messages created in the past 24 hours
    const past24HourCount = await Message.count({
      where: {
        createdAt: {
          [Op.gte]: oneDayAgo,
        },
      },
    });

    // Respond with the counts
    res.status(200).json({
      total_count: totalCount,
      past_24_hour_count: past24HourCount,
    });
  } catch (error) {
    console.error("❌ Error fetching message counts:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

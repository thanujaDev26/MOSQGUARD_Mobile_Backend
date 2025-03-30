import MonthlyReportService from "../services/MonthlyReportService.js";

/**
 * Controller to get total and past 24-hour report counts.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
export const getReportCounts = async (req, res) => {
    try {
        const totalCount = await MonthlyReportService.fetchTotalCount();
        const past24HourCount = await MonthlyReportService.fetchPast24HourCount();

        res.status(200).json({ count: totalCount, past_24_count: past24HourCount });
    } catch (error) {
        console.error("❌ Error fetching report counts:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

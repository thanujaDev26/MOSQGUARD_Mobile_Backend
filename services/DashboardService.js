import MonthlyReport from "../models/Dashboard.js";

/**
 * MonthlyReportService - Handles business logic for reports.
 */
export default class DashboardService {
    /**
     * Fetch the total report count.
     * @returns {Promise<number>}
     */
    static async fetchTotalCount() {
        try {
            const count = await MonthlyReport.count();
            return count + 50; // Adjust as per requirement
        } catch (error) {
            console.error("❌ Error fetching total report count:", error);
            return 0;
        }
    }

    /**
     * Fetch the past 24-hour report count.
     * @returns {Promise<number>}
     */
    static async fetchPast24HourCount() {
        try {
            const count = await MonthlyReport.count({
                where: {
                    createdAt: {
                        [Op.gte]: new Date(new Date() - 24 * 60 * 60 * 1000), // Last 24 hours
                    },
                },
            });
            return count;
        } catch (error) {
            console.error("❌ Error fetching 24-hour report count:", error);
            return 0;
        }
    }
}

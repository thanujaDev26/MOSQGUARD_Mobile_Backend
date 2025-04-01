import { getReportCounts } from "../services/MonthlyReportService.js";

/**
 * Controller for fetching report counts filtered by date and district.
 */
export const fetchReportCounts = async (req, res) => {
    try {
        const { date, district } = req.query;
        
        const counts = await getReportCounts(date, district);
        
        res.status(200).json(counts);
    } catch (error) {
        console.error("❌ Error fetching report counts:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

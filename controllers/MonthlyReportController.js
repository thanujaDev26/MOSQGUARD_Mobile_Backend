import MonthlyReport from "../models/MonthlyReport.js";

export const getCount = async (req, res) => {
    try {
        const count = await MonthlyReport.getCount() + 50;
        const past_24_count = await MonthlyReport.get_24_past_Count();
        res.status(200).json({ count, past_24_count });
    } catch (error) {
        console.error("Error getting complaint count:", error);
        res.status(500).json({ message: error.message });
    }
}
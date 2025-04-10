import { Op } from "sequelize";
import MonthlyReport from "../models/Dashboard.js";
import MonthlyReportNotify from "../models/MonthlyReport.js";

/**
 * Fetch report counts filtered by date and district.
 * @param {string} [date] - Date for filtering (format: YYYY-MM-DD).
 * @param {string} [district] - District name for filtering.
 * @returns {Object} - Filtered report counts.
 */
export async function getReportCounts(date = null, district = null) {
    // Build filter object for queries
    const filters = {};

    if (date) {
        filters.createdAt = {
            [Op.gte]: new Date(date + "T00:00:00"),
            [Op.lt]: new Date(date + "T23:59:59"),
        };
    }

    if (district) {
        filters.district = district; // Ensure the "district" column exists in DB
    }

    // Fetch filtered counts
    const total_cases = await MonthlyReport.count({ where: filters }) + 
                        await MonthlyReportNotify.count({ where: filters });

    const total_investigated = await MonthlyReport.count({ where: filters });
    
    const recoveries = await MonthlyReport.count({ 
        where: { ...filters, outcome: "recovered" } 
    });

    const deaths = await MonthlyReport.count({ 
        where: { ...filters, outcome: "dead" } 
    });

    return { total_cases, total_investigated, recoveries, deaths };
}

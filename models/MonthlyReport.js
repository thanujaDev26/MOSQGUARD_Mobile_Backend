import db from "../config/db.js";

export default class MonthlyReport {
    static async getCount() {
        const query = 'SELECT COUNT(*) as count FROM communicable_disease_report';
        const [result] = await db.query(query);
        return result[0].count;        
    }

    static async get_24_past_Count() {
        const query = 'SELECT COUNT(*) as count FROM communicable_disease_report WHERE createdAt >= NOW() - INTERVAL 24 HOUR';
        const [results] = await db.query(query);
        return results.count;
    }
}

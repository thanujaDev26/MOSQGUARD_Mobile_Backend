import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const MonthlyReportNotify = sequelize.define("MonthlyReportNotify", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    disease_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: "communicable_disease_notification", // Ensure it matches your DB table
    timestamps: true, // If your table does not have updatedAt
});

export default MonthlyReportNotify;

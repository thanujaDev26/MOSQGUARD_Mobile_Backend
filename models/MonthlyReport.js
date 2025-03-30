import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const MonthlyReport = sequelize.define("MonthlyReport", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    disease: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: "communicable_disease_report", // Ensure it matches your DB table
    timestamps: true, // If your table does not have updatedAt
});

export default MonthlyReport;

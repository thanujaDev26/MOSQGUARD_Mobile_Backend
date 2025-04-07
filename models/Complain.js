import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Complain = sequelize.define(
    "Complain",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        place:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        images: {
            type: DataTypes.JSON,
            allowNull: true,
            defaultValue: [],
        },
    },
    {
        timestamps: true,
    }
);

export default Complain;

import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const User = sequelize.define(
    "User",
    {
        id: {
            type: DataTypes.TEXT,
            primaryKey: true,
        },
        fName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lName: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        phoneNumber: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        timestamps: true,
    }
);

export default User;

import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";


//complaints
const Complain = sequelize.define(
    "Complain",
    {
        complaintId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        fName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        NIC: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mobileNumber: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        location: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        images: {
            type: DataTypes.JSON,
            allowNull: true,
            defaultValue: [],
        },
        type:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        complain: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        complaintTime: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        timestamps: true,
    }
);

export default Complain;

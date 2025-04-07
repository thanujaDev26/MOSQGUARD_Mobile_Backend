import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";


//PHI ge events
const Events = sequelize.define("Events", {
    EventId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    venue: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imageUrls: {
        type: DataTypes.JSON,
        allowNull: true,
        defaultValue: [],
    },
}, {
    timestamps: true,
});

export default Events;

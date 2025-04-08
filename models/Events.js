import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";


//PHI ge events
const Events = sequelize.define("events", {
    EventId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: "event_id",
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "title",
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: "message",
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "type",
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "date",
    },
    venue: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "venue",
    },
    imageUrls: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: "image_urls",
    },
}, {
    timestamps: true,
});

export default Events;

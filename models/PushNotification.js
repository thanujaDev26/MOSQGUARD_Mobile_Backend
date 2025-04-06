import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const PushNotification = sequelize.define("Notification", {
  id: {
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
  status: {
    type: DataTypes.ENUM("unread", "read"),
    defaultValue: "unread",
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

export default PushNotification;

import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";


//SNS from firebase
const Notification = sequelize.define("Notification", {
  notificationId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {   //New Dengue Hotspot alert, Issue Resolved, Heavy Rain expected
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("unread", "read"),
    defaultValue: "unread",
  },
}, {
  timestamps: true,
});

export default Notification;

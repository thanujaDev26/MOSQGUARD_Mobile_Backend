import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const News = sequelize.define(
  "News",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    topic: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    publisher: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    Picture: {
        type: DataTypes.STRING,
        allowNull: true,
      },
  },
  {
    timestamps: true, // Automatically creates `createdAt` and `updatedAt`
  }
);

export default News;

import { DataTypes } from "sequelize";
import sequelize from "../config/db.js"; // Import configured Sequelize instance

const Complain = sequelize.define("Complain", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: "complains", // Ensure table name is explicitly set
  timestamps: true, // Enable automatic timestamps (Sequelize adds `createdAt` & `updatedAt` by default)
});

export default Complain;

import { DataTypes } from "sequelize";

await sequelize.sync({ alter: false, force: false });

import sequelize from "../config/db.js";

const Message = sequelize.define("Message", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  status: {
    type: DataTypes.ENUM("SENT", "PENDING", "COMPLETED"),
    allowNull: false,
  },
  moh_officer_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: "mohofficer", 
      key: "id"
    },
  },
  phi_officer_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: "phiofficer", 
      key: "id"
    },
  },
  h544_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: "communicable_disease_notification", 
      key: "id"
    },
  },
  h411_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: "h411", 
      key: "id"
    },
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: "message",
  freezeTableName: true,
  timestamps: false, // Disable Sequelize's auto timestamps
});

export default Message;

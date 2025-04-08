import { DataTypes } from "sequelize";

await sequelize.sync({ alter: false, force: false });

import sequelize from "../config/db.js";

const NoteBook = sequelize.define("NoteBook", {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  house_condition: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  distance: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  isolation: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  remarks: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  subject: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  termination: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  phi_id: {
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
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: "note_book",
  freezeTableName: true,
  timestamps: false, // Disable Sequelize's auto timestamps
});

export default NoteBook;

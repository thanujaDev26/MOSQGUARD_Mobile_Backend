import dotenv from "dotenv"; // Load .env file
import mysql from "mysql2/promise";
import { Sequelize } from "sequelize"; // Import Sequelize

dotenv.config();

// Create Sequelize instance
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSW, {
  host: "localhost",
  dialect: "mysql",
  logging: false, // Set to true if you want to see SQL queries in the console
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("✅ MySQL Connected Successfully!");
  } catch (error) {
    console.error("❌ MySQL Connection Failed:", error);
  }
}

testConnection();
// export default db;

export default sequelize;


import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: "mysql",
  logging: false, 
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


export default sequelize;


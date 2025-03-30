import sequelize from "../config/db.js"; // Import Sequelize instance
import Complain from "../models/Complain.js"; // Import model

async function migrate() {
  try {
    await sequelize.authenticate(); // Ensure the database connection is working
    console.log("✅ Database connection has been established successfully.");

    await sequelize.sync(); // Sync all models (creates tables if they don't exist)
    console.log("✅ Tables have been created or already exist.");
  } catch (error) {
    console.error("❌ Error during migration:", error.message);
  } finally {
    await sequelize.close(); // Ensure the database connection is closed
    console.log("ℹ️ Database connection closed.");
    process.exit(0);
  }
}

migrate();

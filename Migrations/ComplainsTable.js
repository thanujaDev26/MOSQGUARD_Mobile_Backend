import db from "../config/db.js"; // Import the database connection

const createTableQuery = `
CREATE TABLE IF NOT EXISTS complains (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

async function migrate() {
  try {
    const connection = await db.getConnection(); // Get a connection from the pool
    await connection.query(createTableQuery); // Use `query()` instead of `execute()`
    connection.release(); // Release the connection back to the pool
    console.log("✅ Table 'complains' has been created or already exists.");
    process.exit();
  } catch (error) {
    console.error("❌ Error running migration:", error);
    process.exit(1);
  }
}

migrate();

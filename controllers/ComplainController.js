const db = require("../config/db"); // MySQL database connection

// Create a Complaint
exports.createComplain = async (req, res) => {
  try {
    const { name, subject, message } = req.body;

    if (!name || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const createdAt = new Date();

    // MySQL Query
    const sql = "INSERT INTO complains (name, subject, message, created_at) VALUES (?, ?, ?, ?)";
    const values = [name, subject, message, createdAt];

    db.execute(sql, values, (err, result) => {
      if (err) {
        console.error("Error inserting complaint:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      res.status(201).json({
        message: "Complaint submitted successfully",
        id: result.insertId, // MySQL provides `insertId`
        complain: { name, subject, message, createdAt },
      });
    });
  } catch (error) {
    console.error("Error creating complaint:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

import Complain from "../models/Complain.js"; // Ensure the file uses ES modules

// Create a Complaint
export const createComplain = async (req, res) => {
  try {
    const { name, subject, message } = req.body;

    if (!name || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const id = await Complain.create(name, subject, message);
    res.status(201).json({
      message: "Complaint submitted successfully",
      id: id,
    });

  } catch (error) {
    console.error("Error creating complaint:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

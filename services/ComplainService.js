import Complain from "../models/Complain.js";

// Function to create a complaint
export async function createComplaint(name, subject, message) {
  try {
    const complaint = await Complain.create({ name, subject, message });
    return complaint.id; // Sequelize automatically generates an ID
  } catch (error) {
    console.error("Error creating complaint:", error);
    throw new Error("Database Insertion Failed");
  }
}

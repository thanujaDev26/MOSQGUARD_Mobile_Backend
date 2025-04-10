import Complain from "../models/Complain.js";


export async function createComplaint(name, subject, message) {
  try {
    const complaint = await Complain.create({ name, subject, message });
    return complaint.id; 
  } catch (error) {
    console.error("Error creating complaint:", error);
    throw new Error("Database Insertion Failed");
  }
}

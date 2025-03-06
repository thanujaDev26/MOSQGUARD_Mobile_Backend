const db = require("../config/firebase"); 
const Complain = require("../models/Complain");

// Create a Complaint
exports.createComplain = async (req, res) => {
  try {
    const { name, subject, message } = req.body;

    if (!name || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newComplain = new Complain(name, subject, message);
    const docRef = await db.collection("complains").add({ ...newComplain });

    res.status(201).json({ 
      message: "Complaint submitted successfully", 
      id: docRef.id, 
      complain: newComplain 
    });

  } catch (error) {
    console.error("Error creating complaint:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all Complaints
// exports.getComplains = async (req, res) => {
//   try {
//     const complainsRef = db.collection("complains");
//     const snapshot = await complainsRef.get();

//     if (snapshot.empty) {
//       return res.status(404).json({ message: "No complaints found" });
//     }

//     const complains = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

//     res.status(200).json(complains);

//   } catch (error) {
//     console.error("Error fetching complaints:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

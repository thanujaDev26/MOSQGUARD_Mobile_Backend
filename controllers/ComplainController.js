import Complain  from "../models/Complain.js";

export const createComplain = async (req, res) => {
  try {
    const fullComplaint = req.body;
    if (!fullComplaint.name || !fullComplaint.title || !fullComplaint.message) {
      return res.status(400).json({ error: "Complaint name , Title and message are required"});
    }
    let response = await Complain.create(fullComplaint);
    res.status(201).json({
      message: "Complaint submitted successfully",
      data : {
        response
      }
    });
  } catch (error) {
    console.error("Error creating complaint:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const fetchComplaints = async (req, res) => {
  try{
    const complaints = await Complain.findAll({
      order: [['createdAt', 'DESC']],
    });
    res.status(200).json({
      status : "Success",
      data : {
        complaints
      }
    });
  }
  catch(error){
    console.error("Error fetching complaints:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}


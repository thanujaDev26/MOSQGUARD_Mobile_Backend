import Complain  from "../models/Complain.js";


//Complaints by public community
export const createComplain = async (req, res) => {
  try {
    const fullComplaint = req.body;
    if (!fullComplaint.type || !fullComplaint.complain || !fullComplaint.mobileNumber) {
      return res.status(400).json({ error: "Type, Complain and Mobile Number are required"});
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


//status eka widiyta ynne meka
export const fetchComplaints = async (req, res) => {
  try{
    const complaints = await Complain.findAll({
      limit: 50,
      offset: 0,
      order: [['createdAt', 'DESC']],
      attributes: { exclude: ['images'] }
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


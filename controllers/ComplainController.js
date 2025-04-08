import { uploadToS3 } from "../config/s3.js";
import Complain from "../models/Complain.js";

// Complaints by public community
export const createComplain = async (req, res) => {
  try {
    const { images, ...complaintData } = req.body;
    if (images && images.length > 0) {
      const uploadedImages = [];

      for (let i = 0; i < images.length; i++) {
        const imageBuffer = Buffer.from(images[i], 'base64');
        const fileName = `complaint_image_${Date.now()}_${i}.jpg`;
        const imageUrl = await uploadToS3(imageBuffer, fileName);
        uploadedImages.push(imageUrl);
      }

      complaintData.images = uploadedImages;
    }

    const response = await Complain.create(complaintData);
    res.status(201).json({
      message: "Complaint submitted successfully",
      data: response,
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


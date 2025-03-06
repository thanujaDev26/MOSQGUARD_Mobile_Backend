const express = require("express");
const { createComplain, getComplains } = require("../controllers/ComplainController");

const router = express.Router();

router.post("/complain", createComplain); // Create a Complaint
// router.get("/complains", getComplains); // Get all Complaints

module.exports = router;

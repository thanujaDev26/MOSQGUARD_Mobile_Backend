const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./config/db");
const ComplainRoute = require("./routes/ComplainRoute");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", ComplainRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

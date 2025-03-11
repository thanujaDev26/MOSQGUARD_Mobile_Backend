import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/db.js"; // Ensure db.js also uses ES modules
import ComplainRoute from "./routes/Routes.js"; // Add .js to file imports

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", ComplainRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ComplainRoute from "./routes/Routes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", ComplainRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

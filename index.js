import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ComplainRoute from "./routes/Routes.js";
import sequelize from "./config/db.js"; 

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", ComplainRoute);


sequelize.sync({ alter: true }) 
  .then(() => console.log("Tables synchronized"))
  .catch((error) => console.error("Error synchronizing tables:", error));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

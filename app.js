import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";


dotenv.config();
const PORT = process.env.PORT;


const app = express();
app.use(express.json());
connectDB();

app.use("/api/users", userRoutes);

app.listen(5000, () => console.log(`Server running on port ${PORT}`));

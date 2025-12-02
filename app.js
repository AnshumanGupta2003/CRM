import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import connectDB from "./config/db.js";


dotenv.config();
const PORT = process.env.PORT;


const app = express();
app.use(express.json());
connectDB();

app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);

app.listen(5000, () => console.log(`Server running on port ${PORT}`));

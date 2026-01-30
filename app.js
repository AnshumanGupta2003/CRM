import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

import connectDB from "./config/db.js";
import { globalErrorHandler } from "./middleware/globalError.js";
import { verifyMiddlewareToken } from "./utils/jwt.js";
import authRoutes from "./routes/authRoutes.js";
import baseValidator from "./middleware/baseValidator.js";
import leadRoutes from "./routes/leadRoutes.js";

dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json());
connectDB();
app.use(baseValidator);

app.use("/api/users", userRoutes);
app.use("/api/admin",  verifyMiddlewareToken, adminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/leads", leadRoutes);


app.use(globalErrorHandler);

app.listen(5000, () => console.log(`Server running on port ${PORT}`));

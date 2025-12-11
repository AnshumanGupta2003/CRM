import adminSchema from "../models/adminModels.js";
import { generateToken } from "../utils/jwt.js";
import { successResponse, errorResponse } from "../utils/responseHandlers.js";
import bcrypt from "bcrypt";

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await adminSchema.findOne({ email });
    if (!admin) return errorResponse(res, 404, "Admin not found");

    const match = await bcrypt.compare(password, admin.password);
    if (!match) return errorResponse(res, 401, "Invalid password");

    const token = generateToken({ id: admin._id, email: admin.email });

    return successResponse(res, 200, "Login successful", { token });
  } catch (err) {
    return errorResponse(res, 500, "Login failed", { error: err.message });
  }
};

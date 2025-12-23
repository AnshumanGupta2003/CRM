import { generateToken } from "../../utils/jwt.js";
import adminSchema from "../../models/adminModels.js";
import {
  errorResponse,
  successResponse,
} from "../../utils/responseHandlers.js";

const adminLogin = async (req, res) => {
  try {
    // console.log("hi", req)
    const { username, password } = req.body;

    const admin = await adminSchema.findOne({ username, password });
    if (!admin) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = generateToken({ username: username, password: password, id: admin._id });

    if (!token) {
      return errorResponse(res, 500, "Token generation failed");
    }
    return successResponse(res, 200, "Login successful", { token });
  } catch (error) {
    return successResponse(res, 500, "Login failed", { error: error.message });
  }
};

export default adminLogin;
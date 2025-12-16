import adminSchema from "../../models/adminModels.js";
import {
  errorResponse,
  successResponse,
} from "../../utils/responseHandlers.js";

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Fetching user with ID:", req.admin);

    const user = await adminSchema.findById(id);

    if (!user) {
      return errorResponse(res, 404, "User not found");
    }

    return successResponse(res, 200, "User retrieved successfully", {
      user,
    });
  } catch (error) {
    console.error("Error fetching user:", error);

    return errorResponse(res, 500, "Failed to fetch user", {
      error: error.message,
    });
  }
};

export default getUserById;

import adminSchema from "../../models/adminModels.js";
import {
  errorResponse,
  successResponse,
} from "../../utils/responseHandlers.js";

const getAllAdmins = async (req, res) => {
  try {
    const admins = await adminSchema.find();

    if (!admins || admins.length === 0) {
      return successResponse(res, 200, "No admins found", { admins: [] });
    }

    return successResponse(res, 200, "Admins retrieved successfully", {
      admins,
    });
  } catch (error) {
    console.error("Error fetching admins:", error);
    return errorResponse(res, 500, "Failed to fetch admins", {
      error: error.message,
    });
  }
};

export default getAllAdmins;

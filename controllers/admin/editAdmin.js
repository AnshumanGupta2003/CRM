import {
  successResponse,
  errorResponse,
} from "../../utils/responseHandlers.js";
import adminSchema from "../../models/adminModels.js";

const editAdmin = async (req, res) => {
  try {
    const adminId = req.params.id;
    const updateData = req.body;
    const options = { new: true }; // To return the updated document
    // console.log(adminId, updateData);
    const updatedAdmin = await adminSchema.findByIdAndUpdate(
      adminId,
      updateData,
      options
    );
    // console.log(updatedAdmin);
    if (!updatedAdmin) {
      return errorResponse(res, 404, "Admin not found");
    }
    return successResponse(res, 200, "Admin details updated successfully", {
      admin: updatedAdmin,
    });
  } catch (error) {
    console.error("Error updating admin details:", error);
    return errorResponse(res, 500, "Failed to update admin details", {
      error: error.message,
    });
  }
};

export default editAdmin;

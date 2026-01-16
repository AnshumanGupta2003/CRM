import adminSchema from "../../models/adminModels.js";
import {
  errorResponse,
  successResponse,
} from "../../utils/responseHandlers.js";

const deleteAdmin = async (req, res, next) => {
  try {
    const { id } = req.params;  

    if (!id) {
      return errorResponse(res, 400, "Admin ID is required");
    }

 
    const admin = await adminSchema.findById(id);
    if (!admin) {
      return errorResponse(res, 404, "Admin not found");
    }

     
    await adminSchema.findByIdAndDelete(id);

    return successResponse(res, 200, "Admin deleted successfully", {
      deletedId: id,
    });

  } catch (error) {
    console.error("Error deleting admin:", error);
    next(error);
  }
};

export default deleteAdmin;

import Company from "../../../models/companyModel.js";
import {
  errorResponse,
  successResponse,
} from "../../../utils/responseHandlers.js";

const registerCompany = async (req, res) => {
  try {
    const {
      name,
      address,
      email,
      phone,
      city,
      state,
      country,
      pinCode,
      numberOfEmployees,
      registerDate,
      website,
      industry,
      size,
    } = req.body;
    
    const resut = await Company.create({
      name,
      address,
      email,
      phone,
      city,
      state,
      country,
      pinCode,
      numberOfEmployees,
      registerDate,
      website,
      industry,
      size,
      owner: req.admin.id,
    });
    return successResponse(res, 201, "Company registered successfully", {
      company: resut,
    });
  } catch (error) {
    errorResponse(res, 500, "Internal Server Error", { error: error.message });
  }
};
export default registerCompany;

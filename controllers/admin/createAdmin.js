import adminSchema from "../../models/adminModels.js";
import { errorResponse, successResponse } from "../../utils/responseHandlers.js";

const createUser = async (req, res) => {
  // Logic to create a new user
  try {
    const { name, email, password, phoneNumber, username } = req.body;
    // console.log("Creating user with data:", req.body);
    const result = await adminSchema.create({
      name,
      email,
      password,
      phoneNumber,
      username,
      profileName: name,
    });

    return successResponse(res, 201, "User created successfully", { user: result });

  } catch (error) {
    console.error("Error creating user:", error);
    return errorResponse(res, 500, "Failed to create user", { error: error.message });
  }
};

export default createUser;

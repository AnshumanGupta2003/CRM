import adminSchema from "../../models/adminModels.js";
import {
  errorResponse,
  successResponse,
} from "../../utils/responseHandlers.js";

const createUser = async (req, res) => {
  // Logic to create a new user
  try {
    const {
      profileName,
      email,
      password,
      phoneNumber,
      username,
      photo = "https://imgs.search.brave.com/pqPGj2p1kyzXStIgsdVO7V7PTYLBOJznLXp3v0XR2w0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI4/NTI2MzgwNi9waG90/by9wZXJzb25hbC1w/ZXJzcGVjdGl2ZS1v/Zi1wb2xhcm9pZC1w/aWN0dXJlLW92ZXJs/YXBwaW5nLWEtY291/bnRyeS1yb2FkLWlu/LXR1c2NhbnkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVpl/dF9DSWJWOHl1cWJN/N1JQTHFmeTB1ZVRO/T3hiaVY0Tkp1ckdN/Q0tnZ1U9",
      status = "active",
    } = req.body;

    const result = await adminSchema.create({
      profileName,
      email,
      password,
      phoneNumber,
      username,
      photo,
      status,
    });

    return successResponse(res, 201, "User created successfully", {
      user: result,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return errorResponse(res, 500, "Failed to create user", {
      error: error.message,
    });
  }
};

export default createUser;

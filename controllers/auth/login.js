import { generateToken } from "../../utils/jwt.js";
import adminSchema from "../../models/adminModels.js";
import User from "../../models/usersModel.js";
import {
  errorResponse,
  successResponse,
} from "../../utils/responseHandlers.js";


const adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    let person = null;
    const [admin, user] = await Promise.all([
      adminSchema.findOne({ username, password }),
      User.findOne({ username, password }),
    ]); 
    if (admin) {
      person = admin;
    } else if (user) {
      person = user;
    }

    // let person = await adminSchema.findOne({ username, password });


    // if (!person) {
    //   person = await User.findOne({
    //     username,
    //     password,
    //   });
    // }

    if (!person) {
      return errorResponse(res, 401, "Invalid username or Password");
    }

    const token = generateToken({
      username: username,
      password: password,
      id: person._id,
      role: person.role,
    });

    if (!token) {
      return errorResponse(res, 500, "Token generation failed");
    }

    return successResponse(res, 200, "Login successful", { token });
  } catch (error) {
    return successResponse(res, 500, "Login failed", { error: error.message });
  }
};

export default adminLogin;

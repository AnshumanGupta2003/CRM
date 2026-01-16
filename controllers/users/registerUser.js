import User from "../../models/usersModel.js";
import {
  errorResponse,
  successResponse,
} from "../../utils/responseHandlers.js";

const registerUser = async (req, res) => {
  try {
    const { profileName,
      username,
      email,
      password,
      phoneNumber,
    status,
      role,} = req.body;  

      const result = await User.create({
            profileName,
             username,
      email,
      password,
      phoneNumber,
      status,
      role,
          });

           return successResponse(res, 201, "User created successfully", {
                user: result,
              });
       }
       catch(error){
         console.error("Error creating user:", error);
    next(error);
       }
};
export default registerUser;
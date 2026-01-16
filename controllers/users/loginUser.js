import User from "../../models/usersModel.js";
import {
  errorResponse,
  successResponse,
} from "../../utils/responseHandlers.js";
import { generateToken } from "../../utils/jwt.js";
const loginUser = async(req , res)=> {
    try{
        const {username , password } = req.body;
        const user =  await User.findOne({
            username, password
        });
        if(!user){
            return errorResponse(res, 401 , "Invalid username or Password");
        }
        const token = generateToken({ username: username, password: password, id: user._id });
          if (!token) {
              return errorResponse(res, 500, "Token generation failed");
            }
            return successResponse(res, 200, "Login successful", { token });
    }catch(error){
        return errorResponse(res, 500, "Login failed", { error: error.message });
    }
}
export default loginUser;

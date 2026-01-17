import User from "../../models/usersModel.js";

const getUserById = async (req , res )=>{
    try{
        const {id} = req.params;
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({ message: "User not found" });

        }
        res.status(200).json({
            success: true, 
            user,
        });
    }catch(error){
             res.status(500).json({
      message: "Error fetching user",
      error: error.message,
    });
    }
}
export default getUserById;
import Admin from "../../models/adminModels.js";




const createUser = async(req, res) => {
  // Logic to create a new user
  const { name, email, password } = req.body;

  const result = await Admin.create({ name, email, password }); 
  console.log(result);
  return result;
  res.send("User created");
}

export default createUser;
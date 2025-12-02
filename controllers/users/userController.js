import adminModels from "../../models/adminModels";



const createUser = async(req, res) => {
  // Logic to create a new user
  const { name, email, password } = req.body;

  const result = await adminModels.create({ name, email, password }); 
  console.log(result);
  return result;
  res.send("User created");
}

export default createUser;
import adminSchema from "../../models/adminModels.js";

const createUser = async (req, res) => {
  // Logic to create a new user
  try {
    const { name, email, password, phoneNumber, username } = req.body;
    console.log("Creating user with data:", req.body);
    const result = await adminSchema.create({
      name,
      email,
      password,
      phoneNumber,
      username,
      profileName: name,
    });

    res(result);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Internal Server Error");
  }
};

export default createUser;

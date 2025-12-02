import express from "express";
import 
  createUser
//   getAllUsers,
//   getUserById,
//   updateUser,
//   deleteUser,
//   loginUser,
//   getUsersByCompany
 from "../controllers/users/userController.js";

const router = express.Router();

// Create new user
router.post("/create", createUser);

// // Login user
// router.post("/login", loginUser);

// // Get all users
// router.get("/", getAllUsers);

// // Get user by ID
// router.get("/:id", getUserById);

// // Update user
// router.put("/:id", updateUser);

// // Delete user
// router.delete("/:id", deleteUser);

// // Get all users under a company
// router.get("/company/:companyId", getUsersByCompany);

export default router;

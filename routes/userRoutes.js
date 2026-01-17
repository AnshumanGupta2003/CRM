import express from "express";
import registerUser from "../controllers/users/registerUser.js";
import loginUser from "../controllers/users/loginUser.js";
 import getUsersById from "../controllers/users/getUserById.js";

const router = express.Router();

// Create new user
 router.post("/create", registerUser);

// // Login user
  router.post("/login", loginUser);

// // Get all users
// router.get("/", getAllUsers);

// // Get user by ID
 router.get("/:id", getUsersById);

// // Update user
// router.put("/:id", updateUser);

// // Delete user
// router.delete("/:id", deleteUser);

// // Get all users under a company
// router.get("/company/:companyId", getUsersByCompany);

export default router;

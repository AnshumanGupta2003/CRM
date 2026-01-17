import express from "express";
import getUsersById from "../controllers/users/getUserById.js";
import registerUser from "../controllers/users/registerUser.js";
import getAllUsers from "../controllers/users/getAllUsers.js";


const router = express.Router();

// Create new user
router.post("/create", registerUser);


// Get all users
router.get("/getAll", getAllUsers);

// Get user by ID
router.get("/:id", getUsersById);

// Update user
// router.put("/:id", updateUser);

// Delete user
// router.delete("/:id", deleteUser);

// Get all users under a company
// router.get("/company/:companyId", getUsersByCompany);

export default router;

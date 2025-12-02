import express from "express";
import 
  createAdmin
//   getAllUsers,
//   getUserById,
//   updateUser,
//   deleteUser,
//   loginUser,
//   getUsersByCompany
 from "../controllers/admin/createAdmin.js";

const router = express.Router();

// Create new user
router.post("/create", createAdmin);



export default router;

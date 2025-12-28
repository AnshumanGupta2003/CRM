import express from "express";
import adminSignup from "../controllers/auth/adminSignup.js";
import editAdmin from "../controllers/admin/editAdmin.js";
import adminValidator from "../validators/adminValidator.js";
import deleteAdmin from "../controllers/admin/deleteAdmin.js";
import getAdminById from "../controllers/admin/getAdminById.js";
import getAllAdmins from "../controllers/admin/getAllAdmin.js";
import loginValidator from "../validators/loginValidator.js";
import adminLogin from "../controllers/auth/adminLogin.js";
import {authMiddleware} from "../middleware/auth.js";
import { verifyMiddlewareToken } from "../utils/jwt.js";


const router = express.Router();

 

// Edit admin details
router.patch("/edit/:id", editAdmin);

// Delete an admin
router.delete("/delete/:id", deleteAdmin);

// Get admin by ID
router.get("/getAdminById/:id", getAdminById);

// Get all admins
router.get("/getalladmin", [authMiddleware], getAllAdmins);




export default router;

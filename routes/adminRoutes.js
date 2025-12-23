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

// Create new user
 

// Edit admin details
router.patch("/edit/:id", editAdmin);
router.delete("/delete/:id", deleteAdmin);
router.get("/getAdminById/:id", getAdminById);
router.get("/login", loginValidator, adminLogin)
//router.get("/getAllAdmin/", getAllAdmins);
router.get("/getalladmin", authMiddleware, getAllAdmins);




export default router;

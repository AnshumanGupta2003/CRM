import express from "express";
import createAdmin from "../controllers/admin/createAdmin.js";
import editAdmin from "../controllers/admin/editAdmin.js";
import adminValidator from "../validators/adminValidator.js";
import deleteAdmin from "../controllers/admin/deleteAdmin.js";
import getUserById from "../controllers/admin/getUserByid.js";
import getAllAdmins from "../controllers/admin/getAllAdmin.js";
import {authMiddleware} from "../middleware/auth.js";
    

const router = express.Router();

// Create new user
router.post("/create", adminValidator ,createAdmin);

// Edit admin details
router.patch("/edit/:id", editAdmin);
router.delete("/delete/:id", deleteAdmin);
router.get("/getUserById/:id", getUserById);
 
//router.get("/getAllAdmin/", getAllAdmins);
router.get("/getalladmin", authMiddleware, getAllAdmins);




export default router;

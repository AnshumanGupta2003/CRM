import express from "express";
import deleteAdmin from "../controllers/admin/deleteAdmin.js";
import editAdmin from "../controllers/admin/editAdmin.js";
import getAdminById from "../controllers/admin/getAdminById.js";
import getAllAdmins from "../controllers/admin/getAllAdmin.js";
import { authMiddleware } from "../middleware/auth.js";
import registerCompany from "../controllers/admin/company/registerCompany.js";


const router = express.Router();

 

// Edit admin details
router.patch("/edit/:id", editAdmin);

// Delete an admin
router.delete("/delete/:id", deleteAdmin);

// Get admin by ID
router.get("/getAdminById/:id", getAdminById);

// Get all admins
router.get("/getalladmin", [authMiddleware], getAllAdmins);
 router.post("/registerCompany", registerCompany)




export default router;

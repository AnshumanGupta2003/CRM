import express from "express";
import createAdmin from "../controllers/admin/createAdmin.js";
import editAdmin from "../controllers/admin/editAdmin.js";
import adminValidator from "../validators/adminValidator.js";

const router = express.Router();

// Create new user
router.post("/create", adminValidator ,createAdmin);

// Edit admin details
router.patch("/edit/:id", editAdmin);



export default router;

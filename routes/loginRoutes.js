import express from "express";
import adminLogin from "../controllers/admin/adminLogin.js";
import loginValidator from "../validators/loginValidator.js";


const router = express.Router();



router.get("/admin", loginValidator, adminLogin)
// router.get("/user", loginValidator, userLogin)



export default router;

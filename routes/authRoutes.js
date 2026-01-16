import express from "express"; 
import loginValidator from "../validators/loginValidator.js";
import adminSignup from "../controllers/auth/adminSignup.js";
import adminValidator from "../validators/adminValidator.js";
import adminLogin from "../controllers/auth/adminLogin.js";


const router = express.Router();



router.get("/adminLogin", loginValidator, adminLogin)
// router.get("/user", loginValidator, userLogin)

router.post("/adminSignup", adminValidator ,adminSignup);

export default router;

import express from "express"; 
import loginValidator from "../validators/loginValidator.js";
import adminSignup from "../controllers/auth/adminSignup.js";
import adminValidator from "../validators/adminValidator.js";
import login from "../controllers/auth/login.js";


const router = express.Router();



router.get("/login", loginValidator, login)
// router.get("/user", loginValidator, userLogin)

router.post("/adminSignup", adminValidator ,adminSignup);

export default router;

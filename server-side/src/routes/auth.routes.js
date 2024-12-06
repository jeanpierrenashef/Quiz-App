import { Router } from "express";
import { login, register, updateProfile } from "../controllers/auth.controller.js" 
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = new Router();

router.post("/register",register)
router.post("/login",login)
router.post("/update", authMiddleware, updateProfile)


export default router;
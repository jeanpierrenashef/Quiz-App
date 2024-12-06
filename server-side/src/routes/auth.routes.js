import { Router } from "express";
import {
  login,
  register,
  updateProfile,
} from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = new Router();

router.post("/login", login);
router.post("/register", register);
router.put("/", authMiddleware, updateProfile);

export default router;

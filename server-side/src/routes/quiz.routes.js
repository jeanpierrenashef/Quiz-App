import { Router } from "express";
import { createQuiz } from "../controllers/quiz.controller.js";

const router = new Router();

router.post("/create_quiz", createQuiz)

export default router;
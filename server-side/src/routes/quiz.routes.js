import { Router } from "express";
import { createQuiz, getQuizes } from "../controllers/quiz.controller.js";

const router = new Router();

router.post("/create_quiz", createQuiz)
router.get("/:id?", getQuizes);

export default router;
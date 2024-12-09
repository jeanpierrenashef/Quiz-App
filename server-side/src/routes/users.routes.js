    import { Router } from "express";
    import { getUsers, createUsers, updateScore } from "../controllers/users.controller.js";
    import { authMiddleware } from "../middleware/auth.middleware.js";

    const router = new Router();

    router.get("/:name?",authMiddleware, getUsers);
    router.post("/", createUsers)
    router.post("/update_score", updateScore)

    export default router;
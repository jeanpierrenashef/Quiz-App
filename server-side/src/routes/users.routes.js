    import { Router } from "express";
    import { getUsers, createUsers } from "../controllers/users.controller.js";
    import { authMiddleware } from "../middleware/auth.middleware.js";

    const router = new Router();

    router.get("/:name?",authMiddleware, getUsers);
    router.post("/", createUsers)

    export default router;
import express from "express";
import userRoutes from "./routes/users.routes.js";
import authRoutes from "./routes/auth.routes.js";
import connectToDatabase from "./db/connection.js";
import { authMiddleware } from "./middlewares/auth.middleware.js";

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);

app.listen(8080, async () => {
  console.log("Server running on port 8080");

  connectToDatabase();
});

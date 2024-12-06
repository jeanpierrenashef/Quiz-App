import express from "express";
import {init} from "./config/init.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/users.routes.js";
import connectToDatabase from "./db/connection.js";


const app = express();
init(app)

app.use("/auth", authRoutes)
app.use("/users", userRoutes)

app.listen(8080, async ()=>{
    console.log("server is running on port 8080");
    connectToDatabase();
    
})
import cors from "cors";
import dotenv from "dotenv";
import express from "express";


export const init = (app) => {
    dotenv.config();

    app.use(express.json());

    app.use(
        cors({
            origin:"http://localhost:3000",
        })
);
}
export const registerRoutes = (app, ...routers) => {
    routers.forEach((r)=>{
        app.use(r);
    })
} //twaffir app.use everytime

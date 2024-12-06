import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const authMiddleware = async(req,res,next)=>{
    const authHeader = req.headers.authorization;

    if(!authHeader){
        res.status(500).send({
            message : "invalid"
        });
    }

    const splitted = authHeader.split(" ");

    if (!splitted.lendth == 2 || splitted[0] !== "Bearer" ){
        res.status(500).send({
            message : "something is missing"
        });
    }
    const token = splitted[1];

    try{
        const payload = await jwt.verify(token, "secret");

        const id = payload.userId;

        const user = await User.findById(id);

        req.user = user //here the above 3 lines of code help to avoid passing the id in the header when updating profile in auth controller

        next();
    }catch(error){
        res.status(500).send({
            message : "Unathorized"
        });
    }
}

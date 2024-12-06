import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
    const {username , password} = req.body;

    try{
        const user = await User.findOne({
            username
        })
        if (!user) {
            return res.status(404).send({
                message: "Invalid username",
            });
        }
        const check = await bcrypt.compare(password, user.password);

        if(!check){
            return res.status(404).send({
                message : "wrong credentials"
            });
        }

        const token = await jwt.sign({userId:user.id},"secret");
        return res.status(200).send({user, token})


    }catch(error){
        return res.status(500).send({
            message : "wrong",
        });
    }
}


export const register = async (req, res) => {
    try{
        const {username, password, age} = req.body;

        if(!username || !password){
            return res.status(500).send({
                message : "All fields are required"
            });
        }

        const hashed = await bcrypt.hash(password,10)

        const user = await User.create({
            username,
            password:hashed,
            age

        })
        return res.json({
            user:created,
        })
    }catch(error){
        console.log(error)
    }
}

export const updateProfile = async (req, res) => {
    const id = req.user.id;

    try{
        if (!id){
        return res.status(500).send({
            message : "no id"
        });
    }

    const {username , password} = req.body;
    const updated = await User.findByIdAndUpdate(
        id,
        {
            username,
        },{
            new:true
        }
    );

    if (!updated){
        return res.status(500).send({
            message : "not updated"
        });
    }
    return res.status(200).send(updated)

    }catch(error){

        console.log(error);
        
        return res.status(500).send({
            message : "soething wrong"
        });
    }
}
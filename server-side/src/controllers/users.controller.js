import { User } from "../models/user.model.js";

export const getUsers = async (req, res) => {
    const name = req.params.name;

    if (name){
        const user = await User.findOne({ username: name });

        if(!user){
            return res.status(404).send({
                message : "Not found"
            });
        }
        return res.json(user);
    }
    
    const users = await User.find({});
    return res.json(users);
    
}

export const createUsers = async (req, res) => {
    const data = req.body;

    const created = await User.create({
        ...data,

    })
    return res.json({
        user:created,
    })
}


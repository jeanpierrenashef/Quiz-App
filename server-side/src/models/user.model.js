import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username:{
        type:String,
        // required : true,
        // unique : true,
    },
    password:{
        type:String,
        // required:true,

    },
    score: {
        type: Number,
        default: 0, 
    },
});
export const User = model("User", userSchema);
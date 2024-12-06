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
    age:{
        type:Number,
        // required:false,
        // default:null
    }
});
export const User = model("User", userSchema);
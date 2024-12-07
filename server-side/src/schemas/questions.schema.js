import { Schema, model } from "mongoose";

const questionSchema = new Schema ({
    text:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        enum:["multiple-choice","input"],
    },
    options:[
        {
            type:String,
        },
    ],
    answer:{
        type:String,
        required:true,
    }
})
export default questionSchema
export const Question = model("Question", questionSchema);
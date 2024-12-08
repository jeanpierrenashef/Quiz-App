import { Schema, model } from "mongoose";
import questionSchema from "../schemas/questions.schema.js"
const quizSchema = new Schema ({
    id:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    questions: [questionSchema]
});

export const Quiz = model ("Quiz", quizSchema)
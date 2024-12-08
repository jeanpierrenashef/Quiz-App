import { Quiz } from "../models/quiz.model.js";
import { Question } from "../schemas/questions.schema.js";

export const createQuiz = async (req, res) => {
    const { title, questions } = req.body;

    if (!title) {
        return res.status(400).send({
            message: "Quiz title is required.",
        });
    }

    if (!Array.isArray(questions) || questions.length === 0) {
        return res.status(400).send({
            message: "Questions must be a non-empty array.",
        });
    }

    const formattedQuestions = questions.map((q) => {
        if (!q.text || !q.type || !q.answer) {
            throw new Error("Each question must have text, type, and answer.");
        }

        return new Question({
            text: q.text,
            type: q.type,
            options: q.options || [],
            answer: q.answer,
        });
    });

    const created = await Quiz.create({
        title,
        questions: formattedQuestions,
    });

    return res.json({
        quiz: created,
    });
}

export const getQuiz = async (req,res) => {
    const id = req.params.id;

    if(id){
        const quiz = await Quiz.findById(id);

        if (!quiz){
            return res.status(400).send({
                message : "No quiz exists"
            });
        }

        return res.json(quiz);
    }
}
export const getQuizes = async (req,res) => {
    
    const quizes = await Quiz.find({})

    if (quizes.length === 0){
        return res.status(400).send({
            message : "No quizes"
        });
    }

    return res.json (quizes);
}

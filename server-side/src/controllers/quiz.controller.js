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
};

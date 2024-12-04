import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Quiz = () => {
    const {id} = useParams();
    const quizzes = useSelector((global) => global.quizes);

    const quiz = quizzes.list.find((q) => q.id === Number(id));

if (!quiz) {
    return <h2>Quiz not found</h2>; 
}

return (
    <div className="quiz">
    <h1>{quiz.title}</h1>
    <div className="questions">
        {quiz.questions.map((question) => (
        <div className="question">
            <h3>{question.text}</h3>
            {question.type === "multiple-choice" ? (
            <ul>
                {question.options.map((option, i) => (
                <li key={i}>{option}</li>
                ))}
            </ul>
            ) : (
            <input type="text" placeholder="Your answer" />
            )}
        </div>
        ))}
    </div>
    </div>
);
}
export default Quiz;
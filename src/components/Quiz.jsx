import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/QuizDetails.css"

const Quiz = () => {
    const {id} = useParams();
    const quizzes = useSelector((global) => global.quizes);
    const [userAnswers, setUserAnswers] = useState({});

    const quiz = quizzes.list.find((q) => q.id === Number(id));

if (!quiz) {
    return <h2>Quiz not found</h2>; 
}
    const handleAnswers = (questionId, value) => {
        setUserAnswers((prev)=>({
            ...prev,
            [questionId]:value,
        }));
    }
return (
    <div className="quiz">
        <h1>{quiz.title}</h1>
        <div>
            {quiz.questions.map((q) => ( 
                <div key={q.id} className="question">
                <h3>{q.text}</h3>
                {q.type === "multiple-choice" ? (
                    <ul>
                        {q.options.map((option, i) => ( 
                            <li key={i} className={`option ${
                                userAnswers[q.id] === option ? "selected" : ""
                            }`} onClick={() => handleAnswers(q.id, option)}>{option}</li>
                        ))}
                    </ul>
                ) : (
                    <input type="text" placeholder="Your answer" onChange={(e) =>
                        handleAnswers(q.id, e.target.value)
                    }/>
                )}
                </div>
            ))}
        </div>
        <button
        onClick={() => {
            const updatedQuestions = quiz.questions.map((question) => ({
                ...question,
                isCorrect: question.answer === userAnswers[question.id],
            }));

            console.log(updatedQuestions);
            setUserAnswers({}); 
            }}
        className="submit-button"
    >
        Submit
    </button>
    </div>
);

}
export default Quiz;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

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
        <div className="questions">
        {quiz.questions.map((q) => ( 
            <div key={q.id} className="question">
            <h3>{q.text}</h3>
            {q.type === "multiple-choice" ? (
                <ul>
                    {q.options.map((option, i) => ( 
                        <li key={i}  onClick={() => handleAnswers(question.id, option)}>{option}</li>
                    ))}
                </ul>
            ) : (
                <input type="text" placeholder="Your answer" onChange={(e) =>
                    handleAnswers(question.id, e.target.value)
                }/>
            )}
            </div>
        ))}
        </div>
        <button
        onClick={() => console.log("Submit logic here")}
        className="submit-button"
      >
        Submit
      </button>
    </div>
);

}
export default Quiz;
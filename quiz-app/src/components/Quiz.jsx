import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector , useDispatch} from "react-redux";
import "../styles/QuizDetails.css"
import axios from "axios";

const Quiz = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const quiz = useSelector((global) =>
        global.quizes.list.find((q) => q.id === Number(id))
    );
    const points = useSelector((global)=>global.users);


    const [userAnswers, setUserAnswers] = useState({});
    const [currentScore, setCurrentScore] = useState(points);

    //const quiz = quizzes.list.find((q) => q.id === Number(id));
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8080/quiz/${encodeURIComponent(id)}`
    ).then(({data})=>{
        const action = {type: "quizes/loadQuizes", payload:data}
        dispatch(action)
    })
    },[])

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
                    <input type="text" value={userAnswers[q.id] || ""} placeholder="Your answer" onChange={(e) =>
                        handleAnswers(q.id, e.target.value)
                    }/>
                )}
                </div>
            ))}
        </div>
        <button
        onClick={() => {
            let correctAnswers = 0;

            quiz.questions.forEach((question) => {
                if (question.answer === userAnswers[question.id]) {
                    correctAnswers++;
            }});
        
            const pointsEarned = correctAnswers * 5; 
            setCurrentScore((prev) => 
                prev + pointsEarned); 
            setUserAnswers({});
            const action = {type:"users/userScore" , payload:pointsEarned};
            dispatch(action);
            }}
        className="submit-button"
    >
        Submit
    </button>
    </div>
);

}
export default Quiz;
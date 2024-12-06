import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import "../styles/Quizes.css";


const Home = () => {
    const navigate = useNavigate()
    const quizes = useSelector((global)=>global.quizes);
    const score = useSelector((global) => global.users);

    
return (
  <div className="quizes">
    <h1>Quizzes</h1>
    <h2>Score: {score.score}</h2>
    <div className="quiz-card">
      {quizes.list.map((q) => (
        <div className="quiz-item">
          <h3>{q.title}</h3>
          <button
            onClick={() => {
              navigate(`/quiz/${q.id}`);
            }}
          >
            Start
          </button>
        </div>
      ))}
    </div>
  </div>
);
    
    
}

export default Home


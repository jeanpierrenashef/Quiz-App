import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "../styles/Quizes.css";
import axios from 'axios';


const Home = () => {
    const navigate = useNavigate()
    const quizes = useSelector((global)=>global.quizes);
    const score = useSelector((global) => global.users);
    const dispatch = useDispatch();

    useEffect(()=>{
      axios.get("http://127.0.0.1:8080/quiz",
      ).then(({data})=>{
        const action = {type: "quizes/loadQuizes", payload: data}
        dispatch(action)
      });
    },[])

    
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


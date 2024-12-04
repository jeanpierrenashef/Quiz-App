import React from 'react'
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


const Home = () => {

    const quizes = useSelector((global)=>global.quizes);
    console.log(state);

  return (
    <div>
      
    </div>
  )
}

export default Home


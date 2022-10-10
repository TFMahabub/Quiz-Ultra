import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCard from './QuizCard';

const HomePage = () => {
  const quizData = useLoaderData().data;
  // console.log(quizData);
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-4 mx-3 md:mx-36 gap-8 md:gap-4 mt-12 md:mt-32'>
       {
        quizData.map(singleData => 
        <QuizCard
          key = {singleData.id}
          singleData = {singleData}
        ></QuizCard>)
       }
    </div>
  );
};

export default HomePage;
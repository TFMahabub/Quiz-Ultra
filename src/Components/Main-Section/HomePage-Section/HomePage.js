import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeHeader from './HomeHeader';
import QuizCard from './QuizCard';

const HomePage = () => {
  const quizData = useLoaderData().data;
  return (
    <div>
      <HomeHeader></HomeHeader>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 mx-3 md:mx-36 gap-8 md:gap-4 mt-12'>
       {
        quizData.map(singleData => 
        <QuizCard
          key = {singleData.id}
          singleData = {singleData}
        ></QuizCard>)
       }
      </div>
    </div>
  );
};

export default HomePage;
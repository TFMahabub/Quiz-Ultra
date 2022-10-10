import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from './SingleQuiz';

const QuizPage = () => {
  const quizData = useLoaderData().data;
  const {id, logo, name, questions, total} = quizData;
  // console.log(quizData);
  return (
    <div className='mt-10 grid grid-cols-1 gap-10 mx-4 md:mx-[10%] lg:mx-[20%]'>
      <h2 className='text-2xl font-semibold text-gray-700'>---- {name} ----</h2>
      {
        questions.map(singleQuestion => 
          <SingleQuiz
            key={singleQuestion.id}
            singleQuestion = {singleQuestion}
          ></SingleQuiz>)
      }
    </div>
  );
};

export default QuizPage;
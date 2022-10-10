import React from 'react';

const SingleQuiz = ({singleQuestion}) => {
  const {correctAnswer, id, options, question} = singleQuestion;
  // console.log(singleQuestion);
  return (
    <div className='border-2'>
      {question}
    </div>
  );
};

export default SingleQuiz;
import React, { useState } from 'react';
import Option from './Option';
import { EyeIcon } from '@heroicons/react/24/solid'

const SingleQuiz = ({singleQuestion}) => {
  const {correctAnswer, id, options, question} = singleQuestion;

  //For Eye Icon-
  const [seen, setSeen] = useState(false);

  return (
    <div className='bg-gray-100 p-8 rounded-md'>

      <div className='flex items-end justify-between mb-2'>
        <div>

        </div>
        <EyeIcon onClick={()=>setSeen(true)} className="h-5 w-5 cursor-pointer text-gray-700"/>
      </div>

      <h2 className='text-[18px] font-[500]'>{question}</h2>


      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
        {
          options.map((option,idx) => 
          <Option
            key={idx}
            option = {option}
            correctAnswer = {correctAnswer}
            seen = {seen}
          ></Option>)
        }
      </div>
    </div>
  );
};

export default SingleQuiz;
import React from 'react';
import { ArrowLongRightIcon, BeakerIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const QuizCard = ({singleData}) => {
  const {id, logo, name, total} = singleData;
  return (
    <div className='border-2 rounded-md p-2'>
      <img className='border-2 rounded-md' src={logo} alt="logo" />
      <div className='flex items-center justify-between text-gray-600 mt-2 mb-1'>
        <h2 className='text-lg font-medium tracking-wide'>{name}</h2>
        <Link to={`/quiz/${id}`} className='text- bg-[#D4F2F4] rounded-sm font-medium py-1 px-2 flex items-center'>Quiz <ArrowLongRightIcon className="ml-1 h-5 w-5"></ArrowLongRightIcon> </Link>
      </div>
    </div>
  );
};



export default QuizCard;
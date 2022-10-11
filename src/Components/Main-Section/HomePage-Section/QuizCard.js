import React from 'react';
import { ArrowLongRightIcon} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const QuizCard = ({singleData}) => {
  const {id, logo, name, total} = singleData;
  // console.log(singleData);
  return (
    <div className='border-2 rounded-md p-2'>
      <img className='rounded-md bg-[#eaf0ff]' src={logo} alt="logo" />
      <div className='px-2 mt-1'>
        <h2 className='text-lg text-start font-medium tracking-wide'>{name}</h2>
        <div className='flex items-center justify-between text-gray-600 mt-2 mb-1'>
          <h3 className='text-md font-normal border-[1px] border-[#179AB4] px-3 rounded-xl'><span className='text-[#179AB4]'>{total}</span> Quiz</h3>
          <Link to={`/quiz/${id}`} className='hover:bg-[#D4F2F4] border-2 border-[#84d1e0] rounded-md font-medium py-[2px] px-3 flex items-center'>Quiz <ArrowLongRightIcon className="ml-1 h-5 w-5"></ArrowLongRightIcon> </Link>
        </div>
      </div>
    </div>
  );
};



export default QuizCard;
import React from 'react';
import img from './Quizs.png'

const HomeHeader = () => {
  return (
    <div className='flex items-center justify-between mx-3 md:mx-36 mt-4 py-2 px-6 border-2'>
      <img className='w-20' src={img} alt="" />
      <h2 className='text-xl font-semibold text-gray-700'>Thank you for visiting my site</h2>
    </div>
  );
};

export default HomeHeader;
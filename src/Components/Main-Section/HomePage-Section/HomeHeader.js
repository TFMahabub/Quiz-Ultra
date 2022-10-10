import React from 'react';
import img from './Quizs.png'

const HomeHeader = () => {
  return (
    <div className='flex items-center justify-between mx-20 mt-4 border-2'>
      <img className='w-20' src={img} alt="" />
      <h2>Thank you for visiting my site :</h2>
    </div>
  );
};

export default HomeHeader;
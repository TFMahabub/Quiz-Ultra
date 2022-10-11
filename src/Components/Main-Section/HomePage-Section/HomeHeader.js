import React from 'react';
import img from './Quizs.png'

const HomeHeader = () => {
  return (
    <div className='md:flex items-center justify-between mx-3 md:mx-36 mt-4 py-2 px-6 border-2'>
      <img className='md:w-20' src={img} alt="" />
      <h2 className='md:ml-20 mt-2 md:mt-0 text-start text-lg md:font-semibold text-gray-700'>Wellcome to quiz website. Here you'll enjoy some question about React, javaScript, CSS and Git...</h2>
    </div>
  );
};

export default HomeHeader;
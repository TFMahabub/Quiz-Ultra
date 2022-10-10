import React from 'react';

const SingleBlog = ({blog}) => {
  const {id, title, answer} = blog
  return (
    <div className='my-10 mx-4 md:mx-10 lg:mx-40'>
      <h2 className='text-start text-3xl font-semibold text-[#179AB4]'>Blog: {id}</h2>
      <h2 className='text-start text-xl font-semibold mt-2 text-gray-800'>Question: {title}</h2>
      <p className='text-start mt-2 text-gray-700'>Answer: {answer}</p>
    </div>
  );
};

export default SingleBlog;
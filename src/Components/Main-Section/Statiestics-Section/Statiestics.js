import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Statiestics = () => {
  const quizData = useLoaderData().data;
  console.log(quizData);
  return (
    <div className='flex justify-center items-center mt-24'>
        <LineChart width={800} height={350} data={quizData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey='total' stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
    </div>
  );
};

export default Statiestics;
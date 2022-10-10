import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='flex items-center justify-between bg-[#F5F8FF] border-b-2 py-4 px-3 md:px-16'>
      <div>
        <NavLink to={'/'} className={'text-lg md:text-3xl font-semibold text-[#179AB4]'}>Quiz-Ultra</NavLink>
      </div>
      <div className='text-md md:text-xl font-normal md:font-semibold'>
        <NavLink to={'/'} className={'mx-1 md:mx-2 text-gray-600 hover:text-[#179AB4]'}>Home</NavLink>
        <NavLink to={'/statiestics'} className={'mx-1 md:mx-2 text-gray-600 hover:text-[#179AB4]'}>Statiestics</NavLink>
        <NavLink to={'/blog'} className={'mx-1 md:mx-2 text-gray-600 hover:text-[#179AB4]'}>Blog</NavLink>
      </div>
    </nav>
  );
};

export default Header;
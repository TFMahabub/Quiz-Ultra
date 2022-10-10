import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header-Section/Header';

const MainHomePage = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default MainHomePage;
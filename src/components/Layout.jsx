import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar, Footer } from './index';

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

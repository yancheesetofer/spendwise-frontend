import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import Navbar from '../components/General/Navbar';

const root = () => {
  return (
    <>
        <Navbar />
        
        {/* Render non root elements alongside base root component Navbar */}
        <Outlet />
    </>
  )
};

export default root;
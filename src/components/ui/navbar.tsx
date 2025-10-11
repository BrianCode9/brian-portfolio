import React from 'react';
import { Sidebar } from './sidebar';

const NavBar = () => {
  return (
    <nav className='w-full h-16 p-4 bg-white text-black border'>
      <div className='flex items-center justify-between'>
        <div className='flex space-x-10 text-lg'>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Projects</a>
          <a href="">YT Channel</a>
          <a href="">Contact</a>
          <a href="">Resume</a>
        </div>
        <Sidebar></Sidebar>
      </div>

    </nav >
  );
}

export default NavBar;


import React from 'react';
import { Sidebar } from './sidebar';

const NavBar = () => {
  return (
    <nav className='w-full h-16 p-4 bg-white text-black border'>
      <div className='flex items-center justify-between'>
        <div className='flex space-x-10 text-lg'>
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#youtube">YT Channel</a>
          <a href="#contact">Contact</a>
          <a href="/">Resume</a>
        </div>
        <Sidebar></Sidebar>
      </div>

    </nav >
  );
}

export default NavBar;


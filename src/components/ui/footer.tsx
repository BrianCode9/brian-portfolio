import React from 'react';

const Footer = () => {
  return (
    <div className='bg-white sticky text-black h-16 p-5 flex justify-center border'>
      <div className='flex flex-col justify-center'>
        <div className='flex space-x-10 text-md'>
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#youtube">YT Channel</a>
          <a href="#contact">Contact</a>
          <a href="/">Resume</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;


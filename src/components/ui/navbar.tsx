import React from 'react';
import { Sidebar } from './sidebar';
import Link from 'next/link';
import { SiLinkedin } from "react-icons/si";
import { SiYoutube } from "react-icons/si";
import { SiGithub } from "react-icons/si";


const NavBar = () => {
  return (
    <nav className='w-full h-16 p-4 bg-white text-black border'>
      <div className='flex items-center justify-between'>
        <div className='flex space-x-10 text-lg items-center'>
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#youtube">Channel</a>
          <a href="#contact">Contact</a>
          <a href="/">Resume</a>
          <Link href="https://www.linkedin.com/in/brianngo9/" target="_blank" rel="noopener noreferrer">
            <SiLinkedin size={25} />
          </Link>

          <Link href="https://www.youtube.com/@vietlastica" target="_blank" rel="noopener noreferrer">
            <SiYoutube size={25} />
          </Link>

          <Link href="https://github.com/BrianCode9" target="_blank" rel="noopener noreferrer">
            <SiGithub size={25} />
          </Link>
        </div>
      </div>

    </nav >
  );
}

export default NavBar;


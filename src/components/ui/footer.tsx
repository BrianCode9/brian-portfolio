import React from 'react';
import Link from 'next/link';
import { SiLinkedin } from "react-icons/si";
import { SiYoutube } from "react-icons/si";
import { SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <div className='bg-white sticky text-black h-16 p-5 flex justify-center border'>
      <div className='flex flex-col justify-center'>
        <div className='flex space-x-10 text-md items-center'>
          <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#youtube">Channel</a>
          <a href="#contact">Contact</a>
          <Link href="/brian_ngo_software.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </Link>

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
    </div>
  );
}

export default Footer;


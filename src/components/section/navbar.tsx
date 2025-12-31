'use client'

import React from 'react';
import Link from 'next/link';
import { SiYoutube } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import AnimatedLink from "@/components/ui/animatedlink"


const NavBar = () => {
  return (
    <nav className='w-full h-16 p-4 bg-white text-black border'>
      <div className='flex items-center justify-between'>
        <div className='flex space-x-10 text-lg items-center'>
          <AnimatedLink href="/">Home</AnimatedLink>
          <AnimatedLink href="#about">About</AnimatedLink>
          <AnimatedLink href="#projects">Projects</AnimatedLink>
          <AnimatedLink href="#youtube">Channel</AnimatedLink>
          <AnimatedLink href="#contact">Contact</AnimatedLink>
          <AnimatedLink href="/brian_ngo_software.pdf">
            Resume
          </AnimatedLink>

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


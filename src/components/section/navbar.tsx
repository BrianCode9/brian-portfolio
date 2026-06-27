'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { SiGithub } from "react-icons/si";
import { Menu, X } from "lucide-react";
import AnimatedLink from "@/components/ui/animatedlink";

const links = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experiences", label: "Travel" },
  { href: "/#contact", label: "Contact" },
  { href: "/documents/brian_ngo_most_updated.pdf", label: "Resume" },
];

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className='w-full bg-white text-black border-b-2 border-suit-teal relative z-40'>
      <div className='h-16 px-6 flex items-center justify-between'>
        {/* Desktop */}
        <div className='hidden md:flex space-x-8 text-lg items-center'>
          {links.map(l => (
            <AnimatedLink key={l.href} href={l.href}>{l.label}</AnimatedLink>
          ))}
          <Link href="https://github.com/BrianCode9" target="_blank" rel="noopener noreferrer">
            <SiGithub size={25} />
          </Link>
        </div>

        {/* Mobile: name + hamburger */}
        <div className='flex md:hidden items-center justify-between w-full'>
          <span className='font-bold text-lg'>Ngo</span>
          <button
            onClick={() => setMobileOpen(prev => !prev)}
            aria-label="Toggle menu"
            className='p-1'
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className='md:hidden absolute top-16 left-0 right-0 bg-white border-t border-suit-teal z-50 flex flex-col px-6 py-4 space-y-5 text-lg shadow-lg'>
          {links.map(l => (
            <AnimatedLink key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>
              {l.label}
            </AnimatedLink>
          ))}
          <Link
            href="https://github.com/BrianCode9"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
          >
            <SiGithub size={25} />
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;

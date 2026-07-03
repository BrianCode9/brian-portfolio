'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SiGithub } from "react-icons/si";
import { Menu, X, FileText } from "lucide-react";
import AnimatedLink from "@/components/ui/animatedlink";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/experiences", label: "Travel" },
  { href: "/#contact", label: "Contact" },
];

const NavBar = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  const solid = !isHome || scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 text-black transition-colors duration-300 ${
        solid ? 'bg-white border-b-2 border-suit-teal' : 'bg-transparent border-b-2 border-transparent'
      }`}
    >
      <div className='h-16 px-6 flex items-center justify-between'>
        {/* Desktop */}
        <div className='hidden md:flex space-x-8 text-xl items-center'>
          {links.map(l => (
            <AnimatedLink key={l.href} href={l.href}>{l.label}</AnimatedLink>
          ))}
          <Link href="https://github.com/BrianCode9" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <SiGithub size={25} />
          </Link>
          <Link href="/documents/brian_ngo_most_updated.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume">
            <FileText size={25} />
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
        <div className='md:hidden absolute top-16 left-0 right-0 bg-white border-t border-suit-teal z-50 flex flex-col px-6 py-4 space-y-5 text-xl shadow-lg'>
          {links.map(l => (
            <AnimatedLink key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>
              {l.label}
            </AnimatedLink>
          ))}
          <div className='flex items-center gap-5 pt-1'>
            <Link
              href="https://github.com/BrianCode9"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              aria-label="GitHub"
            >
              <SiGithub size={25} />
            </Link>
            <Link
              href="/documents/brian_ngo_most_updated.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              aria-label="Resume"
            >
              <FileText size={25} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;

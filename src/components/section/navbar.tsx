"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiGithub } from "react-icons/si";
import { FileText } from "lucide-react";
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
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const solid = !isHome || scrolled;

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-40 text-black transition-colors duration-300 ${
        solid
          ? "border-suit-teal border-b-2 bg-white"
          : "border-b-2 border-transparent bg-transparent"
      }`}
    >
      <div className="flex h-16 items-center justify-between px-6">
        {/* Desktop */}
        <div className="hidden items-center space-x-8 text-xl md:flex">
          {links.map((l) => (
            <AnimatedLink key={l.href} href={l.href}>
              {l.label}
            </AnimatedLink>
          ))}
          <Link
            href="https://github.com/BrianCode9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <SiGithub size={25} />
          </Link>
          <Link
            href="/documents/brian_ngo_most_updated.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
          >
            <FileText size={25} />
          </Link>
        </div>

        {/* Mobile: name + hamburger */}
        <div className="flex w-full items-center justify-between md:hidden">
          <span className="text-lg font-bold">Ngo</span>
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="relative h-6 w-6 p-1"
          >
            <span
              className={`absolute left-0 block h-[2px] w-6 bg-black transition-all duration-300 ${
                mobileOpen ? "top-[11px] rotate-45" : "top-[4px]"
              }`}
            />
            <span
              className={`absolute top-[11px] left-0 block h-[2px] w-6 bg-black transition-opacity duration-300 ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-[2px] w-6 bg-black transition-all duration-300 ${
                mobileOpen ? "top-[11px] -rotate-45" : "top-[18px]"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="border-suit-teal absolute top-16 right-0 left-0 z-50 flex flex-col space-y-5 border-t bg-white px-6 py-4 text-xl shadow-lg md:hidden">
          {links.map((l) => (
            <AnimatedLink
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </AnimatedLink>
          ))}
          <div className="flex items-center gap-5 pt-1">
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
};

export default NavBar;

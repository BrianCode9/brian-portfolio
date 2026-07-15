"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { SiYoutube } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import React from "react";

export function Sidebar() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="items-center justify-center bg-white">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="bg-white">
          <Button>
            <RxHamburgerMenu size={100} />
          </Button>
        </SheetTrigger>
        <SheetContent
          className="bg-suit-teal transform transition-all duration-500 ease-in-out data-[state=closed]:-translate-x-full data-[state=open]:translate-x-0"
          side="left"
        >
          <SheetHeader className="bg-suit-teal">
            <SheetTitle className="bg-suit-teal text-2xl">Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col space-y-6">
            <Link href="/" className="ml-8 hover:underline">
              Home
            </Link>
            <a href="#about" className="ml-8 hover:underline">
              About
            </a>
            <a href="#projects" className="ml-8 hover:underline">
              Projects
            </a>
            <a href="#contact" className="ml-8 hover:underline">
              Contact
            </a>
            <Link
              href="/documents/brian_ngo_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-8 hover:underline"
            >
              Resume
            </Link>
          </div>
          <SheetFooter>
            <div className="mt-4 flex flex-row space-x-6 pt-10">
              <Link
                href="https://www.youtube.com/@vietlastica"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiYoutube size={30} />
              </Link>

              <Link
                href="https://github.com/BrianCode9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub size={30} />
              </Link>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

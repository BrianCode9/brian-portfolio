'use client'

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { RxHamburgerMenu } from "react-icons/rx";
import Link from 'next/link';
import { SiLinkedin } from "react-icons/si";
import { SiYoutube } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import React from "react";

export function Sidebar() {
    const [open, setOpen] = React.useState(false)

    return (
        <div className="bg-white justify-center items-center">
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild className="bg-white">
                    <Button >
                        <RxHamburgerMenu size={100} />
                    </Button>
                </SheetTrigger>
                <SheetContent className="transition-all duration-500 ease-in-out transform data-[state=open]:translate-x-0 data-[state=closed]:-translate-x-full bg-suit-teal" side="left">
                    <SheetHeader className="bg-suit-teal">
                        <SheetTitle className="bg-suit-teal text-2xl">Menu</SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col space-y-6">
                        <a href="/" className="hover:underline ml-8">Home</a>
                        <a href="#about" className="hover:underline ml-8">About</a>
                        <a href="#projects" className="hover:underline ml-8">Projects</a>
                        <a href="#youtube" className="hover:underline ml-8">YT Channel</a>
                        <a href="#contact" className="hover:underline ml-8">Contact</a>
                        <a href="/" className="hover:underline ml-8">Resume</a>
                    </div>
                    <SheetFooter>
                        <div className="flex flex-row space-x-6 mt-4 pt-10">

                            <Link href="https://www.youtube.com/@vietlastica" target="_blank" rel="noopener noreferrer">
                                <SiYoutube size={30} />
                            </Link>

                            <Link href="https://github.com/BrianCode9" target="_blank" rel="noopener noreferrer">
                                <SiGithub size={30} />
                            </Link>
                        </div>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    )
}

'use client'

import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import Link from 'next/link';


export default function ProjectsPage() {
    return (
        <main className="min-h-screen p-8 bg-white">
            <h1 className="text-6xl font-bold mb-6 text-black underline decoration-orange-highlight">Projects</h1>
            <div className="mx-auto text-black">
                <div className='grid grid-cols-3 grid-rows-2 border text-xl gap-20 text-white'>

                    <Link
                        href="/projects/vivadocpu"
                        className="block p-20 text-center bg-suit-teal rounded-sm text-white transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                        aria-label="Open Vivado 8-Bit CPU project"
                    >
                        <div className="text-2xl font-semibold">Vivado 8-Bit CPU</div>
                        <div className="mt-4">Short Description</div>
                    </Link>

                    <Link
                        href="/projects/6502-computer"
                        className="block p-20 text-center bg-suit-teal rounded-sm text-white transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                        aria-label="Open 6502 Computer project"
                    >
                        <div className="text-2xl font-semibold">W65C02S Computer</div>
                        <div className="mt-4">Short Description</div>
                    </Link>

                    <Link
                        href="/projects/keyboard-pcb"
                        className="block p-20 text-center bg-suit-teal rounded-sm text-white transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                        aria-label="Open Keyboard PCB project"
                    >
                        <div className="text-2xl font-semibold">Keyboard PCB</div>
                        <div className="mt-4">Short Description</div>
                    </Link>

                    <Link
                        href="/projects/clock-module"
                        className="block p-20 text-center bg-suit-teal rounded-sm text-white transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                        aria-label="Open Clock Module project"
                    >
                        <div className="text-2xl font-semibold">Clock Module</div>
                        <div className="mt-4">Short Description</div>
                    </Link>

                    <Link
                        href="/projects/software-project-1"
                        className="block p-20 text-center bg-suit-teal rounded-sm text-white transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                        aria-label="Open Software Project 1"
                    >
                        <div className="text-2xl font-semibold">Software Project 1</div>
                        <div className="mt-4">Short Description</div>
                    </Link>

                    <Link
                        href="/projects/software-project-2"
                        className="block p-20 text-center bg-suit-teal rounded-sm text-white transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                        aria-label="Open Software Project 2"
                    >
                        <div className="text-2xl font-semibold">Software Project 2</div>
                        <div className="mt-4">Short Description</div>
                    </Link>

                    <Link
                        href="/projects/software-project-3"
                        className="block p-20 text-center bg-suit-teal rounded-sm text-white transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                        aria-label="Open Software Project 3"
                    >
                        <div className="text-2xl font-semibold">Software Project 3</div>
                        <div className="mt-4">Short Description</div>
                    </Link>

                    <Link
                        href="/projects/software-project-4"
                        className="block p-20 text-center bg-suit-teal rounded-sm text-white transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                        aria-label="Open Software Project 4"
                    >
                        <div className="text-2xl font-semibold">Software Project 4</div>
                        <div className="mt-4">Short Description</div>
                    </Link>

                    <Link
                        href="/projects/software-project-5"
                        className="block p-20 text-center bg-suit-teal rounded-sm text-white transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                        aria-label="Open Software Project 5"
                    >
                        <div className="text-2xl font-semibold">Software Project 5</div>
                        <div className="mt-4">Short Description</div>
                    </Link>

                    <Link
                        href="/projects/software-project-6"
                        className="block p-20 text-center bg-suit-teal rounded-sm text-white transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                        aria-label="Open Software Project 6"
                    >
                        <div className="text-2xl font-semibold">Software Project 6</div>
                        <div className="mt-4">Short Description</div>
                    </Link>

                    <Link
                        href="/projects/software-project-7"
                        className="block p-20 text-center bg-suit-teal rounded-sm text-white transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                        aria-label="Open Software Project 7"
                    >
                        <div className="text-2xl font-semibold">Software Project 7</div>
                        <div className="mt-4">Short Description</div>
                    </Link>

                    <Link
                        href="/projects/software-project-8"
                        className="block p-20 text-center bg-suit-teal rounded-sm text-white transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                        aria-label="Open Software Project 8"
                    >
                        <div className="text-2xl font-semibold">Software Project 8</div>
                        <div className="mt-4">Short Description</div>
                    </Link>
                </div>

                <div className='flex justify-end pt-10 '>
                    <Link href={"/"}>
                        <Button className='bg-orange-600 text-white size-sm'>Back</Button>
                    </Link>
                </div>
            </div>
        </main>
    )
}
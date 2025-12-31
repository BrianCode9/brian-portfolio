'use client'

import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import Link from 'next/link';


export default function ProjectsPage() {
    return (
        <main className="min-h-screen p-8 bg-white">
            <h1 className="text-6xl font-bold mb-6 text-black underline decoration-orange-highlight">Projects</h1>
            <div className="mx-auto text-black">
                <div className='flex grid grid-cols-3 grid-rows-2 border text-xl gap-20 text-white'>
                    <div className='p-20 text-center bg-suit-teal rounded-sm'>
                        Vivado 8-Bit CPU
                        <div>
                            Short Description:
                        </div>
                    </div>
                    <div className='p-20 text-center bg-suit-teal rounded-sm'>6502 computer</div>
                    <div className='p-20 text-center bg-suit-teal rounded-sm'>Keyboard PCB</div>
                    <div className='p-20 text-center bg-suit-teal rounded-sm'>Clock Module</div>
                    <div className='p-20 text-center bg-suit-teal rounded-sm'>Software Project</div>
                    <div className='p-20 text-center bg-suit-teal rounded-sm'>Software Project</div>
                    <div className='p-20 text-center bg-suit-teal rounded-sm'>Software Project</div>
                    <div className='p-20 text-center bg-suit-teal rounded-sm'>Software Project</div>
                    <div className='p-20 text-center bg-suit-teal rounded-sm'>Software Project</div>
                    <div className='p-20 text-center bg-suit-teal rounded-sm'>Software Project</div>
                    <div className='p-20 text-center bg-suit-teal rounded-sm'>Software Project</div>
                    <div className='p-20 text-center bg-suit-teal rounded-sm'>Software Project</div>
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
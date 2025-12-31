import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


// To fix the picture size issue add like a short description area at the bottom of the pictures that
// can cover that up and then also have them link to DevPost
const ProjectSection = () => {
  return (
    <div className='bg-white p-20 flex justify-center '>
      <div className='flex flex-col gap-20 text-black p-10'>
        <div className='flex justify-center text-5xl underline decoration-orange-highlight'>
          Featured Projects
        </div>
        <div className='flex grid grid-cols-3 grid-rows-1 gap-20 p-10 text-xl'>

          <Link
            href="/projects/vivadocpu"
            className="block p-20 text-center bg-suit-teal rounded-sm text-white transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            aria-label="Open Vivado 8-Bit CPU project"
          >
            <div className="text-xl font-semibold">Vivado 8-Bit CPU</div>
            <div className="mt-4">Short Description</div>
          </Link>
          <Link
            href="/projects/vivadocpu"
            className="block p-20 text-center bg-suit-teal rounded-sm text-white transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            aria-label="Open Vivado 8-Bit CPU project"
          >
            <div className="text-xl font-semibold">W65C02S Computer</div>
            <div className="mt-4">Short Description</div>
          </Link>
          <Link
            href="/projects/vivadocpu"
            className="block p-20 text-center bg-suit-teal rounded-sm text-white transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            aria-label="Open Vivado 8-Bit CPU project"
          >
            <div className="text-xl font-semibold">Custom Keyboard PCB</div>
            <div className="mt-4">Short Description</div>
          </Link>
        </div>
        <div className='flex justify-center'>
          <Link href={"/projects"}>
            <Button className='bg-orange-600 text-white'>More</Button>
          </Link>
        </div>
      </div>
    </div >
  );
}

export default ProjectSection;

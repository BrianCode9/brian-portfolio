import React from 'react';


// To fix the picture size issue add like a short description area at the bottom of the pictures that
// can cover that up and then also have them link to DevPost
const ProjectSection = () => {
  return (
    <div className='bg-white p-20 flex justify-center '>
      <div className='flex flex-col gap-20 text-black p-10'>
        <div className='flex justify-center text-5xl underline decoration-orange-highlight'>
          Projects I'm Working On
        </div>
        <div className='flex grid grid-cols-4 grid-rows-1 gap-20 p-10 text-xl'>
          <div className='p-20 text-center border-2 bg-slate-200'>Automated Server Provisioner</div>
          <div className='p-20 text-center border-2 bg-slate-200'>6502 computer</div>
          <div className='p-20 text-center border-2 bg-slate-200'>PCB</div>
          <div className='p-20 text-center border-2 bg-slate-200'>Personal Portfolio Website</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;

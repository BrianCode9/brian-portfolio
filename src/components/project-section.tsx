import React from 'react';


// To fix the picture size issue add like a short description area at the bottom of the pictures that
// can cover that up and then also have them link to DevPost
const ProjectSection = () => {
  return (
    <div className='bg-blue-500 p-20 flex justify-center '>
      <div className='flex flex-col gap-20 text-black p-10 border-2'>
        <div className='flex justify-center border-2 text-4xl'>
          My Work
        </div>
        <div className='flex grid grid-cols-4 grid-rows-1 gap-20 p-20'>
          <div className='border-2 p-20'>Hello</div>
          <div className='border-2 p-20'>Hello</div>
          <div className='border-2 p-20'>Hello</div>
          <div className='border-2 p-20'>Hello</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;

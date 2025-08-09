import React from 'react';

const AboutSection = () => {
  return (
    <div className='w-full min-h-[60vh] bg-blue-300 p-20 flex justify-center'>
      <div className='flex flex-row gap-10'>
        <div className='border flex flex-col gap-10 border-2 p-10 w-200'>
          <div className='text-black text-4xl border-2'>
            About Me
          </div>
          <div className='text-black text-xl border-2 h-full'>
            I'm a WVU student studying computer engineering and computer science.
          </div>
        </div>
        <div className='w-128 h-128 rounded-full border-2 overflow-hidden'>
          <img src="my-image-here" alt="Profile">

          </img>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;


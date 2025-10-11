import React from 'react';

const YouTubeSection = () => {
  return (
    <div className='bg-white flex justify-center'>
      <div className='text-black w-600 flex justify-center bg-slate-300 pt-20 pb-20'>
        <div className='flex flex-row gap-10'>
          <div className='flex flex-col p-10 w-150 gap-10 text-black'>
            <div className='text-6xl'>Vietlastica</div>
            <div className='h-full'>This is my YouTube channel where I like posting videos about trips, personal projects, and educational videos.</div>
          </div>
          <div className='p-10 w-150 text-black'>
            <div className='flex grid grid-cols-2 grid-rows-3 gap-2'>
              <div className='p-5 w-full h-50 text-center border-2'>N/A</div>
              <div className='p-5 w-full h-50 text-center border-2'>N/A</div>
              <div className='p-5 w-full h-50 text-center border-2'>N/A</div>
              <div className='p-5 w-full h-50 text-center border-2'>N/A</div>
              <div className='p-5 w-full h-50 text-center border-2'>N/A</div>
              <div className='p-5 w-full h-50 text-center border-2'>N/A</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YouTubeSection;

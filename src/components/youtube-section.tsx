import React from 'react';

const YouTubeSection = () => {
  return (
    <div className='bg-blue-600 p-20 flex justify-center'>
      <div className='flex flex-row gap-10'>
        <div className='border flex flex-col border-2 p-20 w-150 gap-10'>
          <div className='border-2 text-4xl'>Vietlastica</div>
          <div className='border-2'>Description</div>
        </div>
        <div className='border-2 p-20 w-150 gap-20'>
          <div className='flex grid grid-cols-2 grid-rows-3 gap-10 border-2'>
            <div className='border-2'>hello</div>
            <div className='border-2'>hello</div>
            <div className='border-2'>hello</div>
            <div className='border-2'>hello</div>
            <div className='border-2'>hello</div>
            <div className='border-2'>hello</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YouTubeSection;

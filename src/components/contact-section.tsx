import React from 'react';

const ContactSection = () => {
  return (
    <div className='bg-purple-500 p-20 flex justify-center'>

      <div className='flex flex-col gap-10'>
        <div className='text-5xl'>Want to React Out?</div>
        <div className='flex flex-row gap-10'>
          <div className='border-2 p-10 w-150'>
            <div className='border-2 h-full p-5'>Photo Here</div>
          </div>
          <div className='border-2 p-10 w-150 gap-5'>
            <div className='grid grid-cols-2 gap-5 h-10'>
              <div className='flex border p-1 items-center'>Name</div>
              <div className='flex border p-1 items-center'>Email</div>
            </div>
            <div className='flex border p-1 h-50 mt-5'>Messasge</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;

import React from 'react';

const ContactSection = () => {
  return (
    <div className='bg-[#0a1f2b] p-20 flex justify-center'>
      <div className='flex flex-col gap-10 text-white'>
        <div>
          <div className='text-5xl font-bold mb-2'>Want to Reach Out?</div>
          <div className='h-1 w-16 bg-orange-highlight' />
        </div>
        <div className='flex flex-row gap-10 bg-suit-teal text-white rounded-lg'>
          <div className='p-10 w-150 gap-5 text-white'>
            <div className='text-3xl font-bold mb-1'>Contact Me</div>
            <div className='h-1 w-12 bg-orange-highlight mb-5' />
            <div>
              Email: brianngo2948@gmail.com
            </div>
            <div>
              LinkedIn: Brianngo9
            </div>
            <div>
              Instagram: Brian_Ngo9
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;

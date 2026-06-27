import React from 'react';

const ContactSection = () => {
  return (
    <div className='bg-[#0a1f2b] px-6 py-12 md:px-16 md:py-20 flex justify-center'>
      <div className='flex flex-col gap-8 text-white w-full max-w-xl'>
        <div>
          <div className='text-3xl md:text-5xl font-bold mb-2'>Want to Reach Out?</div>
          <div className='h-1 w-16 bg-orange-highlight' />
        </div>
        <div className='bg-suit-teal text-white rounded-lg w-full'>
          <div className='p-6 md:p-10 flex flex-col gap-3'>
            <div className='text-2xl md:text-3xl font-bold mb-1'>Contact Me</div>
            <div className='h-1 w-12 bg-orange-highlight mb-2' />
            <div>Email: brianngo2948@gmail.com</div>
            <div>LinkedIn: Brianngo9</div>
            <div>Instagram: Brian_Ngo9</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;

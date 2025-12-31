import React from 'react';

const ContactSection = () => {
  return (
    <div className='bg-white p-20 flex justify-center'>
      <div className='flex flex-col gap-10 text-black'>
        <div className='text-5xl underline decoration-orange-highlight'>Want to React Out?</div>
        <div className='flex flex-row gap-10 bg-suit-teal text-white rounded-lg'>
          <div className='p-10 w-150 gap-5 text-white'>
            <div className='text-3xl underline decoration-orange-highlight mb-5'>Contact Me</div>
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

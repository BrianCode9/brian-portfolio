import React from 'react';
import Link from 'next/link';
import AnimatedButton from '../ui/animatedbutton';

const AboutSection = () => {
  return (
    <div className='bg-white pt-10 md:pt-20'>
      <div className='bg-suit-teal py-10 md:py-20'>
        <div className='max-w-7xl mx-auto px-8 md:px-16'>
          <div className='flex flex-col md:flex-row gap-10 md:gap-20 items-center'>
            <div className='flex flex-col gap-5 flex-1'>
              <div>
                <div className='text-white text-3xl md:text-4xl font-bold mb-2'>
                  About Me
                </div>
                <div className='h-1 w-12 bg-orange-highlight' />
              </div>
              <div className='text-white text-lg md:text-xl space-y-4'>
                <p>I'm Brian Ngo, an electrical and computer engineering student at West Virginia University.
                  Currently, I'm a Software Development Intern at Agile5 Technologies doing full-stack enterprise development.
                  In my free time, I enjoy starting projects, and cooking. I also love traveling to new places.</p>
              </div>
              <div>
                <Link href={"/about"}>
                  <AnimatedButton variant="teal">Wanna know more?</AnimatedButton>
                </Link>
              </div>
            </div>
            <div className='flex justify-center shrink-0'>
              <div className='w-56 h-56 md:w-80 md:h-80 lg:w-90 lg:h-90 rounded-full overflow-hidden'>
                <img src="/images/profile/NgoBucklews.jpg" alt="Profile" className='w-full h-full object-cover object-top' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;

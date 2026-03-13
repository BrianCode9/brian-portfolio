import React from 'react';
import { Button } from '@/components/ui/button'
import Link from 'next/link';
import AnimatedLink from '../ui/animatedlink';
import { SiGithub } from 'react-icons/si';

const AboutSection = () => {
  return (

    <div className='bg-white flex justify-center text-black pt-20'>
      <div className='text-black w-600 flex justify-center bg-suit-teal pt-20 pb-10'>
        <div className='flex flex-row gap-20'>
          <div className='flex flex-col gap-5 p-10 w-200'>
            <div className='text-white text-4xl underline decoration-orange-highlight'>
              About Me
            </div>
            <div className='text-white text-xl h-full space-y-4'>
              <p>I'm Brian Ngo, an electrical and computer engineering student at West Virginia University.
                Currently, I'm a Software Development Intern at Agile5 Technologies doing full-stack enterprise development.
                In my free time, I enjoy starting projects, and cooking. I also love traveling to new places.</p>
            </div>
            <div>
              <Link href={"/about"}>
                <Button className='bg-orange-600 text-white'>Wanna know more?</Button>
              </Link>
            </div>

          </div>
          <div className='flex justify-center'>
            <div className='w-90 h-90 rounded-full overflow-hidden'>
              <img src="NgoBucklews.jpg" alt="Profile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;

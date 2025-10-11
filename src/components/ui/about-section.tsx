import React from 'react';

const AboutSection = () => {
  return (
    <div className='bg-white flex justify-center text-black pt-20'>
      <div className='text-black w-600 flex justify-center bg-suit-teal pt-20 pb-10'>
        <div className='flex flex-row gap-20'>
          <div className='flex flex-col gap-5 p-10 w-200'>
            <div className='text-white text-4xl underline decoration-orange-highlight'>
              About Me
            </div>
            <div className='text-white text-xl h-full '>
              I'm Brian Ngo, a Computer Engineering and Computer Science student at West Virginia University.
              Currently, I'm working as a Software Development Intern at Agile5 Technologies focusing on full-stack development, using
              languages and technologies: TypeScript, JavaScript, Python, HTML, Tailwind CSS, Next.js, React, ShadCN, SQL, and Databricks.

              In my free time, I enjoy starting cool projects, making YouTube videos, and traveling.
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

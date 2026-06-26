import React from 'react';
import Link from "next/link";
import AnimatedButton from "@/components/ui/animatedbutton";

const Footer = () => {
  return (
    <div className='bg-[#0a1f2b] sticky text-white pt-5 px-5 pb-10'>
      <div className='flex flex-col justify-center'>
        <div className='flex space-x-10 text-md items-center justify-end'>
          <a href="#">
            <AnimatedButton variant="teal">Back Up</AnimatedButton>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;


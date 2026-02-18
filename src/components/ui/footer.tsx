import React from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <div className='bg-slate-300 sticky text-black h-18 p-5'>
      <div className='flex flex-col justify-center'>
        <div className='flex space-x-10 text-md items-center justify-end'>
          <a href="#">
            <Button className='bg-orange-600 text-white'>Back Up</Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

